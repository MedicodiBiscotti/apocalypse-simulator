<script lang="ts">
	const { value } = $props();
</script>

<!-- Text on top of meter. Can use grid-template-areas but only with arbitrary properties in Tailwind.
 		 Or position: absolute, top, and transform: translate -->
<div class="grid text-center [grid-template-areas:'pile']">
	<meter class="[grid-area:pile]" min="0" low="31" high="69" max="100" optimum="100" {value}
		>{value}/100</meter
	>
	<!-- Needs full height of parent for clip. p tag can't vertical align with that height, hence div. -->
	<div
		class="grid size-full items-center [grid-area:pile]"
		style={`clip-path: inset(${100 - value}% 0 0 0)`}
	>
		<p class="text-black">{value}</p>
	</div>
	<div
		class="grid size-full items-center [grid-area:pile]"
		style={`clip-path: inset(0 0 ${value}% 0)`}
	>
		<p class="text-white">{value}</p>
	</div>
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
		display: block;
		block-size: 30px;
		inline-size: 100px;
	}

	meter::-webkit-meter-inner-element {
		display: block;
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
