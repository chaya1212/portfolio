import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js'; // 确保路径正确
import './scss/page.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
