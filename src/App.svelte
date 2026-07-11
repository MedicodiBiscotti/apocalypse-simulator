<script lang="ts">
	import './app.css';
	import type { Event } from './types.ts';

	const modules = import.meta.glob('./data/*.ts', { import: 'default' }) as Record<
		string,
		() => Promise<Event>
	>;
	const data = await Promise.all(Object.values(modules).map((load) => load()));
</script>

<main>
	{#each data as d}
		{d.id}
	{/each}
</main>

<style></style>
