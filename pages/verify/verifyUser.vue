<template>
  <div class="card" shadow style="width: 80%">
    <div class="card-body text-center">
      <!-- <Notification v-if="errors" :message="errors" /> -->
      <!-- <Notification v-if="successMessage" :message="successMessage" /> -->
      <nuxt-link to="/" class="navbar-brand mt-3">JTF</nuxt-link>
      <h2 class="card-title mt-2 mb-3">Thank You For Registering For Joint Task Foundation 🤓</h2>
      <h6 class="card-subtitle mb-5 text-muted">From admin@jointtaskfoundation.com</h6>
      <p class="card-text mb-5">
        Please Your Verification Mail Has Been Sent, Please Check Your Email
        <br />Click On The Link and You Will Be Redirected To Login To Your Account.
        <br />If You didn't get the mail, please click
        <span
          class="resend"
          @click:prevent="getNewToken()"
        >Resend</span>
      </p>
      <p class="mb-5">Thank You Once More 🤗....</p>
    </div>
  </div>
</template>

<script>
import Notification from './../../components/notification/successNotification'

export default {
  components: {
    Notification
  },
  data() {
    return {
      email: '',
      errors: '',
      loading: false,
      successMessage: ''
    }
  },

  mounted() {
    return (this.email = this.$store.getters['user/getSingleEmail'])
  },

  methods: {
    async getNewToken() {
      try {
        this.loading = true
        const body = {
          email: this.email
        }
        await this.$axios
          .post('/auth/refresh-email-token', body)
          .then(value => {
            this.successMessage = 'Please Check Your Email and verify Email'
          })
      } catch (e) {
        this.errors = e.response
          ? e.response.data.error
          : 'Please check your network and resend'
      }
    }
  }
}
</script>

<script>
export default {
  layout: 'verify'
}
</script>

<style scoped>
.resend {
  color: #1655b8;
  text-decoration: #1655b8;
  font-weight: 400;
  cursor: pointer;
}
.navbar-brand {
  font-weight: 600;
  font-size: 29px;
}

.card-title {
  color: #1655b8 !important;
}
.card p {
  font-style: italic;
  color: black;
}
</style>