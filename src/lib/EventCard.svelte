<!-- Safe defaults to prevent softlocks. Type may still be strict, but guards are good to have. -->
<script lang="ts">
	import type { Event } from "../types.ts";
	import { incrementGameClock } from "./game-state.svelte.js";

	let { event }: { event: Event } = $props();

	// If no condition, show option by default.
	const visibleOptions = $derived(event.options?.filter((o) => o.condition?.() ?? true));
</script>

<div class="h-128 w-sm rounded-2xl bg-neutral-900 p-2 text-center">
	<p class="font-display text-3xl">{event.name}</p>
	<p class="mt-3 font-written text-2xl">{event.description}</p>
	<div class="mt-4 flex flex-col gap-3">
		{#if visibleOptions?.length}
			{#each visibleOptions as option}
				<!-- Increment clock as default result if missing. -->
				<button onclick={() => (option.result ?? incrementGameClock)()}>{option.description}</button
				>
			{/each}
		{:else}
			<!-- Guard against softlock on no options. Event authors should provide a default option, but just in case. -->
			<button onclick={incrementGameClock}>Nothing happens...</button>
		{/if}
	</div>
</div>
