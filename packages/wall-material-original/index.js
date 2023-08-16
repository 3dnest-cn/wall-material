import * as Door from './src/Door/index.js';
import * as Window from './src/Window/index.js';
import * as Stuff from './src/Stuff/index.js';

import { STATE, COLOR } from './src/constant.js';

export { Door, Window, Stuff };

export const setAlpha = alpha => STATE.alpha = alpha;

export const setPillarColor = color => STATE.pillarColor = color;

export const setLineColor = color =>	COLOR.stateless.line = color;

export const setArcLineColor = color => COLOR.stateless.arcLine = color;

export const setBealockLineColor = color => COLOR.stateless.bealockLine = color;

export const setBealockFillColor = color => COLOR.stateless.bealockFill = color;

export const setColor = (lineColor = 0xffffff, arcLineColor = 0xffffff,
	bealockLineColor = 0x000000, bealockFillColor = 0xffffff) => {
	COLOR.stateless.line = lineColor;
	COLOR.stateless.arcLine = arcLineColor;
	COLOR.stateless.bealockLine = bealockLineColor;
	COLOR.stateless.bealockFill = bealockFillColor;
};