/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
    ],
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: './test/setup.ts',
        projects: ['apps/*/vite.config.ts', 'libs/**/*/vite.config.ts'],

    },
})
