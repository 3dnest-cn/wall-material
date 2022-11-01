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
			.beginFill(color.fill, 0)
			.moveTo(0, 0)
			.lineTo(centerWidtn, 0)
			.lineStyle(lineWidth *1.5, color.line)
			.lineTo(centerWidtn, rightWidth)
			.lineStyle(lineWidth, color.line)
			.lineTo(centerWidtn - rightWallThickness, rightWidth)
			.lineStyle(lineWidth *1.5, color.line)
			.lineTo(centerWidtn - rightWallThickness, centerWallThickness)
			.lineStyle(lineWidth, color.line)
			.lineTo(leftWallThickness, centerWallThickness)
			.lineStyle(lineWidth *1.5, color.line)
			.lineTo(leftWallThickness, leftWidth)
			.lineStyle(lineWidth, color.line)
			.lineTo(0, leftWidth)
			.lineStyle(lineWidth *1.5, color.line)
			.lineTo(0, 0)
			.endFill()
			.moveTo(leftWallThickness / 2, leftWidth)
			.lineTo(leftWallThickness / 2, centerWallThickness / 2)
			.lineStyle(lineWidth, color.line)
			.lineTo(centerWidtn - rightWallThickness / 2, centerWallThickness /2)
			.lineStyle(lineWidth *1.5, color.line)
			.lineTo(centerWidtn - rightWallThickness / 2, rightWidth);

		graphics.pivot.x = centerWidtn / 2;
		graphics.pivot.y = centerWallThickness / 2;

		return graphics;
	}
};