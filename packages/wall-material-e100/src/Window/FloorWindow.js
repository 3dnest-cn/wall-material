import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

export const FloorWindow = (graphics, context) => {
	const { width, height, scale } = context;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.lineStyle(lineWidth, color.line)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(0, height / 2)
		.lineTo(width, height / 2);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};