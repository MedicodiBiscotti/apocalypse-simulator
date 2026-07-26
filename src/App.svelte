<script lang="ts">
	import "./app.css";
	import EventCard from "./lib/EventCard.svelte";
	import GameOver from "./lib/GameOver.svelte";
	import { shuffleArray } from "./lib/random-utils";
	import ScoresContainer from "./lib/ScoresContainer.svelte";
	import { gameOver, gameState, isGameOver, reset } from "./lib/state.svelte";
	import type { Event } from "./types.ts";

	const modules = import.meta.glob("./data/*.ts", { import: "default" }) as Record<
		string,
		() => Promise<Event>
	>;
	const data = await Promise.all(Object.values(modules).map((load) => load()));

	function setupGame(data: Event[]): Event[] {
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

	let events: Event[] = $state(setupGame(data));

	$effect(() => {
		// Check for game over condition. Make sure we are not already at game over screen to avoid double update.
		// That check is actually not needed because of automatic dependency arrays.
		if (isGameOver()) {
			gameOver();
		}
	});
</script>

<main>
	{#if gameState.clockIndex < gameState.length}
		<div class="flex items-end justify-between px-2">
			<ScoresContainer />
			<p class="font-display text-2xl">{gameState.clockIndex + 1}/{gameState.length}</p>
		</div>
		<EventCard event={events[gameState.clockIndex]} />
	{:else}
		<GameOver />
		<ScoresContainer />
		<button class="mt-4" onclick={() => (events = setupGame(data))}>New game</button>
	{/if}
</main>

<style></style>
