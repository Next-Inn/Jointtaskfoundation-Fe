<template>

<div>
  <b-navbar class="navbar navbar-sticky-top " toggleable="lg" type="dark" variant="light">
    <ul class="navbar-nav ml-auto hidden-sm mr-3">
        <li class="nav-item d-mobile-no">
          <a class="nav-link" href="#">
            <i class="fa fa-bell"></i>
          </a>
        </li>
        <template v-if="!$auth.user">
          <nuxt-link to="/user/signup">Sign Up</nuxt-link>
          <nuxt-link to="/user/login">Log in</nuxt-link>
        </template>
        <template v-else>
          <nuxt-link to="/user/u_dashboard">Welcome {{ $auth.user.name }}</nuxt-link>
          <!-- <div class="nav-link mx-1" id="login-nav" @click.prevent="logout">Log out</div> -->
        </template>
      </ul>
      <div class="nav-item dropdown mr-5">
        <a
          class="nav-link dropdown-toggle color-cc"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img v-if="$auth.user.profile_pic" :src="$auth.user.profile_pic"/>
          <img v-else src="https://via.placeholder.com/50" />
        </a>
        <div class="dropdown-menu profile-drop" aria-labelledby="navbarDropdown">
          <nuxt-link class="dropdown-item profile-drop" to="/user/profile">profile</nuxt-link>

          <!-- <div class="dropdown-divider"></div> -->
          <!-- <p class="dropdown-item profile-drop" @click.prevent="logout">logout</p> -->
          <div class="dropdown-divider"></div>
          <nuxt-link class="dropdown-item profile-drop" to="/edit">edit</nuxt-link>
        </div>
      </div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


  </b-navbar>
</div>



</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout().then(() => this.$toast.success('Logged Out Successfully'))
    },
  }
}
</script>

<style scoped>
/* .navbar {
  border: 0;
  font-size: 1rem;
  border-radius: 0;
  min-height: 50px;
  max-height: 70px;
  background: #fff !important;
  padding-left: 24px;
  padding-right: 24px;
}

a {
  margin: 0 10px;
} */

</style>