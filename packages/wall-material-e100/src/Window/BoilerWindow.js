import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

export const BoilerWindow = (graphics, context) => {
	const { width, height, scale, sillThickness = 500 / scale, windowThickness = 240 / scale} = context;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.lineStyle(lineWidth, color.line)
		.drawRect(0, -(sillThickness + windowThickness), width, sillThickness + windowThickness + height)
		// .drawRect(windowThickness / 2, -(sillThickness + windowThickness / 2), width + windowThickness , sillThickness + windowThickness / 2)
		.drawRect(windowThickness, -sillThickness, width - windowThickness * 2, sillThickness + height)
		.endFill()
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(width / 2, -(sillThickness + windowThickness))
		.lineTo(width / 2, -(sillThickness))
		.lineStyle(lineWidth * 3, color.line)
		.moveTo(windowThickness / 2, height)
		.lineTo(windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width - windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width - windowThickness / 2, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};