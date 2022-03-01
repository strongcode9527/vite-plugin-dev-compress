import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
    input: './src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    sourcemap: true,
    plugins: [typescript(), commonjs(), resolve(), json()]
}
