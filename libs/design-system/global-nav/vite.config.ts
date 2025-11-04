// vitest.config.ts
import { defineProject } from 'vitest/config';

export default defineProject({
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: '../../../test/setup.ts',
    },
});
