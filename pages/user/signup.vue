<template>
  <div>
    <section id="signUp">
      <div class="container-fluid">
        <div class="row">
          <Notification v-if="errors" :message="errors" />
          <div class="col-md-12 col-xs-12 form-container">
            <ValidationObserver ref="form">
              <form action id="regForm shadow" @submit.prevent="onSubmit" role="form">
                <div class="nav">
                  <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>
                  <h3>Create Your Account</h3>
                </div>

                <div class="tab">
                  <div class="text-container">
                    <h3>Personal Information</h3>
                  </div>
                  <div class="row">
                    <div class="col-md-8">
                      <div class="form-group">
                        <keep-alive>
                          <ValidationProvider
                            v-if="currentTab === 1"
                            name="name"
                            rules="required|alpha_spaces"
                            :bails="false"
                            v-slot="{ errors, classes }"
                          >
                            <input
                              autocomplete="on"
                              type="text"
                              class="form-control"
                              :class="classes"
                              placeholder="Full Name e.g Ren Moores"
                              v-model="name"
                              onfocus="this.placeholder=''"
                              onblur="this.placeholder='Fullname'"
                            />
                            <i v-show="errors[0]" class="fa fa-warning"></i>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </keep-alive>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <keep-alive>
                          <ValidationProvider
                            v-if="currentTab === 1"
                            name="email"
                            rules="required|min:3|email|max:100|CheckEmail"
                            :bails="false"
                            v-slot="{ errors, classes }"
                          >
                            <input
                              type="email"
                              placeholder="Email"
                              class="form-control"
                              :class="classes"
                              v-model="email"
                              onfocus="this.placeholder=''"
                              onblur="this.placeholder='Email'"
                            />
                            <i v-show="errors[0]" class="fa fa-warning"></i>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </keep-alive>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <keep-alive>
                          <ValidationProvider
                            v-if="currentTab === 1"
                            name="phone"
                            rules="required|digits:11"
                            v-slot="{ errors, classes }"
                          >
                            <input
                              type="tel"
                              class="form-control"
                              :class="classes"
                              placeholder="Phone Number"
                              v-model="phone"
                              onfocus="this.placeholder=''"
                              onblur="this.placeholder='Number'"
                            />
                            <i v-show="errors[0]" class="fa fa-warning"></i>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </keep-alive>
                      </div>
                    </div>

                    <div class="col-md-8">
                      <div class="form-group">
                        <keep-alive>
                          <ValidationProvider
                            v-if="currentTab === 1"
                            name="address"
                            rules="required|min:12|max:100"
                            v-slot="{ errors, classes }"
                          >
                            <input
                              type="text"
                              placeholder="Full Address"
                              class="form-control"
                              :class="classes"
                              v-model="address"
                              onfocus="this.placeholder=''"
                              onblur="this.placeholder='Address'"
                            />
                            <i v-show="errors[0]" class="fa fa-warning"></i>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </keep-alive>
                      </div>
                    </div>
                  </div>

                  <!-- This is the user login details -->
                  <div class="text-container">
                    <h3>User Information</h3>
                  </div>

                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <keep-alive>
                          <ValidationProvider
                            v-if="currentTab === 1"
                            name="username"
                            rules="required|alpha_num|username"
                            v-slot="{ errors, classes }"
                            :bails="false"
                          >
                            <input
                              type="text"
                              placeholder="Username"
                              class="form-control"
                              :class="classes"
                              v-model="username"
                              onfocus="this.placeholder=''"
                              onblur="this.placeholder='Username Must Be Unique'"
                            />
                            <i v-show="errors[0]" class="fa fa-warning"></i>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </keep-alive>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <keep-alive>
                          <ValidationProvider
                            v-if="currentTab === 1"
                            name="password"
                            rules="required|min:8|checkPassword|confirmed:confirmation"
                            v-slot="{ errors, classes }"
                            :bails="false"
                          >
                            <input
                              type="password"
                              placeholder="Password"
                              class="form-control"
                              :class="classes"
                              v-model="password"
                              onfocus="this.placeholder=''"
                              onblur="this.placeholder='Password'"
                            />
                            <i v-show="errors[0]" class="fa fa-warning"></i>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </keep-alive>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <keep-alive>
                          <ValidationProvider
                            v-if="currentTab === 1"
                            name="confirmPassword"
                            vid="confirmation"
                            v-slot="{ errors, classes }"
                            :bails="false"
                          >
                            <input
                              type="password"
                              placeholder="Confirm password"
                              class="form-control"
                              :class="classes"
                              v-model="confirmPassword"
                              onfocus="this.placeholder=''"
                              onblur="this.placeholder='Confirm Password'"
                            />
                            <i v-show="errors[0]" class="fa fa-warning"></i>
                            <span>{{ errors[0] }}</span>
                          </ValidationProvider>
                        </keep-alive>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-container">
                  <h3>Sponsor Information</h3>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <keep-alive>
                        <ValidationProvider
                          v-if="currentTab === 1"
                          name="sponsorName"
                          rules="min:3|alpha_num|sponsor"
                          v-slot="{ errors, classes }"
                          :bails="false"
                        >
                          <input
                            type="text"
                            autocomplete="on"
                            placeholder="Sponsor Name"
                            class="form-control"
                            :class="classes"
                            v-model="sponsorName"
                            onfocus="this.placeholder=''"
                            onblur="this.placeholder='Sponsor Name'"
                          />
                          <i v-show="errors[0]" class="fa fa-warning"></i>
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                      </keep-alive>
                    </div>
                  </div>
                </div>

                <div style="overflow:auto; text-align: center;">
                  <div style="display:flex; justify-content: center;" class="my-3">
                    <button
                      class="btn btn-blue btn-block"
                      style="display:flex; justify-content: center; align-items: center;"
                      type="submit"
                      id="nextBtn"
                    >
                      Submit
                      <ButtonLoader v-if="loading" :loading="loading" />
                    </button>
                  </div>
                  <p>
                    Already have an account? Click
                    <nuxt-link to="/user/login">
                      <strong>Log in</strong>
                    </nuxt-link>instead
                  </p>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from './../../components/other/Banner'
import ButtonLoader from './../../components/notification/buttonLoader'
import Notification from './../../components/notification/Notification'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  validate
} from 'vee-validate'

export default {
  //  middleware: ['redirectIfAuthenticated'],
  components: {
    Banner,
    ValidationProvider,
    ValidationObserver,
    ButtonLoader,
    Notification
  },

  layout: 'auth',

  data() {
    return {
      currentTab: 1,
      loading: false,
      name: '',
      username: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      sponsorName: '',
      confirmPassword: '',
      checkUsernames: '',
      checkEmails: '',
      role: 'user',
      errors: '',
      users: '',
      loading: false
    }
  },

  created() {
    this.loading = true
    //change to created event handler
    this.$store.dispatch('user/getUserNamesAndEmails').then(() => {
      if (this.$store.getters['user/getAllUserNames']) {
        this.users = this.$store.getters['user/getAllUserNames']
        this.checkEmails = this.$store.getters['user/getAllEmails']
        return (this.checkUsernames = this.users.map(item => item.username))
      }
    })
  },

  mounted() {
    // custom rules for username validations
    extend('username', {
      message:
        'This {_field_} 😤 is Already Taken By Another User, Please Try Another!!!.',
      validate: value => {
        // ...
        if (this.checkUsernames.includes(value) === true) return false
        return true
      }
    })
    //give sponsors autocomplete uername support
    extend('sponsor', {
      message:
        'This {_field_} does Not Exist 😤, Please Check Spelling And Try Again!!',
      validate: value => {
        if (this.checkUsernames.includes(value) === false) return false
        return true
      }
    })
    // custom rules for Email validations
    extend('CheckEmail', {
      message:
        'This {_field_} is Already Taken By Another User 🧐, Please Try Another!!!.',
      validate: value => {
        // ...
        if (this.checkEmails.includes(value) === true) return false
        return true
      }
    })
    const x = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')
    // custom validation for password
    extend('checkPassword', {
      message:
        '{_field_} should contain at least one Uppercase letter, one lowercase letter, and at least one digit',
      validate: value => {
        if (!x.test(value)) {
          return false
        }
        return true
      }
    })

    this.loading = false
  },

  methods: {
    async onSubmit() {
      this.$refs.form.validate().then(async success => {
        // if vee-validate is not a success return to the form
        if (!success) return
        this.loading = true
        const referer = this.users.find(
          user => user.username === this.sponsorName
        )
        try {
          // gather user details
          const userPayload = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            address: this.address,
            role: this.role,
            phone: this.phone,
            refererId: this.sponsorName === '' ? null : referer.id
          }
          // return console.log(userPayload)
          // using nuxt auth system
          await this.$axios.post('/auth/signup', userPayload)
          this.loading = false
          this.name = this.username = this.email = this.phone = this.address = this.password = this.confirmPassword = this.sponsorName =
            ''
          // router to user dashoard
          this.$router.push('/verify/verifyUser')

          // wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.form.reset()
          })
        } catch (e) {
          this.errors = e.response
            ? e.response.data.error
            : 'Network Error, Please check Your Network and Try again!!'
        }
      })
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

.nav h3 {
  color: #1655b8;
}

span {
  color: red;
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
}

.form-container {
  margin: auto;
}

.form-container form {
  background: var(--white);
  padding: 30px;
}

.form-container form a {
  color: #1655b8;
  text-decoration: none;
}

.form-container form a:hover {
  color: var(--main-bg-color);
}

.form-container h3 i {
  color: var(--main-bg-color);
}

.text-container {
  background: #1655b8;
  color: #fff;
  padding: 6px;
  margin: 20px 0;
}

.text-container h3 {
  font-size: 16px;
  font-weight: 900;
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
