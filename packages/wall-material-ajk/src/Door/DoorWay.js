import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';


export const DoorWay = (graphics, context) => {
	const { width, height, scale } = context;
	const color = getColors(context);
	const lineWidth = LINE_WIDTH / scale;

	graphics
		.beginFill(color.fill, .01)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth, color.arcLine)
		.moveTo(0, 0)
		.lineTo(0, height)
		.moveTo(width, 0)
		.lineTo(width, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};