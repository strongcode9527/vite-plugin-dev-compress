import type { Plugin } from 'vite';
// @ts-ignore
// const compress = require('./compression.js') ;

// @ts-ignore
import compress from './compression.js';

export default (): Plugin => {
    return {
        name: 'vite-plugin-dev-compress',
        configureServer: async (server) => {
            server.middlewares.use(compress());
        },
    };
};
