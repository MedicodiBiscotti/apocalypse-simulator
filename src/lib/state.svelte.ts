export const gameState = $state({
	clockIndex: 0,
});

// helper since it's a common fallback.
export function incrementGameClock() {
	gameState.clockIndex++;
}
