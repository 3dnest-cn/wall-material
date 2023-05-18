import { COLOR } from './constant.js';
import { Vector, Tuple, Point, Line } from '../../../script/geometry/geometry.min.js';

export const getColors = (context) => {
	const { hover, focus, select, virtual, /* hold */ } = context;

	return select || focus
		? COLOR.select
		: hover
			? COLOR.hover
			: virtual
				? COLOR.virtual
				: COLOR.stateless;
};

const getLine = (originPoint, targetPoint, offset) => {
	const normal = Vector.rotate90(
		...Vector.normalize(
			...Vector.fromBothPoint(...originPoint, ...targetPoint)
		),
	);

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

	const thisHalfOutline = getHalfOutline(main, cross);
	const thatHalfOutline = getHalfOutline(main.reverse(), cross.reverse());

	outline.push(...thisHalfOutline);
	outline.push(...thatHalfOutline);

	outline.forEach(item => obj[item] = item);
	outline = Object.values(obj);

	return outline;
};