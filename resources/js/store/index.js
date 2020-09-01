import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import currentImage from './modules/currentImage'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        cart,
        currentImage
    },
    strict: debug,
})
