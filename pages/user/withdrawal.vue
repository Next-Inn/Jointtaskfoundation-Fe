<template>
  <div>
    <section class="report-section">
      <section class="main">
        <DashboardNav />
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8 card">
                <h2 class="text-center font-bold-blue">Withdraw Fund</h2>

                <ValidationObserver ref="form" role="form">
                  <form @submit.prevent="makeWithdrawal()">
                    <div class="form-group">
                      <ValidationProvider
                        name="Amount"
                        rules="min:3|required|alpha_num"
                        :bails="false"
                        v-slot="{ errors, classes }"
                      >
                        <label for="Title">Withdraw Amount</label>
                        <input
                          type="number"
                          :class="classes"
                          v-model="userDetails.amount"
                          class="form-control"
                          id="reportTitle"
                          aria-describedby="Widthdraw"
                          placeholder="Enter Your Amount"
                        />
                        <i v-show="errors[0]" class="fa fa-warning"></i>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="form-group">
                      <ValidationProvider
                        name="email"
                        rules="required|min:3|email|max:100"
                        :bails="false"
                        v-slot="{ errors, classes }"
                      >
                        <label for="Title">Email</label>
                        <input
                          type="email"
                          name="email"
                          :class="classes"
                          v-model="userDetails.email"
                          class="form-control"
                          id="reportTitle"
                          aria-describedby="Widthdraw"
                          placeholder="Enter Your Email"
                        />
                        <i v-show="errors[0]" class="fa fa-warning"></i>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="form-group">
                      <ValidationProvider
                        name="bank"
                        rules="required|alpha_spaces|bankInNigeria"
                        v-slot="{ errors, classes }"
                        :bails="false"
                      >
                        <label for="Title">Bank</label>
                        <input
                          type="text"
                          v-model="userDetails.bank"
                          class="form-control"
                          :class="classes"
                          aria-describedby="Widthdraw"
                          placeholder="Enter Your Bank"
                        />
                        <i v-show="errors[0]" class="fa fa-warning"></i>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="form-group">
                      <ValidationProvider
                        name="accountName"
                        rules="required|alpha_spaces"
                        v-slot="{ errors, classes }"
                        :bails="false"
                      >
                        <label for="Title">Account Name</label>
                        <input
                          type="text"
                          name="name"
                          :class="classes"
                          v-model="userDetails.bankName"
                          class="form-control"
                          aria-describedby="Widthdraw"
                          placeholder="Enter Your Account Name"
                        />
                        <i v-show="errors[0]" class="fa fa-warning"></i>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="form-group">
                      <ValidationProvider
                        name="Account Number"
                        rules="required|digits:10"
                        v-slot="{ errors, classes }"
                      >
                        <label for="account-name">Account Number</label>
                        <input
                          type="text"
                          :class="classes"
                          class="form-control"
                          v-model="userDetails.bankNumnber"
                          aria-describedby="Widthdraw"
                          placeholder="Enter Your Account Number"
                        />
                        <i v-show="errors[0]" class="fa fa-warning"></i>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <button
                      class="btn btn-blue btn-block bold pull-right"
                      style="display:flex; justify-content: center; align-items: center;"
                      type="submit"
                      id="nextBtn"
                    >
                      Widthdraw
                      <ButtonLoader v-if="loading" :loading="loading" />
                    </button>
                  </form>
                </ValidationObserver>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>
      <footer class="main-footer">
        <strong>
          Copyright &copy; 2020
          <a href="#">HackTeam</a>.
        </strong>
        All rights reserved.
        <div class="pull-right d-none d-sm-inline-block">
          <b>Version</b> 3.0.2
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import DashboardNav from './../../components/partials/DashboardNavbar'
import ButtonLoader from './../../components/notification/buttonLoader'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  validate
} from 'vee-validate'

export default {
  layout: 'Udashboard',
  components: {
    DashboardNav,
    ButtonLoader,
    ValidationProvider,
    ValidationObserver
  },

  data() {
    return {
      userDetails: {},
      loading: false,
      errors: '',
      banks: null
    }
  },

  created() {
    this.$axios.get('https://api.paystack.co/bank').then(data => {
      return (this.banks = data.data.data.map(item => item.name))
    })
  },

  mounted() {
    extend('bankInNigeria', {
      message: 'This {_field_} 😤 is not a bank in Nigeria',
      validate: value => {
        if (this.banks.includes(value) === true) return true
        return false
      }
    })
  },

  methods: {
    async makeWithdrawal() {
      this.$refs.form.validate().then(async success => {
        if (!success) return
        try {
          this.loading = true

          const payload = {
            bank: this.userDetails.bank,
            accountName: this.userDetails.bankName,
            accountNumber: this.userDetails.bankNumnber,
            email: this.userDetails.email,
            amount: this.userDetails.amount
          }

          const res = await this.$axios.post('/request-withdrawal', payload)
          this.loading = false
          if (res.status === 200)
            await this.$toast.success(res.data.data, 'Success')
            this.$nextTick(() => {
            this.userDetails = {}
          })
           return this.$router.push('/user/u_dashboard');
        } catch (e) {
          this.errors = e.response
            ? e.response.data.error
            : 'Network Error, Please check Your Network and Try again!!'
          await this.$toast.error(this.errors, 'Error')
          this.loading = false
          return setTimeout(() => {
            this.errors = ''
          }, 5000)
        }
      })
    }
  }
}
</script>

<style scoped>
span {
  color: red;
  font-size: 12px;
  font-style: italic;
  margin-top: 5px;
}


.card {
  padding: 20px;
}
</style>