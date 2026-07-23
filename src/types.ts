export type Event = {
	id: string;
	name: string;
	description: string;
	options: [Option, ...Option[]]; // non-empty array
};

export type Option = {
	description: string;
	/*
	 events are in charge of advancing the clock. This allows potential time travel shenanigans.
	 2 options for changing the game state:
	 1. import in the event's .ts file and mutate the state. Doesn't even have to be a .svelte.ts file.
	 2. pass the state to the result function and mutate there. Doesn't have to return the state and update state in the component.
	 option 1 is simpler.
	*/
	result: () => void;
};
