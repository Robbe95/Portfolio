import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

const vuetifyOpts = {
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    rtl: false,
    theme: {
        options: {
            customProperties: true,
        },
        dark: false,
        themes: {
            dark: {
                primary: '#3AAFA9',
                accent: '#2B7A78',
                secondary: '#DEF2F1',
                success: '#A5D6A7',
                info: '#A3AFE8',
                warning: '#EDB67C',
                error: '#263C43'
            },
            light: {
                primary: '#3AAFA9',
                accent: '#2B7A78',
                secondary: '#DEF2F1',
                success: '#A5D6A7',
                info: '#A3AFE8',
                warning: '#EDB67C',
                error: '#263C43'
            }
        }
    },

};

export default new Vuetify(vuetifyOpts)
