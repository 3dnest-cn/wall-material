import { LINE_WIDTH } from '../constant.js';
import { getColors, getOutline } from '../utils.js';

export const UBoilerWindow = (graphics, context) => {
	// const {
	// 	leftWidth, centerWidtn, rightWidth,
	// 	leftWindowThinkness, centerWindowThinkness, rightWindowThinkness,
	// 	leftWallThickness, centerWallThickness, rightWallThickness,
	// 	scale
	// } = context;

	// const lineWidth = LINE_WIDTH / scale;
	// const color = getColors(context);

	// graphics
	// 	.lineStyle(lineWidth, color.line)
	// 	.beginFill(color.windowFill)
	// 	.moveTo(leftWallThickness, centerWallThickness)
	// 	.lineTo(centerWidtn - rightWallThickness, centerWallThickness)
	// 	.lineTo(centerWidtn - rightWallThickness, rightWidth)
	// 	.lineTo(centerWidtn - rightWallThickness + rightWindowThinkness, rightWidth)
	// 	.lineTo(centerWidtn - rightWallThickness + rightWindowThinkness, centerWallThickness - centerWindowThinkness)
	// 	.lineTo(leftWallThickness - leftWindowThinkness, centerWallThickness - centerWindowThinkness)
	// 	.lineTo(leftWallThickness - leftWindowThinkness, leftWidth)
	// 	.lineTo(leftWallThickness, leftWidth)
	// 	.lineTo(leftWallThickness, centerWallThickness)
	// 	.endFill()
	// 	.beginFill(color.fill)
	// 	.moveTo(leftWallThickness - leftWindowThinkness, centerWallThickness - centerWindowThinkness)
	// 	.lineTo(centerWidtn + rightWindowThinkness - rightWallThickness, centerWallThickness - centerWindowThinkness)
	// 	.lineTo(centerWidtn + rightWindowThinkness - rightWallThickness, rightWidth)
	// 	.lineTo(centerWidtn, rightWidth)
	// 	.lineTo(centerWidtn, rightWidth + rightWallThickness)
	// 	.lineTo(centerWidtn + rightWindowThinkness, rightWidth + rightWallThickness)
	// 	.lineTo(centerWidtn + rightWindowThinkness, -centerWindowThinkness)
	// 	.lineTo(-leftWindowThinkness, -centerWindowThinkness)
	// 	.lineTo(-leftWindowThinkness, leftWidth + leftWallThickness)
	// 	.lineTo(0, leftWidth + leftWallThickness)
	// 	.lineTo(0, leftWidth)
	// 	.lineTo(leftWallThickness - leftWindowThinkness, leftWidth)
	// 	.lineTo(leftWallThickness - leftWindowThinkness, centerWallThickness - centerWindowThinkness)
	// 	.endFill()
	// 	.moveTo(0, leftWidth + leftWallThickness / 2)
	// 	.lineTo(leftWallThickness / 2 - leftWindowThinkness, leftWidth + leftWallThickness / 2)
	// 	.lineTo(leftWallThickness / 2 - leftWindowThinkness, centerWallThickness / 2 - centerWindowThinkness)
	// 	.lineTo(centerWidtn + rightWindowThinkness - rightWallThickness / 2, centerWallThickness / 2 - centerWindowThinkness)
	// 	.lineTo(centerWidtn + rightWindowThinkness - rightWallThickness / 2, rightWidth + rightWallThickness / 2)
	// 	.lineTo(centerWidtn, rightWidth + rightWallThickness / 2);

	// graphics.pivot.x = centerWidtn / 2;
	// graphics.pivot.y = centerWallThickness / 2;

	return graphics;
};

export const UPathBoilerWindow = (graphics, context) => {
	const { scale, main, cross } = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);
	const outline = getOutline(main, cross);

	graphics.lineStyle(lineWidth, color.line);

	graphics.moveTo(...outline[0]);

	for (let i = 1; i < outline.length / 2; i++) {
		graphics.lineTo(...outline[i]);
	}

	graphics.moveTo(...outline[outline.length / 2]);

	for (let i = outline.length / 2; i < outline.length; i++) {
		graphics.lineTo(...outline[i]);
	}

	graphics.lineStyle(lineWidth * 2, color.middleLine);

	graphics.moveTo(...main[0]);

	for (let i = 1; i < main.length; i++) {
		graphics.lineTo(...main[i]);
	}

	graphics.pivot.x = 0;
	graphics.pivot.y = 0;

	return graphics;
};