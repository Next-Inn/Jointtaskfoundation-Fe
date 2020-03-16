<template>
  <div class="auth">
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    // send the data
    this.$store.dispatch('user/getUserNames')
  }
}
</script>

<style scoped>
.auth {
  background: url('../assets/img/abs.jpg');
  height: 100vh;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>