<script>
	import Score from "./Score.svelte";
	import { gameState } from "./state.svelte";
</script>

<div class="flex items-center justify-center gap-1">
	{#each Object.values(gameState.score) as score}
		<Score value={score} />
	{/each}
</div>
