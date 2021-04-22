import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// 将 '@' 指向 src 目录
			'@': resolve(__dirname, 'src')
		}
	},

	// 打包路径
	base: './',
	server: {
		// 服务启动端口号
		port: 4000,

		// 服务启用时是否自动打开浏览器
		open: true,

		// 允许跨域
		cors: true

		// 设置代理
		// proxy: {
		//   '/api': {
		//     target: '',
		//     changeOrigin: true,
		//     secure: false,
		//     rewrite: (path) => path.replace('/api/', '/')
		//   }
		// }
	}
});
