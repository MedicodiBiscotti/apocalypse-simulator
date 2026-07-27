import type { Event } from "../types";
import { shuffleArray } from "./random-utils";

type GameState = {
	// length in game state helps with writing helper functions related to clockIndex.
	length: number;
	clockIndex: number;
	score: {
		wealth: number;
		aristocracy: number;
		peasants: number;
		church: number;
	};
};

export const defaultState: Omit<GameState, "length"> = {
	clockIndex: 0,
	score: {
		wealth: 50,
		aristocracy: 30,
		peasants: 50,
		church: 70,
	},
};

export const gameState: GameState = $state({
	length: 1,
	...defaultState,
});

export function loadEvents() {
	const modules = import.meta.glob("../data/*.ts", { import: "default" }) as Record<
		string,
		() => Promise<Event>
	>;
	return Promise.all(Object.values(modules).map((load) => load()));
}

export function setupGame(data: Event[]): Event[] {
	const events: Event[] = [];
	// add multiple occurrences of each event. Reference is fine, but otherwise we can clone or spread.
	for (const event of data) {
		events.push(event);
		events.push(event);
	}
	shuffleArray(events);
	gameState.length = events.length;
	reset();
	return events;
}

// helper since it's a common fallback.
export function incrementGameClock() {
	gameState.clockIndex++;
}

export function reset() {
	for (const key in defaultState) {
		gameState[key] = defaultState[key];
	}
}

// Checks loss condition.
export function isGameOver(): boolean {
	if (gameState.clockIndex >= gameState.length) {
		return true;
	}
	for (const score of Object.values(gameState.score)) {
		if (score <= 0) {
			return true;
		}
	}
	return false;
}
