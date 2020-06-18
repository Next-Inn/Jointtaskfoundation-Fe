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
                <h2 class="text-center font-bold-blue">Lay all your complaints to us here</h2>
                <ValidationObserver ref="form" role="form">
                  <form @submit.prevent="makeReport()">
                    <div class="form-group">
                      <ValidationProvider
                        name="title"
                        rules="min:3|required|alpha_spaces"
                        :bails="false"
                        v-slot="{ errors, classes }"
                      >
                        <label for="Title">Title</label>
                        <input
                          type="text"
                          class="form-control"
                          id="reportTitle"
                          :class="classes"
                          name="title"
                          v-model="title"
                          aria-describedby="Report"
                          placeholder="Enter Your Title"
                        />
                        <i v-show="errors[0]" class="fa fa-warning"></i>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <ValidationProvider
                        name="messages"
                        rules="min:3|required|alpha_spaces"
                        :bails="false"
                        v-slot="{ errors, classes }"
                      >
                        <label for="Message">Your Report</label>
                        <textarea
                          class="form-control"
                          id="reportContent"
                          name="message"
                          :class="classes"
                          v-model="message"
                          rows="5"
                          placeholder="content"
                        ></textarea>
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
                      Submit
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
      title: '',
      message: '',
      loading: false,
      errors: '',
      banks: null
    }
  },
  methods: {
    async makeReport() {
      this.$refs.form.validate().then(async success => {
        if (!success) return
        try {
            this.loading = true

            const payload = {
                title: this.title,
                message: this.message,
            }

            const res = await this.$axios.post('/submit-report', payload)
            this.loading = false
             if (res.status === 200) await this.$toast.success(res.data.data, 'Success')
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
.card {
  padding: 20px;
}
</style>