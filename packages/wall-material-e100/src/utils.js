import { COLOR } from './constant.js';

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