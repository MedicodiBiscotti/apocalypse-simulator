export const defaultState = {
	clockIndex: 0,
	score: {
		wealth: 50,
	},
};

export const gameState = $state({
	...defaultState,
});

// helper since it's a common fallback.
export function incrementGameClock() {
	gameState.clockIndex++;
}

export function reset() {
	for (const key in gameState) {
		gameState[key] = defaultState[key];
	}
}

export function gameOver(len: number) {
	gameState.clockIndex = len;
}
