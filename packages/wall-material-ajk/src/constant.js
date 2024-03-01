export const PI = Math.PI;

export const DOOR_THICKNESS = 80;

export const LINE_WIDTH = 15;

export const SEAM = 10;

export const ALPHA = .01;

export const STATE = {
	mode:'face'
};

export const COLOR = {
	stateless: {
		line: 0x727272,
		arcLine: 0x727272,
		middleLine: 0x333333,
		fill: 0xffffff,
		windowFill: 0xcccccc
	},
	hover: {
		line: 0x7ae2ff,
		arcLine: 0xd7d8d9,
		middleLine: 0x7ae2ff,
		fill: 0xffffff,
		windowFill: 0xcccccc
	},
	select: {
		line: 0x3e82f7,
		arcLine: 0xd7d8d9,
		middleLine: 0x3e82f7,
		fill: 0xffffff,
		windowFill: 0xcccccc
	},
	virtual: {
		line: 0xff0000,
		arcLine: 0xff0000,
		middleLine: 0xff0000,
		fill: 0xffffff,
		windowFill: 0xffffff
	},
};