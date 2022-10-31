import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const Bealock = {
	width: 2000,
	render: (graphics, context) => {
		const { width, height, scale} = context;
		const lineWidth = LINE_WIDTH / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.drawRect(0, 0, width / 28, height)
			.drawRect(width, height, -width /28, -height)
			.lineStyle(width/ 42, color.line)
			.moveTo(width / 28, 0)
			.lineTo(width / 28, height)
			.moveTo(27 * width / 28, 0)
			.lineTo(27 * width / 28, height);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};