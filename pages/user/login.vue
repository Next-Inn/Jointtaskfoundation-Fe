<template>
  <div>
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12 form-container">
            <form action>
              <div class="nav mb-4">
                <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>
                <h3>Sign In</h3>
              </div>

              <div class="form-group">
                <input type="email" placeholder="Email" class="form-control" />
              </div>
              <div class="form-group">
                <input type="password" placeholder="password" class="form-control" />
              </div>
              <p>
                Don't have an account? Click
                <a to="/user/signup">
                  <strong>Sign up</strong>
                </a> to create one
              </p>
              <button class="btn btn-blue btn-block">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Banner from './../../components/other/Banner'
export default {
  components: { Banner },
  layout: 'auth'
}
</script>

<style scoped>
.navbar-brand {
  font-weight: 600;
  font-size: 29px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav h3 {
  color: #1655b8;
}

.form-container {
  margin: auto;
}

.form-container form {
  background: var(--white);
  padding: 30px;
  min-width: 550px;
  width: 400px;
}

.form-container form a {
  color: #1655b8;
  text-decoration: none;
}

.form-container form a:hover {
  color: var(--main-bg-color);
}

.form-container h3 i {
  color: #1655b8;
}

.btn-blue {
  border-color: #1655b8;
  color: #1655b8;
}

.btn-blue:hover {
  background-color: #1655b8 !important;
  color: white;
}
</style>