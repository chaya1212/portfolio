import { createApp } from 'vue'
import App from './App.vue'
// 1. 导入路由对象
import router from './router/index.js'
import 'bootstrap/dist/js/bootstrap.js';
import '@fontsource/syncopate';
import '@fontsource/syncopate/400.css';
import '@fontsource/syncopate/700.css';

// 2. 使用 use() 将路由对象安装为 vue 全局插件
createApp(App).use(router).mount('#app')

