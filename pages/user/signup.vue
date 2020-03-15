<template>
  <div>
    <!-- <Banner>
      <h1 slot="header">Sign Up</h1>
    </Banner>-->
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-xs-12 form-container">
            <form action id="regForm shadow">
              <div class="nav">
                <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>
                <h3>Create Your Account</h3>
              </div>

              <div class="tab">
                <div class="text-container">
                  <h3>Personal Information</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" placeholder="First Name" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" placeholder="Last Name" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="Email" placeholder="Email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="tel" placeholder="Mobile Number" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>User Information</h3>
                </div>
                <div class="form-group">
                  <input type="text" placeholder="Username" class="form-control" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" placeholder="Password" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" placeholder="Confirm password" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab">
                <div class="text-container">
                  <h3>Sponsor Information</h3>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Sponsor ID" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Package and Payment Information</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <select class="form-control" id="selPackage">
                        <option>Joining package</option>
                        <option>adjoining</option>
                        <option>me</option>
                        <option>thwem</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <select class="form-control" id="selPayMode">
                        <option>E-Wallet</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <input type="password" placeholder="password" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input type="text" placeholder="E-Wallet ID" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <input type="password" placeholder="E-Wallet Password" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab">
                <div class="text-container">
                  <h3>Security Question & Answer</h3>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <select class="form-control" id="securityQuestion">
                        <option>What is the name of your first School?</option>
                        <option>What is your mother's maiden name?</option>
                        <option>Whats your secret?</option>
                        <option>What's your first pet's name</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Your Answer"
                        class="form-control"
                        id="secretAnswer"
                      />
                    </div>
                  </div>
                </div>
                <button class="btn btn-blue btn-block">Log In</button>
              </div>
              <div style="overflow:auto;">
                <div style="display:flex;" class="my-3">
                  <button
                    class="btn btn-danger"
                    type="button"
                    id="prevBtn"
                    @click.prevent="nextPrev(-1)"
                  >Previous</button>
                  <button
                    class="btn btn-blue btn-block"
                    type="button"
                    id="nextBtn"
                    @click.prevent="nextPrev(1)"
                  >Next</button>
                </div>
                <p>
                  Already have an account? Click
                  <a to="/user/login">
                    <strong>Log in</strong>
                  </a> instead
                </p>
              </div>

              <!-- Circles which indicates the steps of the form: -->
              <div style="text-align:center;margin-top:40px;">
                <span class="step"></span>
                <span class="step"></span>
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
export default {
  components: { Banner },

  layout: 'auth',

  data() {
    return {
      currentTab: 0
    }
  },

  mounted() {
    return this.showTab(this.currentTab)
  },

  methods: {
    showTab(n) {
      // This function will display the specified tab of the form ...
      const x = document.getElementsByClassName('tab')
      x[n].style.display = 'block'
      // ... and fix the Previous/Next buttons:
      if (n === 0) {
        document.getElementById('prevBtn').style.display = 'none'
      } else {
        document.getElementById('prevBtn').style.display = 'inline'
      }
      if (n == x.length - 1) {
        document.getElementById('nextBtn').innerHTML = 'Submit'
      } else {
        document.getElementById('nextBtn').innerHTML = 'Next'
      }
      // ... and run a function that displays the correct step indicator:
      return this.fixStepIndicator(n)
    },

    nextPrev(n) {
      // This function will figure out which tab to display
      var x = document.getElementsByClassName('tab')
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !this.validateForm()) return false
      // Hide the current tab:
      x[this.currentTab].style.display = 'none'
      // Increase or decrease the current tab by 1:
      this.currentTab += n
      // if you have reached the end of the form... :
      if (this.currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById('regForm').submit()
        return false
      }
      // Otherwise, display the correct tab:
      return this.showTab(this.currentTab)
    },

    validateForm() {
      // This function deals with validation of the form fields
      var x,
        y,
        i,
        valid = true
      x = document.getElementsByClassName('tab')
      y = x[this.currentTab].getElementsByTagName('input')
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == '') {
          // add an "invalid" class to the field:
          y[i].className += ' invalid'
          // and set the current valid status to false:
          valid = false
        }
      }
      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
        document.getElementsByClassName('step')[this.currentTab].className +=
          ' finish'
      }
      return valid // return the valid status
    },

    fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i,
        x = document.getElementsByClassName('step')
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(' active', '')
      }
      //... and adds the "active" class to the current step:
      x[n].className += ' active'
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

/* Hide all steps by default: */
.tab {
  display: none;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: rgb(172, 167, 167);
  border: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

/* Mark the active step: */
.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #23395d;
}

.authPage {
  background: linear-gradient(45deg, #000000c7, #00000094),
    url('../../assets/img/auth.jpg') no-repeat;
  background-size: cover;
  background-position: center;
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