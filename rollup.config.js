import {terser} from 'rollup-plugin-terser';
export default {
    input: 'src/js/index.js',
    output: {
        file: 'dist/js/index.js',
        format: 'umd',

    },
    plugins: [
        terser()
    ]
};
