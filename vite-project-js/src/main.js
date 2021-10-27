import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

// add router config
createApp(App)
    .use(router)
    .mount('#app');
