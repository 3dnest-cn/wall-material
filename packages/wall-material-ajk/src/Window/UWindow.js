import { LINE_WIDTH } from '../constant.js';
import { getColors, getOutline } from '../utils.js';

export const UWindow = (graphics, context) => {
	// const {
	// 	leftWidth, centerWidtn, rightWidth,
	// 	leftWallThickness, centerWallThickness, rightWallThickness,
	// 	scale
	// } = context;

	// const lineWidth = LINE_WIDTH / scale;
	// const color = getColors(context);

	// graphics
	// 	.lineStyle(lineWidth, color.line)
	// 	.beginFill(color.fill)
	// 	.moveTo(0, 0)
	// 	.lineTo(centerWidtn, 0)
	// 	.lineTo(centerWidtn, rightWidth)
	// 	.lineTo(centerWidtn - rightWallThickness, rightWidth)
	// 	.lineTo(centerWidtn - rightWallThickness, centerWallThickness)
	// 	.lineTo(leftWallThickness, centerWallThickness)
	// 	.lineTo(leftWallThickness, leftWidth)
	// 	.lineTo(0, leftWidth)
	// 	.lineTo(0, 0)
	// 	.endFill()
	// 	.moveTo(leftWallThickness / 2, leftWidth)
	// 	.lineTo(leftWallThickness / 2, centerWallThickness / 2)
	// 	.lineTo(centerWidtn - rightWallThickness / 2, centerWallThickness / 2)
	// 	.lineTo(centerWidtn - rightWallThickness / 2, rightWidth);

	// graphics.pivot.x = centerWidtn / 2;
	// graphics.pivot.y = centerWallThickness / 2;

	return graphics;
};

export const UPathWindow = (graphics, context) => {
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