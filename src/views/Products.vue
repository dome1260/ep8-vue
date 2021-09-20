<template>
  <div class="products">
    <div
      v-for="(item, i) in items"
      :key="`product-item-${i}`"
      class="products__card">
      <img
        :src="item.url"
        alt="image"
        width="250"
        height="300">
      <p style="text-align: center;">
        {{ item.name }}
      </p>
      <p style="text-align: center;">
        {{ item.price }} baht
      </p>
      <div style="text-align: center;">
        <button
          style="margin: 16px 0px;"
          @click="toDetail(item)">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Products',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.loadProducts()
  },
  methods: {
    async loadProducts () {
      try {
        const { data } = await axios.get('https://61094d2fd71b670017639843.mockapi.io/products')
        if (data) {
          this.items = data
        }
      } catch (error) {
        console.error(error)
      }
    },
    toDetail (item) {
      this.$router.push({ name: 'ProductDetail', params: { id: item.id } })
    }
  }
}
</script>

<style scoped>
  .products {
    padding: 24px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .products__card {
    width: 250px;
    border: 1px solid black;
    border-radius: 4px;
    margin: 0px 40px 32px 40px;
  }
</style>