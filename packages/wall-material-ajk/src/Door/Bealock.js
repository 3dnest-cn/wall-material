import { getColors } from '../utils.js';

export const Bealock = (graphics, context) => {
	const { width, height} = context;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, .01)
		.drawRect(0, 0, width, height)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};