import { LINE_WIDTH, STATE } from '../constant.js';
import { getColors , getOutline } from '../utils.js';

export const ArcWindow = (graphics, context) => {
	const { scale, main, cross } = context;
	const { alpha } = STATE;

	const lineWidth = LINE_WIDTH / scale;
	const color = getColors(context);
	const outline = getOutline(main, cross);

	graphics
		.lineStyle(lineWidth, color.line)
		.beginFill(color.fill, alpha)
		.drawPolygon(outline.flat())
		.endFill();

	graphics.moveTo(...main[0]);

	for (let i = 1; i < main.length; i++) {
		graphics.lineTo(...main[i]);
	}

	graphics.pivot.x = 0;
	graphics.pivot.y = 0;

	return graphics;
};