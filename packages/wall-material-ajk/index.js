import * as Door from './src/Door/index.js';
import * as Window from './src/Window/index.js';
import * as Stuff from './src/Stuff/index.js';

import { STATE, COLOR } from './src/constant.js';

export { Door, Window, Stuff };

export const setMode = (mode = 'face') => {
	STATE.mode = mode;

	if (mode === 'face') {
		COLOR.stateless.line = 0x727272;
		COLOR.stateless.arcLine = 0x727272;
		COLOR.stateless.middleLine =  0x333333;
	}

	if (mode === 'line') {
		COLOR.stateless.line = 0xd5d5d4;
		COLOR.stateless.arcLine = 0xd5d5d4;
		COLOR.stateless.middleLine = 0xffffff;
	}

};