import { createWebHashHistory, createRouter } from "vue-router";
import LandingScreen from '../components/LandingScreen.vue';
import SubjectScreen from '../components/SubjectScreen/SubjectScreen.vue';

const routes = [
    { path: '/', component: LandingScreen },
    { path: '/Subject/:subjectName', component: SubjectScreen },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;