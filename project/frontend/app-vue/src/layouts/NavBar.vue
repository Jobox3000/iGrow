<template>
  <div>
    <!-- Auth_Navbar -->
    <div v-if="AuthRoutes">
      {{ null }}
    </div>
    <!-- Home_Navbar -->
    <div v-if="HomeRoutes">
      <HomeBar />
    </div>
    <!-- Shop_Navbar -->
    <div v-if="ShopRoutes">
      <ShopBar />
    </div>
    <!-- Account_Navbar -->
    <div v-if="AccountRoutes">
      <AccountBar />
    </div>
    <!-- Direct_Navbar -->
    <div v-if="DirectRoutes">
      <DirectNav />
    </div>
  </div>
</template>

<script>
import HomeBar from '../components/navbar/HomeBar.vue'
import ShopBar from '../components/navbar/ShopBar.vue'
import AccountBar from '../components/navbar/AccountBar.vue'
import DirectNav from '../components/navbar/DirectNav.vue'

export default {
  components: {
    HomeBar,
    ShopBar,
    AccountBar,
    DirectNav
  },
  computed: {
    AuthRoutes() {
      const allRoutes = ['Login', 'Register'];
      return allRoutes.includes(this.$route.meta.title);
    },
    HomeRoutes() {
      const allRoutes = ['Home', 'Docs', 'MyGrows', 'AllGrows'];
      return allRoutes.includes(this.$route.meta.title);
    },
    ShopRoutes() {
      const allRoutes = ['Shop', 'Catalog', 'Cart'];
      return allRoutes.includes(this.$route.meta.title);
    },
    AccountRoutes() {
      const allRoutes = ['Account'];
      return allRoutes.includes(this.$route.meta.title);
    },
    DirectRoutes() {
      const allRoutes = ['Direct'];
      return allRoutes.includes(this.$route.meta.title);
    }
  },
};
</script>