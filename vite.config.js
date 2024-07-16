import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig(({ command, mode }) => {
    // Load current .env-file
    const env = loadEnv(mode, process.cwd(), '');

    return {
        server: {
            port: 3000, // Configure Vite to run on port 3000
        },
        publicDir: 'vendor/mixpost',
        plugins: [
            laravel({
                input: 'resources/js/app.js',
                publicDirectory: 'resources/dist',
                buildDirectory: 'vendor/mixpost',
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
            DefineOptions(),
        ],
        resolve: {
            alias: {
                '@css': '/resources/css',
                '@img': 'resources/img',
            },
        },
    };
});
