<script>
import buynow from '../components/BuyNowComponent.vue'
import buynownavbar from '../components/BuyNowNavBarComponent.vue'
    export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    
    buynownavbar,
    buynow
  }
}
</script>

<template>
    <buynownavbar/>
    <buynow/>
  </template>