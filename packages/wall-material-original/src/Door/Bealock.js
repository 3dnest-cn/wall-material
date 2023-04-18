import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';


export const Bealock = (graphics, context) => {
	const { width, height, scale} = context;
	const lineWidth = LINE_WIDTH / scale;
	const rectWidth = 100 / scale;
	const color = getColors(context);
	const rectColor = 0xd9d9d9;

	graphics
		.beginFill(color.fill, ALPHA)
		.drawRect(0, 0, width, height)
		.endFill(0, 0, )
		.beginFill(rectColor)
		.drawRect(0, 0, rectWidth, height)
		.drawRect(width - rectWidth, 0, rectWidth, height)
		.endFill()
		.lineStyle(lineWidth * 3, color.line)
		.moveTo(rectWidth / 2, height / 6)
		.lineTo(rectWidth / 2, 5 * height / 6)
		.moveTo(width - rectWidth / 2, height / 6)
		.lineTo(width - rectWidth / 2, 5 * height / 6);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};