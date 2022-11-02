import { PI, DOOR_THICKNESS, LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const DoorWindow = {
	width: 800,
	render: (graphics, context) => {
		const { width, height, fliped, scale } = context;
		const flipSign = fliped ? 1 : 0;
		const lineWidth = LINE_WIDTH / scale;
		const doorThickness = DOOR_THICKNESS / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.arc(width * flipSign, height / 2, width * 7/17, - PI / 2 * flipSign - PI / 2, -PI * flipSign / 2)
			.lineTo(width * flipSign, height / 2)
			.lineTo(width * 10/17 * flipSign, width *7/17 * flipSign - width *7/17 + height/2)
			.drawRect((width - doorThickness) * flipSign, height / 2, doorThickness, -width * 7/17)
			.drawRect(width *7/17 - width *7/17 * flipSign, 0, width *10/17, height)
			.lineStyle(lineWidth *2,color.line)
			.moveTo(width *7/17 - width *7/17 * flipSign, height/2)
			.lineTo(width *7/17 - width *7/17 * flipSign + width * 10/17, height/2)
			.lineStyle(lineWidth *1.5,color.line)
			.moveTo(width *7/17 - width *7/17 * flipSign + width *5/17, 0)
			.lineTo(width *7/17 - width *7/17 * flipSign + width *5/17, height);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};