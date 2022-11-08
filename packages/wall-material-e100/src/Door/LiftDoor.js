import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

const BOLDLINE_SCALE = 3 / 17;

export const LiftDoor = (graphics, context) => {
	const { width, height, scale } = context;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.lineStyle(lineWidth, color.line)
		.drawRect(0, 0, width, height)
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(width * BOLDLINE_SCALE, height / 2)
		.lineTo(width * (1 - BOLDLINE_SCALE), height / 2)
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(width * BOLDLINE_SCALE, 0)
		.lineTo(width * BOLDLINE_SCALE, height)
		.moveTo(width / 2, 0)
		.lineTo(width / 2, height)
		.moveTo(width * (1 - BOLDLINE_SCALE), 0)
		.lineTo(width * (1 - BOLDLINE_SCALE), height)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};