<template>

<div>
  <b-navbar class="navbar navbar-sticky-top " toggleable="lg" type="dark" variant="light">
    <ul class="navbar-nav ml-auto hidden-sm">
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
          <nuxt-link to="#" @click.prevent="logout" variant="danger" class="d-mobile-no">Logout</nuxt-link>
        </template>
      </ul>
      <div class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle color-cc"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src="https://via.placeholder.com/50" />
        </a>
        <div class="dropdown-menu profile-drop" aria-labelledby="navbarDropdown">
          <nuxt-link class="dropdown-item profile-drop" to="/user/profile">profile</nuxt-link>

          <div class="dropdown-divider"></div>
          <p class="dropdown-item profile-drop" @click.prevent="logout()">logout</p>
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
    async logout(res) {
      await this.$auth.logout()
      return res.redirect('/')
    }
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