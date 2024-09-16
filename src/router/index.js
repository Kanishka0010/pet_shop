import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/LoginView.vue'
import register from '../views/RegisterView.vue'
import buy from '../views/BuyView.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy,
      meta:{ requiresAuth:true,}
    }
    
  ]
})
const getCurrentUser = () =>{
  return new Promise((resolve,reject)=>{
   const removeListener =  onAuthStateChanged(
    getAuth(),
    (user) =>{
      removeListener();
      resolve(user);
    },

    reject
   )
  });
};

router.beforeEach(async(to ,from,next)=>{
if (to.matched.some((record)=>record.meta.requiresAuth)) {
  if(await getCurrentUser()) {
     next(); 

  }
  else {

    alert("You Don't Have An Access, Please Register Or Login ");
    next('/register'); //redirct to home 
  }
  
}

else {
  next();
}


});
export default router
