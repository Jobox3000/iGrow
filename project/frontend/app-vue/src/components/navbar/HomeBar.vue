<template>
  <div>
    <!-- Navbar -->
    <nav class="top-0 top-0 flex flex-col w-full p-2 pb-0 px-0 items-center justify-center rounded-xl bg-zinc-900">
      <div class="flex w-full pb-2">
        <!-- Account -->
        <div class="flex w-1/6 items-center justify-center">
          <router-link to="/account">
            <button class="flex w-full items-center justify-center">
              <img
                class="h-6"
                src="../../assets/icons/user-id.svg"
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
          <router-link to="/direct">
            <button class="flex w-full items-center justify-center">
              <img
                class="h-6"
                src="../../assets/icons/direct.svg"
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
            class="flex w-2/6 p-1 rounded-lg"
            :class="{ 'bg-zinc-800': isRouteActive('Docs') }" 
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
            class="flex w-2/6 p-1 rounded-lg"
            :class="{ 'bg-zinc-800': isRouteActive('MyGrows') || isRouteActive('Home') }"
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
            class="flex w-2/6 p-1 rounded-lg"
            :class="{ 'bg-zinc-800': isRouteActive('AllGrows') }" 
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
