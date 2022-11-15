import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

// width: 1500,
export const BoilerWindow = (graphics, context) => {
	const { width, scale, height, sillThickness = 500 / scale, windowThickness = 240 / scale} = context;

	const lineWidth = LINE_WIDTH / scale;
	// const windowThickness = height;
	// const sillThickness = height * 2;
	// const windowThickness = height ;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.windowFill)
		.drawRect(0, -sillThickness, width, sillThickness + height)
		.endFill()
		.beginFill(color.fill)
		.moveTo(0,0)
		.lineTo(-windowThickness, 0)
		.lineTo(-windowThickness, -(sillThickness + windowThickness))
		.lineTo(width + windowThickness, -(sillThickness + windowThickness))
		.lineTo(width + windowThickness, 0)
		.lineTo(width, 0)
		.lineTo(width, -sillThickness)
		.lineTo(0, -sillThickness)
		.lineTo(0, 0)
		.endFill()
		.moveTo(- windowThickness / 2, 0)
		.lineTo(- windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width + windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width + windowThickness / 2, 0);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = -height / 2;

	return graphics;
};