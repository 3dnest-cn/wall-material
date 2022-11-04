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
			.drawRect(0, -(sillThickness + windowThickness - height), width , sillThickness + windowThickness )
			// .drawRect(windowThickness / 2, -(sillThickness + windowThickness / 2), width + windowThickness , sillThickness + windowThickness / 2)
			.drawRect(windowThickness, -(sillThickness - height), width - windowThickness * 2, sillThickness)
			.lineStyle(lineWidth * 2, color.line)
			.moveTo(width / 2, -(sillThickness + windowThickness - height))
			.lineTo(width / 2, -(sillThickness - height))
			.lineStyle(lineWidth * 3, color.line)
			.moveTo(windowThickness / 2, height)
			.lineTo(windowThickness / 2, -(sillThickness + windowThickness / 2 - height))
			.lineTo(width - windowThickness / 2, -(sillThickness + windowThickness / 2 - height))
			.lineTo(width - windowThickness/  2, height);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};