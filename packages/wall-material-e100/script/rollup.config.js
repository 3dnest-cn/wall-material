import path from 'path';
import fs from 'fs';
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const meta = JSON.parse(fs.readFileSync(path.resolve('./package.json')).toString());
// import meta from '../package.json'  assert { type: 'json' };

const MODULE_NAME = meta.name;

const BANNER =
	'/*!\n' +
	` * ${ meta.name } v${ meta.version }\n` +
	` * (c) 2022-${new Date().getFullYear()} 3dnest\n` +
	' * Released under the MIT License.\n' +
	' */';

const moduleList = [
	{
		output: path.resolve('dist/e100.min.js'),
		format: 'umd',
		name: MODULE_NAME,
		isUglify: true
	}
];

export default moduleList.map(config => {
	const pluginList = [
		nodeResolve({
			browser: true,
			preferBuiltins: false
		}),
		commonjs(),
		json()
	];

	if (config.isUglify) {
		pluginList.push(terser());
	}

	return defineConfig({
		input: path.resolve('index.js'),
		output: {
			file: config.output,
			format: config.format,
			name: config.name,
			banner: BANNER
		},
		plugins: pluginList
	});
});
