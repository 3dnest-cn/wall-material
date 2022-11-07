import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const UWindow = (graphics, context) => {
	const {
		leftWidth, centerWidtn,
		leftWallThickness, centerWallThickness, rightWallThickness,
		scale
	} = context;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill, 0)
		.moveTo(0, 0)
		.lineTo(0, -leftWidth)
		.lineTo(centerWidtn, -leftWidth)
		.lineTo(centerWidtn, 0)
		.lineTo(centerWidtn - rightWallThickness, 0)
		.lineTo(centerWidtn - rightWallThickness, -(leftWidth - centerWallThickness))
		.lineTo(leftWallThickness, -(leftWidth - centerWallThickness))
		.lineTo(leftWallThickness, 0)
		.lineTo(0, 0)
		.endFill()
		.moveTo(leftWallThickness / 2, 0)
		.lineTo(leftWallThickness / 2, -(leftWidth - centerWallThickness / 2))
		.lineTo(centerWidtn - rightWallThickness / 2, -(leftWidth - centerWallThickness / 2))
		.lineTo(centerWidtn - rightWallThickness / 2, 0);

	graphics.pivot.x = centerWidtn / 2;
	graphics.pivot.y = centerWallThickness / 2;

	return graphics;
};