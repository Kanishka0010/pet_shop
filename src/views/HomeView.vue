<script>
import navbar from '../components/NavbarComponent.vue'
import homeLpage from '../components/HomeLandingPage.vue'
import aboutLpage from '../components/AboutUsLandingPage.vue'
import rescuepage from '../components/RescuePageComponent.vue'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
      navbar,
      homeLpage,
      aboutLpage,
      rescuepage
  }
}
</script>

<template>
  <navbar/>
  <homeLpage/>
  <aboutLpage/>
  <rescuepage/>
</template>
