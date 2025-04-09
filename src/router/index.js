import { createRouter, createWebHistory } from 'vue-router';

// Импортируем компоненты (страницы)
import DatePage from '../../Tasks.vue';

const routes = [
    { path: '/', component: DatePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
