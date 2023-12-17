<template>
  <div>
    <!-- Navbar -->
    <nav class="top-0 top-0 flex flex-col w-full p-2 pb-0 px-0 items-center justify-center rounded-xl bg-zinc-900">
      <div class="flex w-full pb-2">
        <!-- Account -->
        <div class="flex w-1/6 items-center justify-center">
          <router-link to="/shop/catalog">
            <button class="flex w-full items-center justify-center">
              <img
                class="h-6"
                src="../../assets/icons/menu-bars.svg"
              >
            </button>
          </router-link>
        </div>
        <!-- Search -->
        <div class="w-4/6">
          <input 
            type="text" 
            placeholder="Cerca" 
            class="w-full p-2 px-4 rounded-lg bg-zinc-900"
          >
        </div>
        <!-- Direct -->
        <div class="flex w-1/6 items-center justify-center">
          <router-link to="/shop/cart">
            <button class="flex w-full items-center justify-center">
              <img
                class="h-6"
                src="../../assets/icons/amazon.svg"
              >
            </button>
          </router-link>
        </div>
      </div>
      <!-- TABS -->
      <div class="flex w-full">
        <object class="flex w-full p-1 bg-zinc-900 rounded-xl">
          <!-- TAB Docs -->
          <div 
            class="flex w-1/2 p-1 rounded-lg"
            :class="{ 'bg-zinc-800': isRouteActive('Catalog') }" 
          >
            <router-link 
              to="/shop/catalog" 
              class="flex w-full h-full items-center justify-center"
            >
              Catalog
            </router-link>
          </div>   
          <!-- TAB MyGrows -->
          <div 
            class="flex w-1/2 p-1 rounded-lg"
            :class="{ 'bg-zinc-800': isRouteActive('Cart') }"
          >
            <router-link 
              to="/shop/cart" 
              class="flex w-full h-full items-center justify-center"
            >
              Cart
            </router-link>
          </div>   
        </object>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    isRouteActive(routeName) {
      return this.$route.meta.title === routeName;
    }
  }
}
</script>


