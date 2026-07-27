<script>
	import { gameState } from "./game-state.svelte.js";
	import Score from "./Score.svelte";
</script>

<div class="flex items-center justify-center gap-1">
	{#each Object.values(gameState.score) as score}
		<Score value={score} />
	{/each}
</div>
