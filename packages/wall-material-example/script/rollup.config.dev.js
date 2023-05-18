import path from 'path';
import html from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';
import commomjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve';
import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../.dev');

export default defineConfig({
	// input: path.join(__dirname, '../src/e100.js'),
	input: path.join(__dirname, '../src/lyj.js'),
	// input: path.join(__dirname, '../src/original.js'),
	output: {
		dir: DIST_DIR,
		sourcemap: 'inline',
		format: 'umd',
		name: 'example'
	},
	plugins: [
		nodeResolve({
			browser: true,
			preferBuiltins: false
		}),
		serve({ host: '0.0.0.0', port: 4000, contentBase: DIST_DIR }),
		livereload({ watch: DIST_DIR }),
		html(),
		commomjs()
	]
});