import { PI, DOOR_THICKNESS, LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

// width: 800,
export const SingleDoor = (graphics, context) => {
	const { width, height, fliped, scale } = context;

	const flipSign = fliped ? 1 : 0;

	const lineWidth = LINE_WIDTH / scale;
	const doorThickness = DOOR_THICKNESS / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.arcLine)
		.beginFill(color.fill, .1)
		.arc(width * flipSign, height / 2, width, - PI / 2 * flipSign - PI / 2, -PI * flipSign / 2)
		.lineTo(width * flipSign, height / 2)
		.lineTo(0, height / 2 - width + flipSign * width)
		.endFill()
		.beginFill(color.fill)
		.lineStyle(lineWidth, color.fill)
		.drawRect(0, 0, width, height)
		.lineStyle(lineWidth, color.line)
		.moveTo(0, 0)
		.lineTo(0, height)
		.moveTo(width, 0)
		.lineTo(width, height)
		.lineStyle(lineWidth, color.line)
		.drawRect((width - doorThickness) * flipSign, height / 2 - width, doorThickness, width);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};