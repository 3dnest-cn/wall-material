import { Vector, Tuple, Point, Line } from '@3dnest/spoke-geometry';
import { COLOR } from './constant.js';

export const getColors = (context) => {
	const { color, hover, focus, select, virtual, /* hold */ } = context;

	if (color) return {
		line: color,
		arcLine: color,
		fill: 0xffffff,
		windowFill: 0xcccccc,
	};

	return select || focus
		? COLOR.select
		: hover
			? COLOR.hover
			: virtual
				? COLOR.virtual
				: COLOR.stateless;
};

const PI = Math.PI;

const getNormal = (originPoint, targetPoint, rotation = PI / 2) => {
	return Vector.rotate(
		...Vector.normalize(...Vector.fromBothPoint(...originPoint, ...targetPoint)),
		rotation
	);
};

const getLine = (originPoint, targetPoint, offset, rotation) => {
	const normal = getNormal(originPoint, targetPoint, rotation);
	const translation = Vector.multiply(...normal, offset);

	const line = Tuple.Line(
		...Point.translate(...originPoint, ...translation),
		...normal
	);

	return line;
};

const getHalfOutline = (main, cross) => {
	const halfOutline = [];

	for (let i = 0; i < cross.length; i++) {
		const startLine = [...Tuple.Line(
			...main[0],
			...Vector.normalize(...Vector.fromBothPoint(...main[0], ...main[1]))
		)];

		const currentLine = [...getLine(main[i], main[i + 1], cross[i] / 2)];
		const previousLine = i === 0
			? startLine
			: [...getLine(main[i - 1], main[i], cross[i - 1] / 2)];
		const nextLine = i + 1 === cross.length
			? null
			: [...getLine(main[i + 1], main[i + 2], cross[i + 1] / 2)];

		const origin = Line.intersectLine(...currentLine, ...previousLine) === null
			? [...Point.translate(...main[i], currentLine[2], currentLine[3])]
			: [...Line.intersectLine(...currentLine, ...previousLine)];

		const target = nextLine
			? Line.intersectLine(...currentLine, ...nextLine) === null
				? [...Point.translate(...main[i + 1], currentLine[2], currentLine[3])]
				: [...Line.intersectLine(...currentLine, ...nextLine)]
			: [...Point.translate(...main[i + 1], currentLine[2], currentLine[3])];

		halfOutline.push([...origin]);
		halfOutline.push([...target]);
	}

	return halfOutline;
};

export const getOutline = (main, cross) => {
	let outline = [];
	const obj = {};

	const thisHalfOutline = getHalfOutline([...main], cross);
	const thatHalfOutline = getHalfOutline([...main].reverse(), cross.reverse());

	outline.push(...thisHalfOutline);
	outline.push(...thatHalfOutline);

	outline.forEach(item => obj[item] = item);
	outline = Object.values(obj);

	return outline;
};

export const getBoilerWindowNewMain = (main, windowThickness) => {
	const newMain = [...main];
	const startNormal = [...getNormal(newMain[0], newMain[1], 0)];
	const startTranslation = [...Vector.multiply(...startNormal, windowThickness / 2)];

	const endNormal = [...getNormal(newMain[newMain.length - 1], newMain[newMain.length - 2], 0)];
	const endTranslation = [...Vector.multiply(...endNormal, windowThickness / 2)];

	newMain[0] = [...Point.translate(...newMain[0], ...startTranslation)];
	newMain[newMain.length - 1] = [...Point.translate(...newMain[newMain.length - 1], ...endTranslation)];

	return newMain;
};

export const getBoilerWindowMedian = (main, wallThickness, sillThickness, windowThickness) => {
	const median = [];
	let direction = 1;

	if (main.length > 2) {
		const cw = Point.toLeftOfSegment(...main[1], ...main[0], ...main[main.length - 1]);

		direction = cw ? -1 : 1;
	}

	for (let i = 0; i < main.length; i++) {
		if (i === 0) {
			const thisNormal = [...getNormal(main[0], main[1], PI / 2 * direction)];
			const thisTranslation = [...Vector.multiply(...thisNormal, wallThickness[0] / 2)];

			const thatNormal = [...getNormal(main[0], main[1], -PI / 2 * direction)];
			const thatTranslation = [...Vector.multiply(...thatNormal,
				(wallThickness[0] / 2 + sillThickness[0] + windowThickness / 2))];

			median.push([...Point.translate(...main[0], ...thisTranslation)]);
			median.push([...Point.translate(...main[0], ...thatTranslation)]);
		} 	else if (i !== 0 && i !== main.length - 1) {
			const previousOffset = wallThickness[i - 1] / 2 + sillThickness[i - 1] + windowThickness / 2;
			const previousLine = [...getLine(main[i -1], main[i], previousOffset, -PI / 2 * direction)];

			const nextOffset = wallThickness[i] / 2 + sillThickness[i] + windowThickness / 2;
			const nextLine = [...getLine(main[i], main[i + 1], nextOffset, -PI / 2 * direction)];

			if (Line.intersectLine(...previousLine, ...nextLine)) {
				median.push([...Line.intersectLine(...previousLine, ...nextLine)]);
			}
		} else {
			const origin = main[main.length - 2], target = main[main.length - 1];
			const thisNormal = [...getNormal(origin, target, PI / 2 * direction)];
			const thisTranslation = [...Vector.multiply(...thisNormal, wallThickness[wallThickness.length - 1] / 2)];

			const thatNormal = [...getNormal(origin, target, -PI / 2 * direction)];
			const thatTranslation = [...Vector.multiply(...thatNormal,
				(wallThickness[wallThickness.length - 1] / 2 + sillThickness[sillThickness.length - 1] + windowThickness / 2))];

			median.push([...Point.translate(...target, ...thatTranslation)]);
			median.push([...Point.translate(...target, ...thisTranslation)]);
		}
	}

	return median;
};

export const getBoilerWindowMedianCross = (median, windowThickness) => {
	const cross = [];

	for (let i = 0; i < median.length - 1; i++) {
		cross.push(windowThickness);
	}

	return cross;
};