<template>
  <div class="product-detail">
    <div style="display: flex;">
      <div>
        <img 
          :src="product.url"
          alt="product image"
          width="350"
          height="400">
      </div>
      <div style="margin-left: 100px;">
        <h1>
          {{ product.name }}
        </h1>
        <h1>
          {{ product.price }} Baht
        </h1>
        <div>
          <button @click="buy()">
            Buy
          </button>
        </div>
      </div>
    </div>
    <div class="product-detail__description">
      {{ product.detail }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'ProductDetail',
  data () {
    return {
      product: {}
    }
  },
  mounted () {
    this.loadDetail()
  },
  methods: {
    ...mapActions({
      addCart: 'cart/addCart'
    }),
    async loadDetail () {
      try {
        const { data } = await axios.get(`https://61094d2fd71b670017639843.mockapi.io/products/${this.$route.params.id}`)
        if (data) {
          this.product = data
        }
      } catch (error) {
        console.error(error)
      }
    },
    buy () {
      this.addCart(this.product)
      this.$router.push({ name: 'Checkout' })
    }
  }
}
</script>

<style scoped>
  .product-detail {
    padding: 24px;
  }
  .product-detail__description {
    min-height: 200px;
    padding: 24px;
    margin-top: 24px;
    border: 1px solid black;
    border-radius: 14px;
  }
</style>