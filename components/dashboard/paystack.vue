<template>
  <paystack
    :amount="amount"
    :email="email"
    :paystackkey="paystackkey"
    :reference="reference"
    :callback="callback"
    :close="close"
    :embed="false"
  >
    <i class="fas fa-money-bill-alt"></i>
    Make Payment
  </paystack>
</template>

<script type="text/javascript">
import paystack from 'vue-paystack'
export default {
  components: {
    paystack
  },
  data() {
    return {
      paystackkey: 'sk_test_da72a239437fefd84eba864d84ed23295cca5054', //paystack public key
      email: 'foobar@example.com', // Customer email
      amount: 1000000 // in kobo
    }
  },
  computed: {
    reference() {
      let text = ''
      let possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return text
    }
  },
  methods: {
    callback: function(response) {
      console.log(response)
    },
    close: function() {
      console.log('Payment closed')
    }
  }
}
</script>

<style>
.App {
  text-align: center;
}
.App-intro {
  font-size: large;
}
.payButton {
  color: #61dafb;
  width: 250px;
  height: 50px;
  font-weight: 800;
}
</style>
