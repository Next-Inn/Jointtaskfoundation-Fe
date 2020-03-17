<template>
  <div class="card" shadow style="width: 80%">
    <div class="card-body text-center">
      <nuxt-link to="/" class="navbar-brand mt-3">JTF</nuxt-link>
      <h2 class="card-title mt-2 mb-3">Thank You For Registering For Joint Task Foundation 🤓</h2>
      <h6 class="card-subtitle mb-5 text-muted">From admin@jointtaskfoundation.com</h6>
      <p class="card-text mb-5">
        Please Your Verification Mail Has Been Sent, Please Check Your Email
        <br />Click On The Link and You Will Be Redirected To Login To Your Account.
      </p>
      <p class="mb-5">Thank You Once More 🤗....</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'verify'
}
</script>

<style scoped>
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