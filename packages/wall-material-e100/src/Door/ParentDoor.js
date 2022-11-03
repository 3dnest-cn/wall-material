import { PI, DOOR_THICKNESS, LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const ParentDoor = {
	width: 800,
	render: (graphics, context) => {
		const { width, height, fliped, scale } = context;
		const flipSign = fliped ? 1 : 4/3;
		const lineWidth = LINE_WIDTH / scale;
		const doorThickness = DOOR_THICKNESS / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.arc(0, height / 2, width * 3/7 * flipSign, -PI / 2, 0)
			.lineTo(0, height / 2)
			.lineTo(0, height / 2 - width * 3/7 * flipSign)
			.moveTo(width * 3/7* flipSign, height / 2)
			.arc(width, height / 2, width - width * 3/7 * flipSign, PI, -PI / 2)
			.lineTo(width, height / 2)
			.lineTo(width * 3/7 * flipSign , height /2)
			.drawRect(0, height/2 - width *3/7 * flipSign, doorThickness, width * 3/7* flipSign)
			.drawRect(width -doorThickness, height/2 - (width - width * 3/7* flipSign), doorThickness, width - width * 3/7* flipSign);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};