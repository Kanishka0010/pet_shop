<script>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '../router'



export default {
    setup() {
        const isLoggedIn = ref(true);
        let auth;
        const navbar = ref('');
        const showMenu = ref(false);
         const name = ref('');
        

        onMounted(() => {
            auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                isLoggedIn.value = !!user;
                console.log("Authentication state changed");
                console.log("isLoggedIn: ", isLoggedIn.value);
                 if (user) {
                    name.value = user.email.split('@')[0];
                    console.log("User name:", name.value);
                } else {
                    name.value = '';
                }
            });

            window.onscroll = () => {
                if (window.scrollY === 0) {
                    navbar.value.classList.remove('bg-primary-200')
                } else {
                    navbar.value.classList.add('bg-primary-200')
                }
            };
         
        });

        const handleSignOut = () => {
            signOut(auth).then(() => {
                router.push("/");
            });
        };

        return {
            isLoggedIn,
            handleSignOut,
            showMenu,
            name,
            
        };
    }
}
</script>
<template>
  
    <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" class="flex items-center">
          <img src="./Image/My project.png" class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JACK PET</span>
      </a>
      <div class="flex md:order-2">
        <!-- <a href="#login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          SingUp
        </a> -->
        <a @click="handleSignOut" v-if="isLoggedIn" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Out</a>
          <!-- <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SingUp</button> -->
          <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink @click="showMenu = false" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" to="/">Home</RouterLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    
    </template>