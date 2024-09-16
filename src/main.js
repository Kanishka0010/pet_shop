// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_44DDAn4Cz_btemQsssGQqkWnDkEEEM",
  authDomain: "petshop-e5fad.firebaseapp.com",
  projectId: "petshop-e5fad",
  storageBucket: "petshop-e5fad.appspot.com",
  messagingSenderId: "246225768817",
  appId: "1:246225768817:web:c1a201d2368905fc02e6d0"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')
