import { router } from './providers/router';
import '@/shared/styles/main.scss';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(router).mount('#app');
