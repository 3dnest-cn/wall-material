import { STATE } from '../constant.js';
import { getColors } from '../utils.js';

export const Bealock = (graphics, context) => {
	const { width, height, scale} = context;
	const { emptyAlpha } = STATE;

	const rectWidth = 100 / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, emptyAlpha)
		.drawRect(0, 0, width, height)
		.endFill(0, 0, )
		.beginFill(color.line)
		.drawRect(0, 0, rectWidth, height)
		.beginHole()
		.drawRect(rectWidth / 4, height / 6, rectWidth / 2, height * 2 / 3)
		.endHole()
		.drawRect(width - rectWidth, 0, rectWidth, height)
		.beginHole()
		.drawRect(width - rectWidth * 3 / 4, height / 6, rectWidth / 2, height * 2 / 3)
		.endHole()
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};