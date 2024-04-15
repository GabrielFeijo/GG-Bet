const colors = ['red', 'white', 'gray'] as const;
const weights = [60, 10, 30];

export const randomizeColor = (): (typeof colors)[number] => {
	const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
	let randomNumber = Math.random() * totalWeight;

	for (let i = 0; i < colors.length; i++) {
		if (randomNumber < weights[i]) {
			return colors[i];
		}
		randomNumber -= weights[i];
	}

	return colors[0];
};
