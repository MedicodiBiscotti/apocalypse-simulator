<script lang="ts">
	const { value } = $props();
</script>

<div class="flex items-center justify-center gap-1">
	{value}
	<meter min="0" low="31" high="69" max="100" optimum="100" {value}>{value}/100</meter>
</div>

<style>
	meter {
		writing-mode: vertical-lr;
		direction: rtl;
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		/*background: none;*/
		background: var(--color-neutral-900);
		block-size: 30px;
		inline-size: 100px;
	}

	meter::-webkit-meter-inner-element {
		display: inline-block;
		transform: translateX(50%);
	}

	meter:-moz-meter-optimum::-moz-meter-bar {
		background: var(--color-green-400);
	}
	meter::-webkit-meter-optimum-value {
		background: var(--color-green-400);
	}
	meter:-moz-meter-sub-optimum::-moz-meter-bar {
		background: var(--color-yellow-400);
	}
	meter::-webkit-meter-suboptimum-value {
		background: var(--color-yellow-400);
	}
	meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
		background: var(--color-red-500);
	}
	meter::-webkit-meter-even-less-good-value {
		background: var(--color-red-500);
	}
	meter::-moz-meter-bar {
		/*background: none;*/
		/*background: var(--color-neutral-900);*/
	}
	meter::-webkit-meter-bar {
		background: none; /* Required to get rid of the default background property */
		/*background: var(--color-neutral-900);*/
	}
</style>
