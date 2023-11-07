import { LINE_WIDTH } from '../constant.js';
import { getColors, getOutline } from '../utils.js';

export const LBoilerWindow = (graphics, context) => {
	// const {
	// 	leftWidth, rightWidth,
	// 	leftWindowThickness, rightWindowThickness,
	// 	leftWallThickness, rightWallThickness,
	// 	scale
	// } = context;

	// const lineWidth = LINE_WIDTH / scale;
	// const color = getColors(context);

	// graphics
	// 	.lineStyle(lineWidth, color.line)
	// 	.beginFill(color.windowFill)
	// 	.moveTo(leftWallThickness, rightWallThickness)
	// 	.lineTo(rightWidth, rightWallThickness)
	// 	.lineTo(rightWidth, rightWallThickness - rightWindowThickness)
	// 	.lineTo(leftWallThickness - leftWindowThickness, rightWallThickness - rightWindowThickness)
	// 	.lineTo(leftWallThickness - leftWindowThickness, leftWidth)
	// 	.lineTo(leftWallThickness, leftWidth)
	// 	.lineTo(leftWallThickness, rightWallThickness)
	// 	.endFill()
	// 	.beginFill(color.fill)
	// 	.moveTo(leftWallThickness - leftWindowThickness, rightWallThickness - rightWindowThickness)
	// 	.lineTo(rightWidth, rightWallThickness - rightWindowThickness)
	// 	.lineTo(rightWidth, 0)
	// 	.lineTo(rightWidth + rightWallThickness, 0)
	// 	.lineTo(rightWidth + rightWallThickness, -rightWindowThickness)
	// 	.lineTo(-leftWindowThickness, -rightWindowThickness)
	// 	.lineTo(-leftWindowThickness, leftWidth + leftWallThickness)
	// 	.lineTo(0, leftWidth + leftWallThickness)
	// 	.lineTo(0, leftWidth)
	// 	.lineTo(leftWallThickness - leftWindowThickness, leftWidth)
	// 	.lineTo(leftWallThickness - leftWindowThickness, rightWallThickness - rightWindowThickness)
	// 	.endFill()
	// 	.moveTo(0, leftWidth + leftWallThickness / 2)
	// 	.lineTo(leftWallThickness / 2 - leftWindowThickness, leftWidth + leftWallThickness / 2)
	// 	.lineTo(leftWallThickness / 2 - leftWindowThickness, rightWallThickness / 2 - rightWindowThickness)
	// 	.lineTo(rightWidth + rightWallThickness / 2, rightWallThickness / 2 - rightWindowThickness)
	// 	.lineTo(rightWidth + rightWallThickness / 2, 0);

	// graphics.pivot.x = rightWidth / 2;
	// graphics.pivot.y = rightWallThickness / 2;

	return graphics;
};

export const LPathBoilerWindow = (graphics, context) => {
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