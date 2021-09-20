<template>
  <div class="thankyou">
    <pre>
      {{ cart }}
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Thankyou',
  computed: {
    ...mapGetters({
      cart: 'cart/cart',
      user: 'local/user'
    })
  }
}
</script>

<style scoped>
  .thankyou {
    padding: 24px;
  }
</style>