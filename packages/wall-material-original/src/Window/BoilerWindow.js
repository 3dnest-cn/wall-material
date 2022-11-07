import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

// width: 1500,
export const BoilerWindow = (graphics, context) => {
	const { width, scale, sillThickness = 500 / scale, height } = context;

	const lineWidth = LINE_WIDTH / scale;
	const windowThickness = height;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.windowFill)
		.drawRect(0, -sillThickness, width, sillThickness)
		.endFill()
		.beginFill(color.fill)
		.moveTo(0, -height)
		.lineTo(0, -sillThickness)
		.lineTo(width, -sillThickness)
		.lineTo(width, -height)
		.lineTo(width + windowThickness, -height)
		.lineTo(width + windowThickness, -(sillThickness + windowThickness))
		.lineTo(- windowThickness, -(sillThickness + windowThickness))
		.lineTo(- windowThickness, -height)
		.lineTo(0, -height)
		.endFill()
		.moveTo(- windowThickness / 2, -height)
		.lineTo(- windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width + windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width + windowThickness / 2, -height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = -height / 2;

	return graphics;
};