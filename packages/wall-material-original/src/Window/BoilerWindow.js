import { LINE_WIDTH, STATE } from '../constant.js';
import { getColors } from '../utils.js';

export const BoilerWindow = (graphics, context) => {
	const { width, height, scale, sillThickness = 260 / scale, windowThickness = 240 / scale} = context;
	const { alpha } = STATE;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, 0.01)
		.drawRect(0, -(sillThickness + windowThickness), width, (sillThickness + windowThickness + height))
		.endFill()
		.beginFill(color.fill, alpha)
		.lineStyle(lineWidth, color.line)
		.moveTo(0, 0)
		.lineTo(0, height)
		.lineTo(windowThickness, height)
		.lineTo(windowThickness, -sillThickness)
		.lineTo(width - windowThickness, -sillThickness)
		.lineTo(width - windowThickness, height)
		.lineTo(width, height)
		.lineTo(width, -(sillThickness + windowThickness))
		.lineTo(0, -(sillThickness + windowThickness))
		.lineTo(0, 0)
		.endFill()
		.moveTo(windowThickness / 2, height)
		.lineTo(windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width - windowThickness / 2, -(sillThickness + windowThickness / 2))
		.lineTo(width - windowThickness / 2, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};