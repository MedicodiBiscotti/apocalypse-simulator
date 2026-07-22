<script>
	let { event } = $props();
</script>

<div class="h-128 w-sm rounded-2xl bg-neutral-900 p-2 text-center">
	<p class="font-display text-3xl">{event.name}</p>
	<p class="mt-3 font-written text-2xl">{event.description}</p>
	<div class="mt-4 flex flex-col gap-3">
		{#each event.options as option}
			<button onclick={() => option.result()}>{option.description}</button>
		{/each}
	</div>
</div>
