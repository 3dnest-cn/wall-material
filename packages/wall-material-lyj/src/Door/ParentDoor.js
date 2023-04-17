import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

// width: 1450,
export const ParentDoor = (graphics, context) => {
	const { width, height, fliped, scale, /* state = 'stateless' */ } = context;

	const flipSign = fliped ? 1 : 0;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill)
		.drawRect(0, 0, width, height)
		.moveTo(0, height / 3)
		.lineTo(width, height / 3)
		.moveTo(0, 2 * height / 3)
		.lineTo(width, 2 * height / 3)
		.moveTo(width / 4 + flipSign * width / 2, height / 3)
		.lineTo(width / 4 + flipSign * width / 2, 2 * height / 3)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};