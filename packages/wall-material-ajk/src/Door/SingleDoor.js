import { PI, DOOR_THICKNESS, LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

export const SingleDoor = (graphics, context) => {
	const { width, height, fliped, scale } = context;

	const flipSign = fliped ? 1 : 0;
	const lineWidth = LINE_WIDTH / scale;
	const doorThickness = DOOR_THICKNESS / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.lineStyle(lineWidth, color.middleLine)
		.arc(width * flipSign, height / 2, width, -PI / 2 * flipSign - PI / 2, -PI * flipSign / 2)
		.lineStyle(lineWidth, color.middleLine)
		.lineTo(width * flipSign, height / 2)
		.lineTo(0, height / 2 - width + flipSign * width)
		.beginFill(color.fill, ALPHA)
		.drawRect((width - doorThickness) * flipSign, height / 2 - width, doorThickness, width)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};