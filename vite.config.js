import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxInject: `import { h, Fragment } from '@sseezov/wood-js'`,
    jsxFragment: 'Fragment',
    jsx: 'transform',
  }
})