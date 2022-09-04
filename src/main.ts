import {createApp} from 'vue'
import './style.css'
import Main from './Main.vue'
import store from "./resources/store"
import router from './resources/router'

createApp(Main)
    .use(store)
    .use(router)
    .mount('#app')
