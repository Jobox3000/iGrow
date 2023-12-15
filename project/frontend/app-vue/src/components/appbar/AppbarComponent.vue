<template>
  <nav class="absolute bottom-0 left-0 flex w-full p-2 bg-emerald-100">
    <!-- AppBar > Home -->
    <div class="w-1/2 flex items-center justify-center">
      <router-link to="/home">
        <button 
          :class="{ 'bg-emerald-200': isRouteActive('Home') || isRouteActive('Docs') || isRouteActive('MyGrows') || isRouteActive('AllGrows')}"
          class="p-2 px-5 rounded-3xl"
        >
          <img
            class="w-6"
            src="../../assets/icons/home.svg"
          >
        </button>
      </router-link>
    </div>
    <!-- AppBar > Shop -->
    <div class="w-1/2 flex items-center justify-center">
      <router-link to="/shop">
        <button
          :class="{ 'bg-emerald-200': isRouteActive('Shop') }" 
          class="p-2 px-5 rounded-3xl"
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
    isRouteActive(routeName) {
      return this.$route.meta.title === routeName;
    },
  },
};
</script>