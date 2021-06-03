import { defineConfig } from "vite";
import ViteVue from "@vitejs/plugin-vue";
import VitePages from 'vite-plugin-pages';
import { resolve } from 'path';
import fs from 'fs-extra';
import matter from 'gray-matter';
import ViteMarkdown from 'vite-plugin-md';
import ViteComponents from 'vite-plugin-components';

export default defineConfig({
    plugins: [
        ViteVue({
            include: [/\.vue$/, /\.md$/],
        }),

        VitePages({
            extensions: ['vue', 'md'],
            pagesDir: 'pages',
            extendRoute(route) {
                const path = resolve(__dirname, route.component.slice(1));

                if (!path.includes('projects.md') && path.includes('.md')) {
                    const md = fs.readFileSync(path, 'utf-8');
                    const { data } = matter(md);
                    route.meta = Object.assign(route.meta || {}, { frontmatter: data });
                }

                return route;
            },
        }),

        ViteMarkdown(),

        ViteComponents({
            extensions: ['vue', 'md'],
            customLoaderMatcher: path => path.endsWith('.md'),
        }),
    ],
});