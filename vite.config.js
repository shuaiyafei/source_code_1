import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // 优化构建输出
    rollupOptions: {
      output: {
        manualChunks: {
          'vue': ['vue'],
        }
      }
    },
    // 增加警告阈值
    chunkSizeWarningLimit: 1000,
    // 启用 CSS 代码分割
    cssCodeSplit: true,
    // 启用 minify
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  },
  // 优化依赖预构建
  optimizeDeps: {
    include: ['vue']
  }
})
