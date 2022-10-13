import '../css/app.css';

import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - Docs`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')),
    setup: ({ app, props, plugin }) => {
        return createSSRApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
    },
}))
