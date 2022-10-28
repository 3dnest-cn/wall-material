import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const FloorWindow = {
	width: 1500,
	render: (graphics, context) => {
		const { width, height, scale } = context;

		const lineWidth = LINE_WIDTH / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.beginFill(color.fill)
			.drawRect(0, 0, width, height)
			.endFill()
			.moveTo(0, height / 2)
			.lineTo(width, height / 2)
			.moveTo(0, height / 3)
			.lineTo(width, height / 3)
			.moveTo(0, 2 * height / 3)
			.lineTo(width, 2 * height / 3)
			.moveTo(width / 2, height / 3)
			.lineTo(width / 2, 2 * height / 3);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};