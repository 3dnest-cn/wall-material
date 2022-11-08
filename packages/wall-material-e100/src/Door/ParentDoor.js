import { PI, DOOR_THICKNESS, LINE_WIDTH, ALPHA } from '../constant.js';
import { getColors } from '../utils.js';

const PARENTDOOR_SCALE = 3 / 7;

export const ParentDoor = (graphics, context) => {
	const { width, height, fliped, scale } = context;
	const flipSign = fliped ? 1 : 4 / 3;
	const lineWidth = LINE_WIDTH / scale;
	const doorThickness = DOOR_THICKNESS / scale;
	const color = getColors(context);

	graphics
		.beginFill(color.fill, ALPHA)
		.lineStyle(lineWidth, color.line)
		.arc(0, height / 2, width * PARENTDOOR_SCALE * flipSign, -PI / 2, 0)
		.lineTo(0, height / 2)
		.lineTo(0, height / 2 - width * PARENTDOOR_SCALE * flipSign)
		.moveTo(width * PARENTDOOR_SCALE * flipSign, height / 2)
		.arc(width, height / 2, width - width * PARENTDOOR_SCALE * flipSign, PI, -PI / 2)
		.lineTo(width, height / 2)
		.lineTo(width * PARENTDOOR_SCALE * flipSign , height / 2)
		.endFill()
		.drawRect(0, height / 2 - width * PARENTDOOR_SCALE * flipSign, doorThickness, width * PARENTDOOR_SCALE * flipSign)
		.drawRect(width - doorThickness, height / 2 - (width - width * PARENTDOOR_SCALE * flipSign), doorThickness, width - width * PARENTDOOR_SCALE * flipSign);


	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};