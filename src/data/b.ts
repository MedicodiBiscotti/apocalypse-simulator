import { gameState } from "../lib/state.svelte";
import type { Event } from "../types.ts";

export default {
	id: "b",
	name: "Busy bodies",
	description: "Uneasiness grows as busy bodies scurry in the night...",
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
