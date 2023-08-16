import { LINE_WIDTH, STATE } from '../constant.js';
import { getColors } from '../utils.js';

export const BasicWindow = (graphics, context) => {
	const { width, height, scale } = context;
	const { alpha } = STATE;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill, alpha)
		.drawRect(0, 0, width, height)
		.moveTo(0, height / 2)
		.lineTo(width, height / 2)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};