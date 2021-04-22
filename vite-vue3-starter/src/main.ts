import { createApp } from 'vue';
import App from './App.vue';

// 挂载路由
import router from './router/index';

// 挂载 store
import store from './store/index';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
