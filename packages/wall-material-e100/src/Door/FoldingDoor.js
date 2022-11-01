import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const FoldingDoor = {
	width: 800,
	render: (graphics, context) => {
		const { width, height, scale } = context;
		const lineWidth = LINE_WIDTH / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.drawRect(0, 0, width/17, height)
			.drawRect(width, height, -width/17, -height)
			.moveTo(width /17, height)
			.lineTo(width * 9/68, 0)
			.lineTo(width * 14/68, height)
			.lineTo(width * 19/68, 0)
			.lineTo(width * 24/68, height)
			.lineTo(width * 29/68, 0)
			.lineTo(width * 34/68, height)
			.lineTo(width * 39/68, 0)
			.lineTo(width * 44/68, height)
			.lineTo(width * 49/68, 0)
			.lineTo(width * 54/68, height)
			.lineTo(width * 59/68, 0)
			.lineTo(width * 64/68, height);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};