<template>
  <div class="navbar">
    <div>
      LOGO
    </div>
    <div style="display: flex;">
      <div
        v-for="(item, i) in items"
        :key="`navbar-menu-${i}`"
        style="margin-right: 24px; cursor: pointer;"
        @click="toPage(item)">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      items: [
        'Home',
        'Products',
        'Checkout'
      ]
    }
  },
  methods: {
    toPage (value) {
      if (this.$route.name !== value) {
        this.$router.push({ name: value })
      }
    }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 24px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
  }
</style>