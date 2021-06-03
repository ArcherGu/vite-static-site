import App from './App.vue';
import routes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';

export const createApp = ViteSSG(
    App,
    { routes }
);
