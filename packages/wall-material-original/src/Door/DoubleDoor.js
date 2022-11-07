import { PI, DOOR_THICKNESS, LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

// width: 800,
export const DoubleDoor = (graphics, context) => {
	const { width, height, scale } = context;

	const lineWidth = LINE_WIDTH / scale;
	const doorThickness = DOOR_THICKNESS / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.arcLine)
		.beginFill(color.fill, .1)
		.arc(0, height / 2, width / 2, -PI / 2, 0)
		.lineTo(0, height / 2)
		.lineTo(0, (height - width) / 2)
		.endFill()
		.beginFill(color.fill, .1)
		.lineStyle(lineWidth, color.arcLine)
		.arc(width, height / 2, width / 2, PI, -PI / 2)
		.lineTo(width, height / 2)
		.lineTo(width / 2, height / 2)
		.endFill()
		.beginFill(color.fill)
		.lineStyle(lineWidth, color.fill)
		.drawRect(0, 0, width, height)
		.lineStyle(lineWidth, color.line)
		.moveTo(0, 0)
		.lineTo(0, height)
		.moveTo(width, 0)
		.lineTo(width, height)
		.drawRect(0, height / 2 - width / 2, doorThickness, width / 2)
		.drawRect(width - doorThickness, height / 2 - width / 2, doorThickness, width / 2);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};