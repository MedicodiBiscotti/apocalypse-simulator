<script>
	let { clazz, event } = $props();
</script>

<div class="w-sm h-128 p-2 text-center bg-neutral-900 rounded-2xl {clazz}">
    <p class="text-3xl font-display">{event.name}</p>
    <p class="font-written text-2xl mt-3">{event.description}</p>
</div>
