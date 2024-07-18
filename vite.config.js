import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig(({ command, mode }) => {
    // Load environment variables based on the mode
    const env = loadEnv(mode, process.cwd(), '');

    return {
        server: {
            port: env.VITE_PORT || 3000,
            hmr: {
                host: 'localhost',
                port: env.VITE_HMR_PORT || 3000,
            },
        },
        publicDir: 'vendor/mixpost',
        plugins: [
            laravel({
                input: ['resources/js/app.js', 'resources/css/app.css'],
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
                '@img': '/resources/img',
                '@js': '/resources/js',
            },
        },
        build: {
            outDir: 'vendor/mixpost',
            sourcemap: mode === 'development',
            chunkSizeWarningLimit: 1000,  // Adjust chunk size warning limit
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            // Split vendor modules into separate chunks
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    },
                },
            },
        },
    };
});
