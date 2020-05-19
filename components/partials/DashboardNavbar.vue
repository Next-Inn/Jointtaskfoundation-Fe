<template>

<div>
  <b-navbar class="navbar navbar-sticky-top fixed-top" toggleable="lg" type="dark" variant="light">
    <a href="/" class="navbar-brand">JTF</a>
    <ul class="navbar-nav ml-auto  mr-3">
        <li class="nav-item hidden-sm">
          <a class="nav-link" href="#">
            <i class="fa fa-bell"></i>
          </a>
        </li>
        
          <template v-if="!$auth.user" >
            <li class="nav-item">
              <nuxt-link to="/user/signup" class="nav-link">Sign Up</nuxt-link>
            </li>
            <li class="nav-item ">
              <nuxt-link to="/user/login" class="nav-link">Log in</nuxt-link>
            </li>
          </template>
          <template v-else >
            <li class="nav-item">
              <nuxt-link to="/user/u_dashboard" class=" nav-link ">Welcome {{ $auth.user.name }}</nuxt-link>
            </li><!-- <div class="nav-link mx-1" id="login-nav" @click.prevent="logout">Log out</div> -->
          </template>
      </ul>
      <div class="nav-item dropdown hidden-sm mr-5">
        <a
          class="nav-link dropdown-toggle color-cc"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img v-if="$auth.user.profile_pic" :src="$auth.user.profile_pic"  class="radius-50"/>
          <img v-else src="https://via.placeholder.com/50"  class="radius-50"/>
        </a>
        <div class="dropdown-menu profile-drop" aria-labelledby="navbarDropdown">
          <nuxt-link class="dropdown-item profile-drop" to="/user/profile">profile</nuxt-link>

          <!-- <div class="dropdown-divider"></div> -->
          <!-- <p class="dropdown-item profile-drop" @click.prevent="logout">logout</p> -->
          <div class="dropdown-divider"></div>
          <nuxt-link class="dropdown-item profile-drop" to="/user/editProfile">edit</nuxt-link>
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
 .navbar-dark .navbar-toggler{
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
    position: relative;
    background: #000;
    right: 0;
    /* margin-left: auto; */
}
.nav-item i{
  color:#22395d;
}

.navbar-dark .navbar-nav .nav-link{
    color: #22395d;
    font-weight: 900;
}
 .radius-50{
   border-radius:50px;
       width: 50px;
    height: 50px;
    object-fit: cover;
 }
.navbar-brand{
  color: #000;
    left: 34px;
    position: relative;
    font-weight: 900;
    font-size: 34px;
}
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
@media(max-width:1000px){
  .hidden-sm{
    display:none;
  }
  .navbar-brand{
    left:0;
  }
}
</style>