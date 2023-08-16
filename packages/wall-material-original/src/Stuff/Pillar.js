import { LINE_WIDTH, STATE } from '../constant.js';

export const Pillar = (graphics, context) => {
	const { width, height, scale } = context;
	const { pillarColor } = STATE;

	const lineWidth = LINE_WIDTH / scale;

	graphics
		.lineStyle(lineWidth, pillarColor)
		.beginFill(pillarColor)
		.drawRect(0, 0, width, height)
		.endFill();

	graphics.pivot.x = width / 2;
	graphics.pivot.y = height / 2;

	return graphics;
};