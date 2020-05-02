<template>
  <div>
    <b-navbar
      id="navBar" toggleable="lg"
      class="navbar navbar-expand-md navbar-dark fixed-top"
      :class="[scroller ? backgroundColored : backgroundTransparent, isHome ? '' : 'nav-bg-color' ]"
    >
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse class="collapse navbar-collapse"  id="nav-collapse" is-nav>
          <ul class="navbar-nav">
            <!-- <li class="nav-item">
              <nuxt-link to="/" class="nav-link" id="home">Home</nuxt-link>
            </li> -->
            <li class="nav-item m-l-auto">
              <nuxt-link to="/#about" class="nav-link" id="about-nav">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/#plan" class="nav-link" id="plan-nav">Marketing Plan</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/#how-benefit" class="nav-link" id="plan-nav">Benefit</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link" id="contact-nav">Contact</nuxt-link>
            </li>
            <template v-if="!$auth.user">

            <li class="nav-item">
              <nuxt-link to="/user/signup" class="nav-link" id="signUp-nav">Sign Up</nuxt-link>
            </li>
              <li class="nav-item">
                <nuxt-link to="/user/login" class="nav-link" id="login-nav">Log in</nuxt-link>
              </li>
            </template>
            <template v-else class="ml-auto">
              <li class="nav-item">
                <nuxt-link to="/user/u_dashboard" class="nav-link" id="login-nav"> Welcome {{ $auth.user.name }} </nuxt-link>
              </li>
              <li class="nav-item">
                <div class="nav-link" id="login-nav" @click.prevent="logout">Log out</div>
              </li>
            </template>

          </ul>
        </b-collapse>
      </div>
    </b-navbar>
    <!-- end of nav -->
  </div>
</template>

<script>
export default {
  name: 'HomeNavbar',
  data() {
    return {
      isScrolling: false,
      backgroundTransparent: ['nav-transparent'],
      backgroundColored: ['nav-colored']
    }
  },

  mounted() {
    document.addEventListener('scroll', this.scrollFunction)
  },

  computed: {
    scroller() {
      return this.isScrolling
    },
    user() {
      return this.$store.getters.loggedInUser
    },
     isHome() {
        return this.$route.path == '/';
      }
  },
  methods: {
   async logout() {
    await this.$auth.logout().then(() => this.$toast.success('Logged Out Successfully'))
  },
    scrollFunction() {
      if (
        document.body.scrollTop < 0 ||
        document.documentElement.scrollTop > 5
      ) {
        return (this.isScrolling = true)
      } else {
        return (this.isScrolling = false)
      }
    }
  }
}
</script>

<style scoped>
/* navigation */

.navbar {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}

.navbar-brand {
  font-size: 2rem;
}
.nav-bg-color  {
background-color:#197a89;
}
.navbar-nav li {
  padding-right: 0.7rem;

}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  padding-top: 0.8rem;
  font-size: 16px;
}

.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link:hover {
  color: #5ef4da;
}

.nav-transparent {
  /* background: rgba(0, 0, 0, 0.18) !important; */
  transition: 2s;
  border-bottom: 2px solid;

}

.nav-colored {
  background: var(--main-bg-color) !important;
  color: #fff !important;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  transition: 2s;
  border-bottom: 2px solid;
}
@media(min-width:1200px){
  .navbar-nav li {
  padding-right: 0.7rem;
      position: relative;
    /* left: 10rem; */
  }
  .m-l-auto {
    margin-left:auto;}
}
</style>