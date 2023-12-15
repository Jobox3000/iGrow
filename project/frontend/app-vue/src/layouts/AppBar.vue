<template>
  <div v-if="AuthCurrentRoutes">
    <AuthBar />
  </div>
  <div v-else-if="AppCurrentRoutes">
    <AppBar />
  </div>
</template>

<script>
import AppBar from '../components/appbar/AppbarComponent.vue'
import AuthBar from '../components/appbar/AuthbarComponent.vue'

export default {
  components: {
    AppBar,
    AuthBar
  },
  computed: {
    AuthCurrentRoutes() {
      const allRoutes = ['Login', 'Register'];
      return allRoutes.includes(this.$route.meta.title);
    },
    AppCurrentRoutes() {
      const allRoutes = ['Home', 'Shop', 'Docs', 'MyGrows', 'AllGrows'];
      return allRoutes.includes(this.$route.meta.title);
    }
  },
}
</script>