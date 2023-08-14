import { LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

export const SlidingDoor = (graphics, context) => {
	const { width, height, scale, fliped, /* state = 'stateless' */ } = context;

	const flipSign = fliped ? 1 : 0;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill, ALPHA)
		.drawRect(0, 0, width, height)
		.drawRect(0, height / 2 - height / 4 * flipSign, 2 * width / 3, height / 4)
		.drawRect(width - 2 * width / 3, height / 4 +  height / 4 * flipSign, 2 * width / 3,  height / 4)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};