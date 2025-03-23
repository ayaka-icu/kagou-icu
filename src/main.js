//import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'

// 路由
import router from './router'

// arco design
import ArcoVue from '@arco-design/web-vue';

// arco icon
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

// arco css
import '@arco-design/web-vue/dist/arco.css';

import Particles from "vue3-particles";

const app = createApp(App);

app.use(router);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(Particles);
app.mount('#app')
