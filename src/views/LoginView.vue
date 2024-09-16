<script>
import login from '../components/LoginPageComponent.vue'
import loginnav from '../components/LoginNavbarComponent.vue'

    export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    loginnav,
    login
      
  }
}
</script>

<template>
  <loginnav/>
  <login/>
</template>