<template>
  <div id="app">
    <header>
      <my-navbar />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <my-footer />
    </footer>
  </div>
</template>

<script>
import MyNavbar from './components/Navbar.vue'
import MyFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    MyNavbar,
    MyFooter
  }
}
</script>

<style>
  body {
    margin: 0px;
  }
</style>