import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const BoilerWindow = (graphics, context) => {
	const { width, height, scale } = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill)
		.drawRect(0, 0, width, height)
		.endFill()
		.moveTo(0, height / 4)
		.lineTo(width, height / 4)
		.moveTo(0, 3 * height / 4)
		.lineTo(width, 3 * height / 4)
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(width / 2, height / 4)
		.lineTo(width / 2, 3 * height / 4);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};