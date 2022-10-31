import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const LiftDoor = {
	width: 800,
	render: (graphics, context) => {
		const { width, height, scale } = context;
		const lineWidth = LINE_WIDTH / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.drawRect(0, -height/2, width, height)
			.lineStyle(1000/width, color.line)
			.moveTo(width * 3/17, 0)
			.lineTo(width * 14/17, 0)
			.lineStyle(width/56, color.line)
			.moveTo(width * 3/17, -height/2)
			.lineTo(width * 3/17, height/2)
			.moveTo(width/2, -height/2)
			.lineTo(width/2, height/2)
			.moveTo(width *14/17 , -height/2)
			.lineTo(width *14/17, height/2);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};