import { LINE_WIDTH } from '../constant.js';
import { getColors } from '../utils.js';

export const Bealock = {
	width: 2000,
	render: (graphics, context) => {
		const { width, height, scale, /* state = 'stateless' */ } = context;

		const lineWidth = LINE_WIDTH / scale;
		const color = getColors(context);

		graphics
			.lineStyle(lineWidth, color.fill)
			.beginFill(color.fill)
			.drawRect(0, 0, width, height)
			.endFill()
			.lineStyle(lineWidth, color.line)
			.drawRect(0, 0, width, height / 3)
			.drawRect(0, 2 * height / 3, width, height / 3);

		graphics.pivot.x = width / 2;
		graphics.pivot.y = height / 2;

		return graphics;
	}
};