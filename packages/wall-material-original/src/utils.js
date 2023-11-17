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

const getVector = (originPoint, targetPoint, rotation) => {
	return Vector.rotate(
		...Vector.normalize(...Vector.fromBothPoint(...originPoint, ...targetPoint)),
		rotation
	);
};

//normal 法向量
const getLine = (originPoint, targetPoint, offset, rotation = PI / 2) => {
	const normal = getVector(originPoint, targetPoint, rotation);
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

export const getBoilerWindowMedian = (main, wallThickness, sillThicknessList, windowThickness) => {
	const median = [];
	let direction = 1;

	if (main.length > 2) {
		const cw = Point.toLeftOfSegment(...main[1], ...main[0], ...main[main.length - 1]);

		direction = cw ? -1 : 1;
	}

	for (let i = 0; i < main.length; i++) {
		if (i === 0) {
			const startVector = [...getVector(main[0], main[1], 0)];
			const startTranslation = [...Vector.multiply(...startVector, windowThickness / 2)];
			const startPoint = [...Point.translate(...main[0], ...startTranslation)];

			const thisNormal = [...getVector(main[0], main[1], -PI / 2 * direction)];
			const thisTranslation = [...Vector.multiply(...thisNormal, wallThickness[0] / 2)];

			const thatNormal = [...getVector(main[0], main[1], -PI / 2 * direction)];
			const thatTranslation = [...Vector.multiply(...thatNormal,
				(wallThickness[0] / 2 + sillThicknessList[0] + windowThickness / 2))];

			median.push([...Point.translate(...startPoint, ...thisTranslation)]);
			median.push([...Point.translate(...startPoint, ...thatTranslation)]);
		} 	else if (i !== 0 && i !== main.length - 1) {
			const previousOffset = wallThickness[i - 1] / 2 + sillThicknessList[i - 1] + windowThickness / 2;
			const previousLine = [...getLine(main[i -1], main[i], previousOffset, -PI / 2 * direction)];

			const nextOffset = wallThickness[i] / 2 + sillThicknessList[i] + windowThickness / 2;
			const nextLine = [...getLine(main[i], main[i + 1], nextOffset, -PI / 2 * direction)];

			if (Line.intersectLine(...previousLine, ...nextLine)) {
				median.push([...Line.intersectLine(...previousLine, ...nextLine)]);
			}
		} else {
			const origin = main[main.length - 1], target = main[main.length - 2];

			const endVector = [...getVector(origin, target, 0)];
			const endTranslation = [...Vector.multiply(...endVector, windowThickness / 2)];
			const endPoint =  [...Point.translate(...origin, ...endTranslation)];

			const thisNormal = [...getVector(origin, target, PI / 2 * direction)];
			const thisTranslation = [...Vector.multiply(...thisNormal, wallThickness[wallThickness.length - 1] / 2)];

			const thatNormal = [...getVector(origin, target, PI / 2 * direction)];
			const thatTranslation = [...Vector.multiply(...thatNormal,
				(wallThickness[wallThickness.length - 1] / 2 + sillThicknessList[sillThicknessList.length - 1] + windowThickness / 2))];

			median.push([...Point.translate(...endPoint, ...thatTranslation)]);
			median.push([...Point.translate(...endPoint, ...thisTranslation)]);
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

export const getBoilerWindowBottomRect = (main, wallThicknessList, windowThickness) => {
	const getRect =  (origin, target, wallOffset) => {
		const rect = [];

		const vector = [...getVector(origin, target, 0)];
		const thisVector = [...getVector(origin, target, PI / 2)];
		const thatVector = [...getVector(origin, target, -PI / 2)];

		const translation = [...Vector.multiply(...vector, windowThickness)];
		const thisTranslation = [...Vector.multiply(...thisVector, wallOffset / 2)];
		const thatTranslation = [...Vector.multiply(...thatVector, wallOffset / 2)];

		const newPoint = [...Point.translate(...origin, ...translation)];

		rect.push([...Point.translate(...origin, ...thisTranslation)]);
		rect.push([...Point.translate(...newPoint, ...thisTranslation)]);
		rect.push([...Point.translate(...newPoint, ...thatTranslation)]);
		rect.push([...Point.translate(...origin, ...thatTranslation)]);

		return rect;
	};

	const startWallOffset = wallThicknessList[0];
	const endWallOffset = wallThicknessList[wallThicknessList.length - 1];

	const startRect = getRect(main[0], main[1], startWallOffset);
	const endRect = getRect(main[main.length -1], main[main.length - 2], endWallOffset);

	return { startRect, endRect };
};

//暂时不用
export const getBoilerWindowBottom = (main, wallThickness) => {
	const bottom = [];
	let direction = 1;

	if (main.length > 2) {
		const cw = Point.toLeftOfSegment(...main[1], ...main[0], ...main[main.length - 1]);

		direction = cw ? -1 : 1;
	}

	for (let i = 0; i < main.length; i++) {
		if (i === 0) {
			const normal = [...getVector(main[0], main[1], PI / 2 * direction)];
			const translation = [...Vector.multiply(...normal, wallThickness[0] / 2)];

			bottom.push([...Point.translate(...main[0], ...translation)]);
		} 	else if (i !== 0 && i !== main.length - 1) {
			const previousOffset = wallThickness[i - 1] / 2;
			const previousLine = [...getLine(main[i -1], main[i], previousOffset, PI / 2 * direction)];

			const nextOffset = wallThickness[i] / 2;
			const nextLine = [...getLine(main[i], main[i + 1], nextOffset, PI / 2 * direction)];

			if (Line.intersectLine(...previousLine, ...nextLine)) {
				bottom.push([...Line.intersectLine(...previousLine, ...nextLine)]);
			}
		} else {
			const origin = main[main.length - 2], target = main[main.length - 1];
			const normal = [...getVector(origin, target, PI / 2 * direction)];
			const translation = [...Vector.multiply(...normal, wallThickness[wallThickness.length - 1] / 2)];

			bottom.push([...Point.translate(...target, ...translation)]);
		}
	}

	return bottom;

};