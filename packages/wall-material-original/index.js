import * as Door from './src/Door/index.js';
import * as Window from './src/Window/index.js';
import * as Stuff from './src/Stuff/index.js';

import { STATE, COLOR } from './src/constant.js';

export { Door, Window, Stuff };

export const setAlpha = (alpha = 0.01 ) => STATE.alpha = alpha;

export const setPillarColor = (color = 0x333333) => STATE.pillarColor = color;

export const setLineColor = (color = 0x000000) =>	COLOR.stateless.line = color;

export const setArcLineColor = (color = 0x000000) => COLOR.stateless.arcLine = color;

export const setColor = (lineColor = 0x000000, arcLineColor = 0x000000) => {
	COLOR.stateless.line = lineColor;
	COLOR.stateless.arcLine = arcLineColor;
};