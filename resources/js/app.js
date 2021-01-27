window.Vue = require('vue');

import vuetify from './vuetify'
import Vuex from 'vuex'
import store from './store'
import router from './routes'

import AppStart from './AppStart'
import { gsap } from 'gsap';
import { CustomEase } from './gsap/CustomEase';
import { ScrollTrigger } from './gsap/ScrollTrigger';

import NavigationDrawer from './layout/Navigation/NavigationDrawer'
Vue.use(Vuex);

window.gsap = gsap;
window.gsap.registerPlugin(ScrollTrigger);
window.CustomEase = CustomEase;
window.ScrollTrigger = ScrollTrigger;

//Set components
Vue.use(router);
import VueAnalytics from 'vue-analytics';
//and then use it in main.js

Vue.use(VueAnalytics, {
    id: 'UA-260251175-1',
    router: router,
    debug: {
        enabled: true,
        trace: true,
        sendHitTask: true
    }
})
const app = new Vue({
    vuetify,
    store,
    router,
    render: h => h(AppStart),
    el: '#app',

});
