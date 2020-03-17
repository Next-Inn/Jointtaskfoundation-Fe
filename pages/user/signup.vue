<template>
  <div>
    <!-- <Banner>
      <h1 slot="header">Sign Up</h1>
    </Banner>-->
    <section id="signUp">
      <div class="container-fluid">
        <div class="row">
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
                            v-slot="{errors, classes}"
                          >
                            <input
                              autocomplete="on"
                              type="text"
                              class="form-control"
                              :class="classes"
                              placeholder="Full Name"
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
                            v-slot="{errors, classes}"
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
                            v-slot="{errors, classes}"
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
                            v-slot="{errors, classes}"
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
                            v-slot="{errors, classes }"
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
                            rules="required|confirmed:confirmation|min:6"
                            v-slot="{errors, classes}"
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
                            v-slot="{errors, classes}"
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
                          rules="required|min:3|alpha_num|max:10"
                          v-slot="{errors, classes}"
                          :bails="false"
                        >
                          <input
                            type="text"
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
                    <button class="btn btn-blue btn-block" type="submit" id="nextBtn">Submit</button>
                  </div>
                  <p>
                    Already have an account? Click
                    <a to="/user/login">
                      <strong>Log in</strong>
                    </a> instead
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
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  validate
} from 'vee-validate'

export default {
  components: { Banner, ValidationProvider, ValidationObserver },

  layout: 'auth',

  data() {
    return {
      currentTab: 1,
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
      isExist: false
    }
  },

  created() {
    //change to created event handler
    this.$store.dispatch('user/getUserNamesAndEmails').then(() => {
      if (this.$store.getters['user/getAllUserNames']) {
        //wait for user request action to complete before evaluating getters

        this.checkUsernames = this.$store.getters['user/getAllUserNames']
        return (this.checkEmails = this.$store.getters['user/getAllEmails'])
      }
    })
  },

  mounted() {
    // custom rules for username validations
    extend('username', {
      message:
        'This {_field_} is Already Taken By Another User, Please Try Another!!!.',
      validate: value => {
        // ...
        if (this.checkUsernames.includes(value) === true) return false
        return true
      }
    })

    // custom rules for Email validations
    extend('CheckEmail', {
      message:
        'This {_field_} is Already Taken By Another User, Please Try Another!!!.',
      validate: value => {
        // ...
        if (this.checkEmails.includes(value) === true) return false
        return true
      }
    })
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) return

        alert('Form is Fully Validated')

        this.name = this.username = this.email = this.phone = this.address = this.password = this.confirmPassword = this.sponsorName =
          ''
        // wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset()
        })
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
  font-size: 10px;
  font-style: italic;
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