import { getColors } from '../utils.js';

export const DoubleDoor = (graphics, context) => {
	const { width, height, fliped} = context;
	const flipSign = fliped ? 1 : 0;
	const centerWidth = width / 31;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, .01)
		.drawRect(0, 0, width, height)
		.endFill()
		.beginFill(color.fill)
		.drawRect(0 , height / 2 * flipSign, width / 2 + centerWidth, height / 2)
		.drawRect(width / 2 - centerWidth, height / 2 - height / 2 * flipSign, width / 2 + centerWidth, height / 2);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};