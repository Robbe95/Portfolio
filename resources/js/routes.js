import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home';
import About from './views/About';
import Vote from './views/Vote';

import Projects from './views/Projects';

Vue.use(VueRouter);
const router = new VueRouter({
   mode: 'history',
   routes: [
       {
           path: '/',
           name: 'home',
           component: Home
       },
       {
           path: '/about',
           name: 'about',
           component: About
       },
       {
           path: '/vote',
           name: 'vote',
           component: Vote
       },
       {
           path: '/projects',
           name: 'projects',
           component: Projects
       }
   ],
    scrollBehavior (to, from, savedPosition) {
        console.log('saved: - ' + savedPosition);

        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    linkActiveClass: 'is-active'

});

export default router;
