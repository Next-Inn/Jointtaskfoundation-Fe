<template>
  <div>
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12 form-container">
            <!-- <Notification v-if="errors" :message="errors" /> -->
            <form @submit.prevent="onSubmit" role="form">
              <div class="nav mb-2">
                <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>
                <h3>Sign Up</h3>
              </div>
              <div class="form-group">
                <label>Username or Email</label>
                <input
                  type="text"
                  placeholder
                  class="form-control"
                  v-model="usernameEmail"
                  name="usernameEmail"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Enter your username or email'"
                />
                <span class="alert" v-if="errors.usernameEmail">{{ errors.usernameEmail }}*</span>
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  name="password"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder='Type your password'"
                />
                <span class="alert" v-if="errors.password">{{ errors.password }}*</span>
              </div>

              <button
                class="btn btn-blue btn-block"
                style="display:flex; justify-content: center; align-items: center;"
                type="submit"
                id="nextBtn"
              >
                Submit
                <ButtonLoader v-if="loading" :loading="loading" />
              </button>
              <div class="text-center mt-4">
                <p>
                  Don't have an account? Click
                  <nuxt-link to="/user/signup">
                    <strong>Sign up</strong>
                  </nuxt-link> to create one
                </p>
                <p>
                  Forgot Password, Please
                  <nuxt-link to="/user/forgotPassword">Click here</nuxt-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from './../../components/other/Banner'
// import Notification from './../../components/notification/Notification'
import ButtonLoader from './../../components/notification/buttonLoader'
export default {
  components: { Banner, ButtonLoader },
  layout: 'auth',
  data() {
    return {
      usernameEmail: '',
      password: '',
      errors: '',
      loading: false
    }
  },
  middleware: ['redirectIfAuthenticated'],
  methods: {
    async onSubmit() {
      this.loading = true
      const data = {
        password: this.password
      }
      if (!this.checkEmail(this.usernameEmail)) {
        data.email = this.usernameEmail
      } else {
        data.username = this.usernameEmail
      }

      try {
        await this.$auth.loginWith('local', { data })
        await this.$toast.success('Successfully Logged In', 'Success');
        this.loading = false
      } catch (e) {
        this.errors = e.response
          ? e.response.data.error
          : 'Network Error, Please check Your Network and Try again!!';
        await this.$toast.error(this.errors, 'Error');
        this.loading = false;
        return setTimeout(() => { this.errors = ''}, 5000);
      }
      if (!this.errors) {
        this.$router.push('/user/u_dashboard')
      }
    },
    checkEmail(email) {
      email = email.toLowerCase()
      if (!/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email))
        return 'email is not valid'
    }
  }
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

.alert {
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  color: #b71625;
  padding: 0px !important;
}

.nav h3 {
  color: #22395d;
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
  color: #22395d;
  text-decoration: none;
}

.form-container form a:hover {
  color: var(--main-bg-color);
}

.form-container h3 i {
  color: #22395d;
}

.btn-blue {
  border-color: #22395d;
  color: #22395d;
}

.btn-blue:hover {
  background-color: #22395d !important;
  color: white;
}
@media  (max-width:1200px){
  .form-container form {
  background: var(--white);
  padding: 30px;
  min-width: 100%;
  width: 100%;
}
}
</style>
