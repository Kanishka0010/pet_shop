<script>
import register from '../components/RregisterComponent.vue'
import rigisternav from '../components/RegisterNavBarComponent.vue'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    
      rigisternav,
      register
  }
}

</script>

<template>
    <rigisternav/>
    <register/>
  </template>