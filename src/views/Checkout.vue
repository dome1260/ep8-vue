<template>
  <div class="checkout">
    <table style="width: 100%;" border="1">
      <tr>
        <th style="text-align: left;"> Image </th>
        <th style="text-align: left;"> Name </th>
        <th style="text-align: left;"> Price </th>
      </tr>
      <tr
        v-for="(item, i) in cart"
        :key="`table-item-${i}`">
        <td>
          <img
            :src="item.url"
            alt="image checkout"
            width="60"
            height="60">
        </td>
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.price }} Baht
        </td>
      </tr>
    </table>
    <div style="display: flex; justify-content: flex-end;">
      <div class="checkout__form">
        <form action="">
          <p style="margin: 8px 0px;">
            Name
          </p>
          <input v-model="form.name" type="text"> <br>
          <p style="margin: 8px 0px;">
            Address
          </p>
          <textarea v-model="form.address" cols="30" rows="10" style="resize: none;"></textarea>
        </form>
        <button
          style="margin-top: 16px;"
          @click="checkout()">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Checkout',
  data () {
    return {
      form: {
        name: '',
        address: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart/cart'
    })
  },
  methods: {
    ...mapActions({
      setUser: 'local/setUser'
    }),
    checkout () {
      this.setUser(this.form)
      this.$router.push({ name: 'Thankyou' })
    }
  }
}
</script>

<style scoped>
  .checkout {
    padding: 24px;
    min-height: 600px;
  }
  .checkout__form {
    margin-top: 16px;
    width: 300px;
    padding: 24px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>