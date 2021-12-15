import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
//import mm from 'micromatch';

const inner = (f) => {
	if (f.endsWith('.d.ts')) return false;
	if (f.includes('routes')) return false;
	if (f.includes('lib')) return true;
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		package: {
			emitTypes: true,
			exports: (filepath) => {
				let flag = inner(filepath);
				console.log(`${filepath}: ${flag}`);
				return flag;
			},
			files: (filepath) => {
				let flag = inner(filepath);
				console.log(`${filepath}: ${flag}`);
				return flag;
			}
		}
	}
};

export default config;
