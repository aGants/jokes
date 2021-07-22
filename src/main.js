import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios';
import Vuex from 'vuex'

createApp(App).use(VueAxios, axios, Vuex).mount('#app')
