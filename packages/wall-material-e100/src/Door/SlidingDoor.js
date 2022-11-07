import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

// width: 800,

export const SlidingDoor = (graphics, context) => {
	const { width, height, scale, fliped} = context;
	const flipSign = fliped ? 1 : 0;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.drawRect(0 , height / 2 * flipSign, width / 2, height / 2)
		.drawRect(width / 2, height / 2 - height / 2 * flipSign, width / 2, height / 2)
		.lineStyle(lineWidth * 1.8, color.line)
		.moveTo(width / 2, 0)
		.lineTo(width / 2, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};