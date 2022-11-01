import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const BoilerWindow = {
	width: 1500,
	render: (graphics, context) => {
		const { width, scale, sillThickness = 500 / scale, height } = context;

		const lineWidth = LINE_WIDTH / scale;
		const windowThickness = height;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.drawRect(0, -(sillThickness + windowThickness), width + windowThickness * 2, sillThickness + windowThickness )
			// .drawRect(windowThickness / 2, -(sillThickness + windowThickness / 2), width + windowThickness , sillThickness + windowThickness / 2)
			.drawRect(windowThickness, -sillThickness, width, sillThickness)
			.lineStyle(lineWidth * 2, color.line)
			.moveTo(windowThickness + width/2, -(sillThickness + windowThickness))
			.lineTo(windowThickness + width/2, - sillThickness)
			.lineStyle(lineWidth * 3, color.line)
			.moveTo(windowThickness/2, 0)
			.lineTo(windowThickness/2, -(sillThickness + windowThickness/2))
			.lineTo(windowThickness *3/2 +width, -(sillThickness + windowThickness/2))
			.lineTo(windowThickness *3/2 +width, 0);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = -height / 2;

		return graphics;
	}
};