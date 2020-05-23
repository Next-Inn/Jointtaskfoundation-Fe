<template>
    <div>
        <section class="report-section">
            <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8 card">
                            <h2 class="text-center font-bold-blue">Request for Loan</h2>
                            <form @submit.prevent="requestLoan()">
                                <div class="form-group">
                                    <label for="Amount"> Amount</label>
                                    <input type="number" name="amount" v-model="amount" class="form-control" id="reportTitle" aria-describedby="Widthdraw" placeholder="Enter Your Amount" >
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" v-model="email" class="form-control" id="reportTitle" aria-describedby="Widthdraw" placeholder="Enter Your Email" >
                                </div>
                                <div class="form-group">
                                    <label for="bank-account">Bank Account</label>
                                    <input type="text" name="bank" v-model="bank" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Bank" >
                                </div>
                                <div class="form-group">
                                    <label for="account-name">Account Name</label>
                                    <input type="text" name="accountName" v-model="accountName" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Account Name" >
                                </div>
                                <div class="form-group">
                                    <label for="account-number">Account Number</label>
                                    <input type="text" name="accountNumber" v-model="accountNumber" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Account Number" >
                                </div>

                                <button
                                    class="btn btn-blue btn-block  bold pull-right"
                                    style="display:flex; justify-content: center; align-items: center;"
                                    type="submit"
                                    id="nextBtn"
                                >
                                    Submit Request
                                    <ButtonLoader v-if="loading" :loading="loading" />
                                </button>
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
            </div>

        </section>
        <footer class="main-footer">
        <strong>Copyright &copy; 2020 <a href="#">HackTeam</a>.</strong>
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

export default {
    layout: 'Udashboard',
    components: {
        DashboardNav,
        ButtonLoader
    },
    data() {
        return {
            bank: '',
            accountName: '',
            email: '',
            amount: '',
            accountNumber: '',
            loading: false,
            errors: ''
        }
    },
    methods: {
          async requestLoan() {
            try {
                this.loading = true;

                const payload = {
                    bank: this.bank,
                    accountName: this.accountName,
                    accountNumber: this.accountNumber,
                    email: this.email,
                    amount: this.amount
                };
                // return console.log(payload)

                const res = await this.$axios.post('/request-loan', payload)
                this.loading = false
                console.log(res)

                if (res.status === 200) await this.$toast.info(res.data.data, 'Success');
                // wait until the models are updated in the UI
                this.$nextTick(() => {
                    this.userDetails = {}
                })
            } catch (error) {
                 this.errors = e.response
                    ? e.response.data.error
                    : 'Network Error, Please check Your Network and Try again!!';
                await this.$toast.error(this.errors, 'Error');
                this.loading = false;
                return setTimeout(() => { this.errors = ''}, 5000);
            }
        }
    }
}
</script>

<style scoped>


    .card {
        padding: 20px;
    }


</style>