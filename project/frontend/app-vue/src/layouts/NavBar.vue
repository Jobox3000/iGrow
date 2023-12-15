<template>
  <div       
    v-if="HomePages" 
    class="border-b"
  >
    <!-- Navbar -->
    <nav class="top-0 top-0 flex w-full p-2 px-0 items-center justify-center rounded-full bg-emerald-100">
      <!-- Account -->
      <div class="flex w-1/6 items-center justify-center">
        <router-link to="/home">
          <button class="flex w-full items-center justify-center">
            <img
              class="h-6"
              src="../assets/icons/user.svg"
            >
          </button>
        </router-link>
      </div>
      <!-- Search -->
      <div class="w-4/6">
        <input 
          type="text" 
          placeholder="Cerca" 
          class="w-full p-1 px-4 rounded-3xl bg-emerald-100"
        >
      </div>
      <!-- Direct -->
      <div class="flex w-1/6 items-center justify-center">
        <router-link to="/home">
          <button class="flex w-full items-center justify-center">
            <img
              class="h-6"
              src="../assets/icons/direct.svg"
            >
          </button>
        </router-link>
      </div>
    </nav>
    <object class="flex w-full p-1 bg-emerald-100 rounded-md my-2">
      <!-- TAB Docs -->
      <div 
        class="flex w-2/6 p-1 rounded-md"
        :class="{ 'bg-emerald-200': isRouteActive('Docs') }" 
      >
        <router-link 
          to="/home/docs" 
          class="flex w-full h-full items-center justify-center"
        >
          Docs
        </router-link>
      </div>   
      <!-- TAB MyGrows -->
      <div 
        class="flex w-2/6 p-1 rounded-md"
        :class="{ 'bg-emerald-200': isRouteActive('MyGrows') || isRouteActive('Home') }"
      >
        <router-link 
          to="/home/my_grows" 
          class="flex w-full h-full items-center justify-center"
        >
          My Grows
        </router-link>
      </div>   
      <!-- TAB AllGrows -->
      <div 
        class="flex w-2/6 p-1 rounded-md"
        :class="{ 'bg-emerald-200': isRouteActive('AllGrows') }" 
      >
        <router-link 
          to="/home/all_grows" 
          class="flex w-full h-full items-center justify-center"
        >
          All Grows
        </router-link>
      </div>     
    </object>
  </div>
</template>

<script>
export default {
  computed: {
    HomePages() {
      const allRoutes = ['Home', 'MyGrows', 'Docs', 'AllGrows'];
      return allRoutes.includes(this.$route.meta.title);
    }
  },
  methods: {
    isRouteActive(routeName) {
      return this.$route.meta.title === routeName;
    },
  },
};
</script>