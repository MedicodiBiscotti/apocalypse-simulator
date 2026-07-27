<script lang="ts">
	import "./app.css";
	import EventCard from "./lib/EventCard.svelte";
	import { gameState, isGameOver, loadEvents, setupGame } from "./lib/game-state.svelte.js";
	import GameOver from "./lib/GameOver.svelte";
	import ScoresContainer from "./lib/ScoresContainer.svelte";
	import type { Event } from "./types.ts";

	const data = await loadEvents();
	// When setup is imported, Svelte doesn't know that setup mutates gameState, so it renders the UI prematurely.
	let events: Event[] = $state(setupGame(data));
</script>

<main>
	{#if !events}

	{:else if !isGameOver()}
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
