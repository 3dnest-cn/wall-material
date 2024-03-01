import { getColors } from '../utils.js';
import { STATE } from '../constant.js';

export const DoubleDoor = (graphics, context) => {
	const { width, height, fliped} = context;
	const flipSign = fliped ? 1 : 0;
	const centerWidth = width / 31;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, .01)
		.drawRect(0, 0, width, height)
		.endFill();

	if (STATE.mode === 'face') {
		graphics
			.beginFill(color.middleLine)
			.drawRect(0 , height / 2 * flipSign, width / 2 + centerWidth, height / 2)
			.drawRect(width / 2 - centerWidth, height / 2 - height / 2 * flipSign, width / 2 + centerWidth, height / 2);
	}

	if (STATE.mode === 'line') {
		graphics
			.lineStyle(2, color.middleLine)
			.moveTo(0, height / 2 * flipSign)
			.lineTo(width / 2, height / 2 * flipSign)
			.moveTo(0, height / 2 + height / 2 * flipSign)
			.lineTo(width / 2, height / 2 + height / 2 * flipSign)
			.moveTo(width / 2, 0)
			.lineTo(width / 2, height)
			.moveTo(width / 2, height / 2 - height / 2 * flipSign)
			.lineTo(width, height / 2 - height / 2 * flipSign)
			.moveTo(width / 2, height - height / 2 * flipSign)
			.lineTo(width, height - height / 2 * flipSign);
	}

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};