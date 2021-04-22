import { createApp } from 'vue';
import App from './App.vue';

// 挂载路由
import router from './router/index';

// 挂载 store
import store from './store/index';

// 挂载element-ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app');
