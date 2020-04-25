<template>
  <div class="container">
    <div class="auth-section">
      <div class="row">
        <Notification v-if="errors" :message="errors" />
        <div class="col-md-3"></div>
        <div class="col-md-4 col-8 a_sinup" @submit.prevent="loginAdmin">
          <div class="card">
            <h3 class="text-center py-3 auth-title">Admin Log In</h3>
            <form>
              <div class="form-group">
                <label for="email">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  v-model="userInfo.email"
                />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  id="pwd"
                  v-model="userInfo.password"
                />
              </div>
              <button
                type="submit"
                class="btn btn-blue btn-block"
                style="display:flex; justify-content: center; align-items: center;"
              >
                Submit
                <ButtonLoader v-if="loading" :loading="loading" />
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-2 col-4 title">
          <div class="box">
            <h3 class="text-center py-3">Login</h3>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './../../components/notification/Notification'
import ButtonLoader from './../../components/notification/buttonLoader'

export default {
  components: { Banner, Notification, ButtonLoader },
  layout: 'auth',
  data() {
    return {
      userInfo: {},
      errors: '',
      loading: false
    }
  },
  methods: {
    async loginAdmin() {
      try {
        this.loading = true
        const { email, password } = this.userInfo
        await this.$auth.loginWith('local', {
          data: {
            password,
            email
          }
        })
        this.loading = false
        return this.$router.push('/dashboard')
      } catch (e) {
        this.errors = e.response
          ? e.response.data.errors
          : 'Network Error, Please check and try again';
        this.loading = false;
        return setTimeout(() => { this.errors = ''}, 5000);
      }
    }
  }
}
</script>

<style scoped>
.auth-section {
  margin: 100px 0;
}

.a_sinup .card {
  padding: 20px;
}

.auth-section .btn-blue {
  background: #fff;
  color: #000;
  border: 1px solid #000;
}

.auth-section .a_sinup {
  margin: 0;
  padding: 0;
}
.auth-section .title {
  margin: 0;
  padding: 0;
}

.auth-section .box {
  margin: 15px 0;
  background: url('./../../assets/img/bitcoin2.jpg') no-repeat;
  background-position: right;
  background-size: cover;
  color: var(--white);
  padding: 20px;
  height: 300px;
  border-radius: 4px;
}

.auth-title {
  display: none;
}

@media screen and (max-width: 992px) {
  /* .auth-section .box {
        display: none;
        } */

  .auth-title {
    display: block;
  }
}

.btn-blue:hover {
  background: var(--main-bg-color);
  color: #fff;
  border: 1px solid var(--main-bg-color);
}
</style>