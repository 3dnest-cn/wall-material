import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

const RECT_WIDTH = 10;

export const FoldingDoor = (graphics, context) => {
	const { width, height, scale } = context;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);
	const point = Math.round(width / 30) > 1 ? Math.round(width / 30) : 1;

	graphics
		.beginFill(color.fill, ALPHA)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth, color.line)
		.drawRect(0, 0, RECT_WIDTH, height)
		.drawRect(width - RECT_WIDTH, 0, RECT_WIDTH, height)
		.moveTo(RECT_WIDTH, height);
	for (let i = 1; i <= point; i++) {
		graphics
			.lineTo(RECT_WIDTH + ((width - RECT_WIDTH * 2) / point / 2) * (i * 2 - 1), 0)
			.lineTo(RECT_WIDTH + ((width - RECT_WIDTH * 2) / point / 2) * (i * 2), height);
	}

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};