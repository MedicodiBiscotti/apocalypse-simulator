import { gameState } from "../lib/state.svelte";
import type { Event } from "../types.ts";

export default {
	id: "c",
	name: "Cultist gathering",
	description:
		"Chanting can be heard coming from behind the closed doors of a town manor, interspersed with cheers or maybe screams. Is that a glint of red light?",
	options: [
		{
			description: "Do something.",
			result: () => {
				gameState.clockIndex++;
			},
		},
		{
			description: "Do something else.",
			result: () => {
				gameState.clockIndex++;
			},
		},
	],
} satisfies Event;
