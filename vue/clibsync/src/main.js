import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, connectAuthEmulator, createUserWithEmailAndPassword } from 'firebase/auth';


import './assets/style.css'


var firebaseConfig = initializeApp({
    apiKey: "AIzaSyBXhUo_ELj_qmWXaowRsrUih9HN27RpdZE",
    authDomain: "clipsync-1.firebaseapp.com",
    databaseURL: "https://clipsync-1-default-rtdb.firebaseio.com",
    projectId: "clipsync-1",
    storageBucket: "clipsync-1.appspot.com",
    messagingSenderId: "690979459053",
    appId: "1:690979459053:web:17da89ff7ca9e332bfe1e4",
    measurementId: "G-5TLB54S34G"
})

const auth = getAuth(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
