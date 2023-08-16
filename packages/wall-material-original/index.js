import * as Door from './src/Door/index.js';
import * as Window from './src/Window/index.js';
import * as Stuff from './src/Stuff/index.js';

import { STATE, COLOR } from './src/constant.js';

export { Door, Window, Stuff };

export const setAlpha = alpha => STATE.alpha = alpha;

export const setPillarColor = color => STATE.pillarColor = color;

export const setLineColor = color =>	COLOR.stateless.line = color;

export const setArcLineColor = color => COLOR.stateless.arcLine = color;

export const setColor = (lineColor = 0x000000, arcLineColor = 0x000000) => {
	COLOR.stateless.line = lineColor;
	COLOR.stateless.arcLine = arcLineColor;
};