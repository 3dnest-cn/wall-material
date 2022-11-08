import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

const RECT_WIDTH = 5;

export const Bealock = (graphics, context) => {
	const { width, height, scale} = context;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth, color.line)
		.drawRect(0, 0, RECT_WIDTH, height)
		.drawRect(width - RECT_WIDTH, 0, RECT_WIDTH, height)
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(RECT_WIDTH, 0)
		.lineTo(RECT_WIDTH, height)
		.moveTo(width - RECT_WIDTH, 0)
		.lineTo(width - RECT_WIDTH, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};