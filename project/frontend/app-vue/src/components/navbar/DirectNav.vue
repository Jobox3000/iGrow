<template>
  <div>
    <!-- Navbar -->
    <nav class="top-0 top-0 flex flex-col w-full p-2 pb-0 px-0 items-center justify-center rounded-xl bg-zinc-800">
      <div class="flex w-full pb-2">
        <!-- Return -->
        <div class="flex w-1/6 items-center justify-center">
          <router-link to="/home">
            <button class="flex w-full items-center justify-center">
              <img
                class="h-6"
                src="../../assets/icons/backspace.svg"
              >
            </button>
          </router-link>
        </div>
        <!-- Account -->
        <div class="w-5/6">
          <h1 class="p-2">
            Direct
          </h1>
        </div>
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


