
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // Usa 'jsdom' si es para frontend
    include: ['src/**/*.entity.test.ts', 'src/**/*.spec.ts'],
    exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
    typecheck: {
      tsconfig: './tsconfig.json',
    },
    //setupFiles: ['./vitest-setup-server.ts'], // Opcional, si tienes setup global
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
