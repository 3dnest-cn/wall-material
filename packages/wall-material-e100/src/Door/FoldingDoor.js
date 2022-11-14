import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

export const FoldingDoor = (graphics, context) => {
	const { width, height, scale } = context;
	const rectWidth = 100 / scale;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);
	const point = Math.round(width / 30) > 1 ? Math.round(width / 30) : 1;

	graphics
		.beginFill(color.fill, ALPHA)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth, color.line)
		.drawRect(0, 0, rectWidth, height)
		.drawRect(width - rectWidth, 0, rectWidth, height)
		.moveTo(rectWidth, height);
	for (let i = 1; i <= point; i++) {
		graphics
			.lineTo(rectWidth + ((width - rectWidth * 2) / point / 2) * (i * 2 - 1), 0)
			.lineTo(rectWidth + ((width - rectWidth * 2) / point / 2) * (i * 2), height);
	}

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};