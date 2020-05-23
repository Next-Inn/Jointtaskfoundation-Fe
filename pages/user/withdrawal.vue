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
                            <h2 class="text-center font-bold-blue">Withdraw Fund </h2>
                            <form @submit.prevent="makeWithdrawal()">
                                <div class="form-group">
                                    <label for="Title">Withdraw Amount</label>
                                    <input type="number" v-model="userDetails.amount" class="form-control" id="reportTitle" aria-describedby="Widthdraw" placeholder="Enter Your Amount" >
                                </div>
                                <div class="form-group">
                                    <label for="Title">Email</label>
                                    <input type="email" name="email" v-model="userDetails.email" class="form-control" id="reportTitle" aria-describedby="Widthdraw" placeholder="Enter Your Email" >
                                </div>
                                <div class="form-group">
                                    <label for="Title">Bank</label>
                                    <input type="text" v-model="userDetails.bank" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Bank" >
                                </div>
                                <div class="form-group">
                                    <label for="Title">Account Name</label>
                                    <input type="text" name="name" v-model="userDetails.bankName" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Account Name" >
                                </div>
                                <div class="form-group">
                                    <label for="account-name">Account Number</label>
                                    <input type="text" class="form-control" v-model="userDetails.bankNumnber" id="" aria-describedby="Widthdraw" placeholder="Enter Your Account Number" >
                                </div>

                                <button
                                    class="btn btn-blue btn-block  bold pull-right"
                                    style="display:flex; justify-content: center; align-items: center;"
                                    type="submit"
                                    id="nextBtn"
                                    >
                                    Widthdraw
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
import DashboardNav from './../../components/partials/DashboardNavbar';
import ButtonLoader from './../../components/notification/buttonLoader'

export default {
    layout: 'Udashboard',
    components: {
        DashboardNav, ButtonLoader
    },

    data() {
        return {
            userDetails: {},
            loading: false,
            errors: ''
        }
    },
    methods: {
        async makeWithdrawal() {
            try {
                this.loading = true;

                const payload = {
                    bank: this.userDetails.bank,
                    accountName: this.userDetails.bankName,
                    accountNumber: this.userDetails.bankNumnber,
                    email: this.userDetails.email,
                    amount: this.userDetails.amount
                };
                // return console.log(payload)

                const res = await this.$axios.post('/request-withdrawal', payload)
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