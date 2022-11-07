import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const LWindow = (graphics, context) => {
	const {
		leftWidth, rightWidth,
		leftWallThickness, rightWallThickness, scale
	} = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill)
		.moveTo(0, 0)
		.lineTo(rightWidth, 0)
		.lineTo(rightWidth, rightWallThickness)
		.lineTo(leftWallThickness, rightWallThickness)
		.lineTo(leftWallThickness, leftWidth)
		.lineTo(0, leftWidth)
		.lineTo(0, 0)
		.endFill()
		.moveTo(leftWallThickness / 2, leftWidth)
		.lineTo(leftWallThickness / 2, rightWallThickness / 2)
		.lineTo(rightWidth, rightWallThickness / 2);

	graphics.pivot.x = rightWidth / 2;
	graphics.pivot.y = rightWallThickness / 2;

	return graphics;
};