import {
    createRouter,
    createWebHistory
} from "vue-router";
import HomePage from '../pages/HomePage/HomePage.vue';
import HomePageUz from '../pages/HomeUz/HomePageUz.vue';
const language = localStorage.getItem('selectedLanguage')
console.log(language);
let currentLanguage = ''
switch (language) {
    case 'Ru':
        currentLanguage = HomePage
        break;
    case 'Uz':
        currentLanguage = HomePageUz
        break;
    default:
        currentLanguage = HomePage
        break;
}
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Home',
            component: currentLanguage,
        },
        {
            path: '/uz',
            name: 'HomePageUz',
            component: HomePageUz,
        },
        {
            path: '/ru',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: '/NotFoundSection',
            name: 'NotFoundSection',
            component: import('../components/NotFoundSection.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/NotFoundSection',
        },

    ]
})
export default router