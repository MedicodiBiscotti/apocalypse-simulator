import { gameState } from "../lib/state.svelte";
import type { Event } from "../types.ts";

export default {
	id: "a",
	name: "Abnormal artefact discovered",
	description:
		"An object of obscure potency was found in the fields. Damn farmer could have tripped over it. What would have happened then?",
	options: [
		{
			description: "Do something.",
			result: () => {
				gameState.score.wealth += 10;
				gameState.clockIndex++;
			},
		},
		{
			description: "Do something else.",
			result: () => {
				gameState.score.wealth -= 10;
				gameState.clockIndex++;
			},
		},
	],
} satisfies Event;
