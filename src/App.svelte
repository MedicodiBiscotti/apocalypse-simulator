<script lang="ts">
	import './app.css';
	import EventCard from './lib/EventCard.svelte';
	import type { Event } from './types.ts';
	import { shuffleArray } from './lib/random-utils';
	import GameOver from "./lib/GameOver.svelte";

	const modules = import.meta.glob('./data/*.ts', { import: 'default' }) as Record<
		string,
		() => Promise<Event>
	>;
	const data = await Promise.all(Object.values(modules).map((load) => load()));
	const events: Event[] = [];
	// add multiple occurrences of each event. Reference is fine, but otherwise we can clone or spread.
	for (const event of data) {
		events.push(event);
		events.push(event);
	}
	shuffleArray(events);

	let currentIndex = $state(0);
</script>

<main>
	{#if currentIndex < events.length }
		<p>{currentIndex + 1}/{events.length}</p>
		<EventCard clazz="mb-4" event={events[currentIndex]} />
		<button onclick={() => currentIndex++}>Next</button>
	{:else }
		<GameOver/>
	{/if}
</main>

<style></style>
