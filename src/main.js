import { createApp } from 'vue'
import { initializeApp } from "firebase/app"
import './style.css'
import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyDSYW4TBVOROkwj62hhZPbkInamr6-BMZs",
    authDomain: "travalizer-users.firebaseapp.com",
    projectId: "travalizer-users",
    storageBucket: "travalizer-users.appspot.com",
    messagingSenderId: "753383881117",
    appId: "1:753383881117:web:ed5cb2fe40f11e9ef75774"
  }
  initializeApp(firebaseConfig)


createApp(App).use(router).mount('#app')


