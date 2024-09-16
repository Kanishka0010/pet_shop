<script>
import { RouterLink, RouterView } from 'vue-router'

import footerMain from './components/footercomponent.vue'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    
    RouterView,
    footerMain
}
}
</script>

<template>

<RouterView/>  
<footerMain/>
  
  
</template>

<style scoped>
</style>
