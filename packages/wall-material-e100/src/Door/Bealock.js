import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';


export const Bealock = (graphics, context) => {
	const { width, height, scale} = context;
	const lineWidth = LINE_WIDTH / scale;
	const rectWidth = 50 / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth, color.line)
		.drawRect(0, 0, rectWidth, height)
		.drawRect(width - rectWidth, 0, rectWidth, height)
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(rectWidth, 0)
		.lineTo(rectWidth, height)
		.moveTo(width - rectWidth, 0)
		.lineTo(width - rectWidth, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};