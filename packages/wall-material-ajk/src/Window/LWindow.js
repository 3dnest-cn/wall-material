import { LINE_WIDTH } from '../constant.js';
import { getColors, getOutline } from '../utils.js';

export const LWindow = (graphics, context) => {
	// const {
	// 	leftWidth, rightWidth,
	// 	leftWallThickness, rightWallThickness, scale
	// } = context;

	// const lineWidth = LINE_WIDTH / scale;
	// const color = getColors(context);

	// graphics
	// 	.lineStyle(lineWidth, color.line)
	// 	.beginFill(color.fill)
	// 	.moveTo(-leftWallThickness / 2, -rightWallThickness / 2)
	// 	.lineTo(rightWidth - leftWallThickness / 2, -rightWallThickness / 2)
	// 	.lineTo(rightWidth - leftWallThickness / 2, rightWallThickness / 2)
	// 	.lineTo(leftWallThickness / 2, rightWallThickness / 2)
	// 	.lineTo(leftWallThickness / 2, leftWidth - rightWallThickness / 2)
	// 	.lineTo(-leftWallThickness / 2, leftWidth - rightWallThickness / 2)
	// 	.lineTo(-leftWallThickness / 2, -rightWallThickness / 2)
	// 	.endFill()
	// 	.moveTo(0, leftWidth - rightWallThickness / 2)
	// 	.lineTo(0, 0)
	// 	.lineTo(rightWidth - leftWallThickness /2, 0);

	// graphics.pivot.x = 0;
	// graphics.pivot.y = 0;

	return graphics;
};

export const LPathWindow = (graphics, context) => {
	const { scale, main, cross } = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);
	const outline = getOutline(main, cross);

	const smallCross = cross.map(c => c / 3);
	const smallOutline = getOutline(main, smallCross);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill)
		.drawPolygon(outline.flat())
		.drawPolygon(smallOutline.flat())
		.endFill();

	graphics.pivot.x = 0;
	graphics.pivot.y = 0;

	return graphics;
};