import '../css/app.css';

import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PageLayout from "@/Layouts/PageLayout";

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - Docs`,
    resolve(name) {
        const page = resolvePageComponent(`./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'));

        page.then((module) => {
            module.default.layout = module.default.layout || PageLayout;
        });

        return page;
    },
    setup: ({ app, props, plugin }) => {
        return createSSRApp({ render: () => h(app, props) })
            .use(plugin)
    },
}))
