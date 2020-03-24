<template>
  <div>
    <nav class="navbar navbar-expand shadow navbar-sticky-top">
      <div class="hidden-lg togle-btn" onclick="toggleSidebar()">
        <span>
          <i class="fa fa-bars"></i>
        </span>
      </div>
      <ul class="navbar-nav ml-auto hidden-sm">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa fa-bell"></i>
          </a>
        </li>
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
          <a class="dropdown-item profile-drop" href="/profile">profile</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item profile-drop" href="#" @click.prevent="logout">logout</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item profile-drop" href="/edit">edit</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navbar {
  border: 0;
  font-size: 1rem;
  border-radius: 0;
  min-height: 50px;
  max-height: 70px;
  background: #fff !important;
  padding-left: 24px;
  padding-right: 24px;
}
</style>>

</style>