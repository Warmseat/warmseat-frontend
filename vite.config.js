import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  ...(process.env.NODE_ENV === 'development'
    ? {
      define: {
        global: {},   // this fixes a 'global is undefined' error
      },
    }
    : {}),
  plugins: [react()],
  // test: {
  //   globals: true,
    // environment: 'jsdom',
    // setupFiles: './src/setupTests.ts',
  // }
})
