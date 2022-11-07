import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

// width: 800,
export const BasicWindow = (graphics, context) => {
	const { width, height, scale, /* state = 'stateless' */ } = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill)
		.drawRect(0, 0, width, height)
		.moveTo(0, height / 2)
		.lineTo(width, height / 2)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};