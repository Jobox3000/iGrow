<template>
  <nav class="absolute bottom-0 left-0 flex w-full p-2 border-t">
    <!-- Login Button -->
    <div class="w-1/2 flex items-center justify-center">
      <router-link to="/auth/login">
        <button 
          :class="{ 'bg-gray-300': isRouteActive('Login') }" 
          class="p-2 px-5 rounded-3xl"
        >
          <h1>
            Login
          </h1>
        </button>
      </router-link>
    </div>
    <!-- Register Button -->
    <div class="w-1/2 flex items-center justify-center">
      <router-link to="/auth/register">
        <button
          :class="{ 'bg-gray-300': isRouteActive('Register') }" 
          class="p-2 px-5 rounded-3xl"
        >
          <h1>
            Register
          </h1>
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