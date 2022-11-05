import { SEAM, LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const SlidingDoor = {
	width: 800,
	render: (graphics, context) => {
		const { width, height, scale, fliped, /* state = 'stateless' */ } = context;

		const flipSign = fliped ? -1 : 1;

		const lineWidth = LINE_WIDTH / scale;
		const seam = SEAM / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.line)
			.beginFill(color.fill)
			.drawRect(0, 0, width, height)
			.drawRect(0 + lineWidth + seam, height / 2, 2 * width / 3, height / 4 * flipSign)
			.drawRect(width - lineWidth - seam, height / 2, -2 * width / 3, - height / 4 * flipSign);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};