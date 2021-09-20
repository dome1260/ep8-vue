<template>
  <div class="home">
    <img
      src="https://via.placeholder.com/500x300/C4C4C4/FFFFFF?text=Banner"
      alt="banner"
      class="home__banner">
    <div class="home__section-1">
      <h1>
        Hot Products
      </h1>
      <div class="home__section-1__list">
        <img
          v-for="i in 3"
          :key="i"
          src="https://via.placeholder.com/250x300/C4C4C4/FFFFFF?text=Hot Product"
          alt="hot product">
      </div>
    </div>
    <div class="home__section-2">
      <h1>
        Best Seller
      </h1>
      <div class="home__section-2__list">
        <img
          v-for="i in 3"
          :key="i"
          src="https://via.placeholder.com/250x300/C4C4C4/FFFFFF?text=Best Seller"
          alt="best seller">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
  .home {

  }
  .home__banner {
    width: 100%;
    height: 450px;
  }
  .home__section-1 {
    padding: 24px;
    text-align: center;
  }
  .home__section-1__list {
    display: flex;
    justify-content: space-around;
  }
  .home__section-2 {
    padding: 24px;
    text-align: center;
  }
  .home__section-2__list {
    display: flex;
    justify-content: space-around;
  }
</style>