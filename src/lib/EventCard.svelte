<script>
	let { clazz, event } = $props();
</script>

<div class="h-128 w-sm rounded-2xl bg-neutral-900 p-2 text-center {clazz}">
	<p class="font-display text-3xl">{event.name}</p>
	<p class="mt-3 font-written text-2xl">{event.description}</p>
</div>
