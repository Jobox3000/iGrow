<template>
  <!-- Auth_Appbar -->
  <div v-if="AuthRoutes">
    <AuthBar />
  </div>
  <!-- App_Appbar -->
  <div v-else-if="AppRoutes">
    <AppBar />
  </div>
  <!-- No_Appbar -->
  <div v-else-if="NoRoutes">
    {{ null }}
  </div>
</template>

<script>
import AuthBar from '../components/appbar/AuthBar.vue'
import AppBar from '../components/appbar/AppBar.vue'
export default {
  components: {
    AuthBar,
    AppBar,
  },
  computed: {
    AuthRoutes() {
      const allRoutes = ['Login', 'Register'];
      return allRoutes.includes(this.$route.meta.title);
    },
    AppRoutes() {
      const allRoutes = ['Home', 'Docs', 'MyGrows', 'AllGrows', 'Shop', 'Catalog', 'Cart'];
      return allRoutes.includes(this.$route.meta.title);
    },
    NoRoutes() {
      const allRoutes = ['Index', 'Account', 'Direct'];
      return allRoutes.includes(this.$route.meta.title);
    },
  },
}
</script>