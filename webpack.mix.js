const mix = require("laravel-mix");
const path = require('path');

mix.ts("resources/assets/index.tsx", "public/bundle")
    .react()
    .webpackConfig({
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'resources/assets'),
            },
        },
    });
