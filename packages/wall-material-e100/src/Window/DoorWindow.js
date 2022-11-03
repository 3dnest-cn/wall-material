import { PI, DOOR_THICKNESS, LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

const DOOR_WINDOW = 7 /17; //window / doorwindow
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
			.arc(width * flipSign, height / 2, width * DOOR_WINDOW, - PI / 2 * flipSign - PI / 2, -PI * flipSign / 2)
			.lineTo(width * flipSign, height / 2)
			.lineTo(width * (1 - DOOR_WINDOW) * flipSign, width * DOOR_WINDOW * flipSign - width * DOOR_WINDOW + height / 2)
			.drawRect((width - doorThickness) * flipSign, height / 2 - width * DOOR_WINDOW, doorThickness, width * DOOR_WINDOW)
			.drawRect(width * DOOR_WINDOW - width * DOOR_WINDOW * flipSign, 0, width * (1 - DOOR_WINDOW), height)
			.lineStyle(lineWidth * 2, color.line)
			.moveTo(width * DOOR_WINDOW - width * DOOR_WINDOW * flipSign, height / 2)
			.lineTo(width * DOOR_WINDOW - width * DOOR_WINDOW * flipSign + width * (1 - DOOR_WINDOW), height / 2)
			.lineStyle(lineWidth *1.5,color.line)
			.moveTo(width * DOOR_WINDOW - width * DOOR_WINDOW * flipSign + width *(1 - DOOR_WINDOW) / 2, 0)
			.lineTo(width * DOOR_WINDOW - width * DOOR_WINDOW * flipSign + width *(1 - DOOR_WINDOW) / 2, height);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};