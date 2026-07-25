import { gameState } from "../lib/state.svelte";
import type { Event } from "../types.ts";

export default {
	id: "b",
	name: "Busy bodies",
	description:
		"Uneasiness grows as busy bodies scurry in the night... A beggar knocks on your door.",
	options: [
		{
			description: "Turn them away.",
			result: () => {
				gameState.clockIndex++;
			},
		},
		{
			description: "Pitiful creature. Give them all your money.",
			result: () => {
				gameState.score.wealth = 0;
				gameState.clockIndex++;
			},
		},
	],
} satisfies Event;
