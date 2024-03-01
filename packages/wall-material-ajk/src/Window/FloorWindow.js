import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const FloorWindow = (graphics, context) => {
	const { width, height, scale, /* state = 'stateless' */ } = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill)
		.moveTo(0, 0)
		.lineTo(width, 0)
		.moveTo(0, height)
		.lineTo(width, height)
		.lineStyle(lineWidth * 2, color.middleLine)
		.moveTo(0, height / 2)
		.lineTo(width, height / 2)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};