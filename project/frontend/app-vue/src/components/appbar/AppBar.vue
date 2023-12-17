<template>
  <nav class="fixed bottom-0 left-0 flex w-full p-2 px-0 bg-black border-t border-zinc-900/90">
    <!-- Home Button -->
    <div class="w-1/2 flex items-center justify-center">
      <router-link to="/home/my_grows">
        <button 
          :class="{ 'bg-zinc-900': HomeRoutes() }"
          class="p-2 px-5 rounded-xl"
        >
          <img
            class="w-6"
            src="../../assets/icons/home.svg"
          >
        </button>
      </router-link>
    </div>
    <!-- Shop Button -->
    <div class="w-1/2 flex items-center justify-center">
      <router-link to="/shop/catalog">
        <button
          :class="{ 'bg-zinc-900': ShopRoutes() }"
          class="p-2 px-5 rounded-xl"
        >
          <img 
            class="w-6" 
            src="../../assets/icons/shop.svg"
          >
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    HomeRoutes() {
      const homeRoutes = ['Home', 'Docs', 'MyGrows', 'AllGrows'];
      return homeRoutes.includes(this.$route.meta.title);
    },
    ShopRoutes() {
      const shopRoutes = ['Shop', 'Catalog', 'Cart'];
      return shopRoutes.includes(this.$route.meta.title);
    }
  },
};
</script>