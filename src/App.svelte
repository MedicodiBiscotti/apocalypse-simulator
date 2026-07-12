<script lang="ts">
	import './app.css';
	import EventCard from './lib/EventCard.svelte';
	import type { Event } from './types.ts';
	import { shuffleArray } from './lib/random-utils';

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
</script>

<main>
	{#each events as event}
		<EventCard clazz="mb-4" {event} />
	{/each}
</main>

<style></style>
