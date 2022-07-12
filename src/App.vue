<template>
  <div id="app">
      <div class="flex justify-between">
        <Navbar />
        <Searchbar />
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Header/Navbar.vue"
import Searchbar from "./components/Header/Searchbar.vue"

export default {
  name: 'app',
    components:{
    Navbar,
    Searchbar,
  }
}
</script>

<style>

</style>
