<script lang="ts">
	import "./app.css";
	import EventCard from "./lib/EventCard.svelte";
	import GameOver from "./lib/GameOver.svelte";
	import { shuffleArray } from "./lib/random-utils";
	import { gameState } from "./lib/state.svelte";
	import type { Event } from "./types.ts";

	const modules = import.meta.glob("./data/*.ts", { import: "default" }) as Record<
		string,
		() => Promise<Event>
	>;
	const data = await Promise.all(Object.values(modules).map((load) => load()));

	let events: Event[] = $state([]);

	function setupGame(data: Event[]): Event[] {
		const events: Event[] = [];
		// add multiple occurrences of each event. Reference is fine, but otherwise we can clone or spread.
		for (const event of data) {
			events.push(event);
			events.push(event);
		}
		shuffleArray(events);
		gameState.clockIndex = 0;
		return events;
	}

	events = setupGame(data);
</script>

<main>
	{#if gameState.clockIndex < events.length}
		<p>{gameState.clockIndex + 1}/{events.length}</p>
		<EventCard event={events[gameState.clockIndex]} />
	{:else}
		<GameOver />
		<button class="mt-4" onclick={() => (events = setupGame(data))}>New game</button>
	{/if}
</main>

<style></style>
