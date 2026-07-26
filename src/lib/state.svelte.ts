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
	...defaultState,
});

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
	for (const score of Object.values(gameState.score)) {
		if (score <= 0) {
			return true;
		}
	}
	return false;
}

export function gameOver() {
	gameState.clockIndex = gameState.length;
}
