import { PI, DOOR_THICKNESS, LINE_WIDTH, STATE } from '../constant.js';
import { getColors } from '../utils.js';

export const DoubleDoor = (graphics, context) => {
	const { width, height, scale } = context;
	const { alpha } = STATE;

	const lineWidth = LINE_WIDTH / scale;
	const doorThickness = DOOR_THICKNESS / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, alpha)
		.lineStyle(lineWidth, color.arcLine)
		.arc(0, height / 2, width / 2, -PI / 2, 0)
		.lineStyle(lineWidth, color.line)
		.lineTo(0, height / 2)
		.lineTo(0, (height - width) / 2)
		.moveTo(width / 2, height / 2)
		.lineStyle(lineWidth, color.arcLine)
		.arc(width, height / 2, width / 2, PI, -PI / 2)
		.lineStyle(lineWidth, color.line)
		.lineTo(width, height / 2)
		.lineTo(width / 2, height / 2)
		.beginFill(color.fill, alpha)
		.drawRect(0, height / 2 - width / 2, doorThickness, width / 2)
		.drawRect(width - doorThickness, height / 2 - width / 2, doorThickness, width / 2)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;

};