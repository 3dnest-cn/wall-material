import { PI, LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

export const SingleDoor = (graphics, context) => {
	const { width, height, fliped, scale } = context;

	const flipSign = fliped ? 1 : 0;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.arcLine)
		.beginFill(color.fill, ALPHA)
		.arc(width * flipSign, height / 2, width, - PI / 2 * flipSign - PI / 2, -PI * flipSign / 2)
		.lineStyle(lineWidth, color.line)
		.lineTo(width * flipSign, height / 2)
		.lineTo(0, height / 2 - width + flipSign * width)
		.endFill()
		.beginFill(color.fill)
		// .lineStyle(lineWidth, color.fill)
		.drawRect(0, 0, width, height)
		.lineStyle(lineWidth, color.line)
		.moveTo(0, 0)
		.lineTo(0, height)
		.lineTo(width, height)
		.lineTo(width, 0)
		.lineTo(0, 0)
		.moveTo(0, height / 2)
		.lineTo(width, height / 2);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};