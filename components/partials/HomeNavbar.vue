<template>
  <div>
    <nav
      id="navBar"
      class="navbar navbar-expand-md navbar-dark fixed-top"
      :class="[scroller ? backgroundColored : backgroundTransparent ]"
    >
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" id="home">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link" id="about-nav">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/plan" class="nav-link" id="plan-nav">Marketing Plan</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link" id="contact-nav">Contact</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/user/login" class="nav-link" id="login-nav">Log in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/user/signup" class="nav-link" id="signUp-nav">Sign Up</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
    }
  },

  methods: {
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
}

.nav-colored {
  background: var(--main-bg-color) !important;
  color: #fff !important;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  transition: 2s;
}
</style>