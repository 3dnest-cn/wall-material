import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const UWindow = {
	render: (graphics, context) => {
		const {
			leftWidth, centerWidtn, rightWidth,
			leftWallThickness, centerWallThickness, rightWallThickness,
			scale
		} = context;

		const lineWidth = LINE_WIDTH / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.beginFill(color.fill)
			.moveTo(0, 0)
			.lineTo(centerWidtn, 0)
			.lineTo(centerWidtn, rightWidth)
			.lineTo(centerWidtn - rightWallThickness, rightWidth)
			.lineTo(centerWidtn - rightWallThickness, centerWallThickness)
			.lineTo(leftWallThickness, centerWallThickness)
			.lineTo(leftWallThickness, leftWidth)
			.lineTo(0, leftWidth)
			.lineTo(0, 0)
			.endFill()
			.moveTo(leftWallThickness / 2, leftWidth)
			.lineTo(leftWallThickness / 2, centerWallThickness / 2)
			.lineTo(centerWidtn - rightWallThickness / 2, centerWallThickness /2)
			.lineTo(centerWidtn - rightWallThickness / 2, rightWidth);

		graphics.pivot.x = centerWidtn / 2;
		graphics.pivot.y = centerWallThickness / 2;

		return graphics;
	}
};