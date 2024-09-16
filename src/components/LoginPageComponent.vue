<script setup>

import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'vue-router'

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter()

const register = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            router.push('/buy') // re dircto the product
        })
        .catch((error) => {
            // alert(error.message);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect"
                    break;

            }

        })
};

const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            router.push('/buy'); // redirect to the shop
        })
        .catch((error) => {
            // console.log(error.code);
            errMsg.value = "An error occurred during Google sign-in";
        });


};

const closeAlert = () => {
    errMsg.value = '';
};

</script>

<template>

    <div class="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50 lg:py-32">
        <div class="relative">
        
            <div class="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
                <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
            </div>

            <div class="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
                <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)'/></svg>
            </div>

            <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                <div class="flex-auto p-6">

                    <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                        <a class="flex cursor-pointer items-center gap-2 text-indigo-400 no-underline hover:text-indigo-500">
                            <span class="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">LOGIN</span>
                        </a>
                    </div>

                    <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to JACK PET!</h4>
                    <p class="mb-6 text-gray-500">Please sign-in to access your account</p>

                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" v-if="errMsg">
                        <span class="block sm:inline">{{ errMsg }}</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" @click="closeAlert">
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                            </svg>
                        </span>
                    </div>

                    <div class="mb-4">
                        <div>
                            <div class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email Address</div>
                            <input type="text" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" name="email" placeholder="Enter your email or username" v-model="email" />
                        </div>

                        <div class="mt-5">
                            <div class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"> Password </div>
                            <input type="password" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" name="password" placeholder="Password" v-model="password" />
                        </div>

                        <div class="mt-3">
                            <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                Forgot Password?
                            </a>
                        </div>

                        <div class="mt-10">
                            <button type="submit" @click="register" class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none">
                                Login
                            </button>
                        </div>

                        <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            New on futurism?
                            <RouterLink @click="showMenu = false" class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500" to="/register">Create an account</RouterLink>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<style type="text/css">
.st0 {
    fill: none;
    stroke: currentColor;
    stroke-width: 20;
    stroke-linecap: round;
    stroke-miterlimit: 3;
}</style>