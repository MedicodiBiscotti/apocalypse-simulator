<script lang="ts">
	import "./app.css";
	import EventCard from "./lib/EventCard.svelte";
	import {
		gameOver,
		gameState,
		isGameOver,
		loadEvents,
		setupGame,
	} from "./lib/game-state.svelte.js";
	import GameOver from "./lib/GameOver.svelte";
	import ScoresContainer from "./lib/ScoresContainer.svelte";
	import type { Event } from "./types.ts";

	const data = await loadEvents();
	// When setup is imported, Svelte doesn't know that setup mutates gameState, so it renders the UI prematurely.
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
	{#if !events}

	{:else if gameState.clockIndex < gameState.length}
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
