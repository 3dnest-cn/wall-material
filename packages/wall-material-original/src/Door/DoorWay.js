import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';


export const DoorWay = (graphics, context) => {
	const { width, height, scale } = context;
	const lineWidth = LINE_WIDTH / scale;
	const segment = 100 / scale;
	const blank = 100 / scale;
	const color = getColors(context);
	const number = Math.round(width / (segment + blank)) > 1
		? Math.round(width / (segment + blank))
		: 1;

	graphics
		.beginFill(color.fill, ALPHA)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth, color.line)
		.moveTo(0, 0)
		.lineTo(0, height)
		.moveTo(width, 0)
		.lineTo(width, height);

	for (let i = 0; i < number; i++) {
		const moveNext = (segment + blank) * i;
		const lineNext = segment * (i + 1) + blank * i < width
			? segment * (i + 1) + blank * i
			: width;

		graphics
			.moveTo(moveNext, 0)
			.lineTo(lineNext, 0)
			.moveTo(width - moveNext, height)
			.lineTo(width - lineNext, height);
	}

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};