import { LINE_WIDTH, STATE } from '../constant.js';
import { getColors } from '../utils.js';

export const SlidingDoor = (graphics, context) => {
	const { width, height, scale, fliped, /* state = 'stateless' */ } = context;
	const { alpha } = STATE;

	const flipSign = fliped ? 0 : 1;
	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, 0.01)
		.drawRect(0, 0, width, height)
		.endFill()
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill, alpha)
		.drawRect(0, height / 2 - height / 3 * flipSign, 3 * width / 5, height / 3)
		.drawRect(width - 3 * width / 5, height / 6 +  height / 3 * flipSign, 3 * width / 5,  height / 3)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};