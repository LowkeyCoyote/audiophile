import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias : {
      "@components" : path.resolve(__dirname, './src/components'),
      "@pages" : path.resolve(__dirname, './src/pages'),
      "@assets" : path.resolve(__dirname, './src/assets'),
      "@utils" : path.resolve(__dirname, './src/utils'),
      "@datas" : path.resolve(__dirname, './src/datas'),
      "@const" : path.resolve(__dirname,'./src/const'),
      "@hooks" : path.resolve(__dirname,'./src/hooks'),
      "@types" : path.resolve(__dirname,'./src/types')
    }
  }
})
