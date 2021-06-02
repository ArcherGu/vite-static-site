import { createApp } from 'vue';
import App from './App.vue';
import routes from 'pages-generated';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);
app.use(createRouter({
    history: createWebHistory(),
    routes
}));

app.mount('#app');
