import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
            // Tambahkan logika di bawah ini:
            // Jika dijalankan di Vercel, jangan lakukan generate (karena tidak ada PHP)
            runOnBuild: process.env.VERCEL ? false : true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
