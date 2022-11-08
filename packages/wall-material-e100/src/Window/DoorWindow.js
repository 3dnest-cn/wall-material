import { PI, DOOR_THICKNESS, LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

const DOORWINDOW_SCALE = 7 / 17; //window / doorwindow

export const DoorWindow = (graphics, context) => {
	const { width, height, fliped, scale } = context;
	const flipSign = fliped ? 1 : 0;
	const lineWidth = LINE_WIDTH / scale;
	const doorThickness = DOOR_THICKNESS / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.lineStyle(lineWidth, color.line)
		.arc(width * flipSign, height / 2, width * DOORWINDOW_SCALE, -PI / 2 * flipSign - PI / 2, -PI * flipSign / 2)
		.lineTo(width * flipSign, height / 2)
		.lineTo(width * (1 - DOORWINDOW_SCALE) * flipSign, width * DOORWINDOW_SCALE * flipSign - width * DOORWINDOW_SCALE + height / 2)
		.drawRect((width - doorThickness) * flipSign, height / 2 - width * DOORWINDOW_SCALE, doorThickness, width * DOORWINDOW_SCALE)
		.drawRect(width * DOORWINDOW_SCALE - width * DOORWINDOW_SCALE * flipSign, 0, width * (1 - DOORWINDOW_SCALE), height)
		.endFill()
		.lineStyle(lineWidth * 2, color.line)
		.moveTo(width * DOORWINDOW_SCALE - width * DOORWINDOW_SCALE * flipSign, height / 2)
		.lineTo(width * DOORWINDOW_SCALE - width * DOORWINDOW_SCALE * flipSign + width * (1 - DOORWINDOW_SCALE), height / 2)
		.lineStyle(lineWidth * 1.5, color.line)
		.moveTo(width * DOORWINDOW_SCALE - width * DOORWINDOW_SCALE * flipSign + width * (1 - DOORWINDOW_SCALE) / 2, 0)
		.lineTo(width * DOORWINDOW_SCALE - width * DOORWINDOW_SCALE * flipSign + width * (1 - DOORWINDOW_SCALE) / 2, height);

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};