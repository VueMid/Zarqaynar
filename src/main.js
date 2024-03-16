import {
    createApp
} from 'vue';
import {
    MotionPlugin
} from '@vueuse/motion';
import {
    Toast,
    options
} from './libs/toastification.js'
import "vue-toastification/dist/index.css";
import App from './App.vue';
import router from './router';
import './assets/css/font.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';
const app = createApp(App);
app.use(Toast, options);
app.use(router);
app.use(MotionPlugin);
app.mount('#app');