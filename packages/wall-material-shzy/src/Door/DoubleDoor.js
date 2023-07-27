import { PI, LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

export const DoubleDoor = (graphics, context) => {
	const { width, height, scale } = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.arcLine)
		.beginFill(color.fill, ALPHA)
		.arc(0, height / 2, width / 2, -PI / 2, 0)
		.lineStyle(lineWidth, color.line)
		.lineTo(0, height / 2)
		.lineTo(0, (height - width) / 2)
		.endFill()
		.beginFill(color.fill, ALPHA)
		.lineStyle(lineWidth, color.arcLine)
		.arc(width, height / 2, width / 2, PI, -PI / 2)
		.lineStyle(lineWidth, color.line)
		.lineTo(width, height / 2)
		.lineTo(width / 2, height / 2)
		.endFill()
		.beginFill(color.fill)
		.lineStyle(lineWidth, color.fill)
		.drawRect(0, 0, width, height)
		.lineStyle(lineWidth, color.line)
		.moveTo(0, 0)
		.lineTo(0, height)
		.lineTo(width, height)
		.lineTo(width, 0)
		.lineTo(0, 0)
		.moveTo(0, height / 2)
		.lineTo(width, height / 2)
		.moveTo(width / 2, 0)
		.lineTo(width / 2, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};