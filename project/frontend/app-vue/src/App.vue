<template>
  <div class="p-2">
    <NavBar />
    <router-view class="bg-emerald-100 rounded-3xl" />
    <AppBar />
  </div>
</template>

<script>
import NavBar from './layouts/NavBar.vue'
import AppBar from './layouts/AppBar.vue'

export default {
  components: {
    NavBar,
    AppBar,
  }
}
</script>