<template>
    <div>
       <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="card py-3">
                            <div class="card-body">
                                <div class="account">
                                    <p class="account-details d-flex"><span class="balance" :v-bind="amount">N {{amount}}</span></p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="">Card Number</label>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Card Number" v-model="number">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Expiry Month</label>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder=" Eg. 09" v-model="expiry_month">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Expiry Year</label>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder=" Eg. 20" v-model="expiry_year">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="number" class="form-control" placeholder="CVV" v-model="cvv">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Card Pin" v-model="pin">
                                            </div>
                                        </div>
                                    </div>
                                     <button class="btn btn-blue ml-auto" @click.prevent="makepayment">
                                        Pay
                                        <ButtonLoader v-if="loading" :loading="loading" />
                                    </button>
                                </div>

                            </div>
                        </div>
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
    </div>
</template>


<script>
import DashboardNav from './../../components/partials/DashboardNavbar'
import ButtonLoader from './../../components/notification/buttonLoader'
export default {
     middleware: ['redirectIfAuthenticated'],
    layout: 'Udashboard',
    components: {
        DashboardNav
    },
    data() {
        return {
            reward: '',
            banks: [],
            detail: {},
            amount: 4000,
            cvv: '',
            expiry_month: '',
            expiry_year: '',
            number: '',
            pin: '',
            errors: '',
            loading: false
        }
    },
    methods: {
        async getDownlines() {
            try {
                this.loading = true;
                const result = await this.$axios.$get('/list-banks')
                this.banks = result.data;
                this.loading = false;

                if (res.status === 200)
                    await this.$toast.success(res.data.data, 'Success')
                    this.$nextTick(() => {
                    this.userDetails = {}
                })
                 return this.$router.push('/user/u_dashboard');
            } catch (e) {
                this.errors = e.response
                    ? e.response.data.error
                    : 'Network Error, Please check Your Network and Try again!!';
                await this.$toast.error(this.errors, 'Error');
                this.loading = false;
                return setTimeout(() => { this.errors = ''}, 5000);
            }

        },
        // async getReward() {
        //     const rewards = await this.$axios.$get('/verify-account-number');
        //     console.log(rewards)
        // }
        makepayment() {
            const userPayload = {
            amount: this.amount,
            cvv: this.cvv,
            expiry_month: this. expiry_month,
             expiry_year: this.expiry_year,
            number: this.number,
            pin: this.pin
          }
            const payment = this.$axios.$post('/initial-pay',userPayload)
            // console.log(payment)
            payment.then(async(x) => {
                if (x.data.includes('Please enter OTP')) {
                    window.prompt(x.data);
                    // handle sending back otp and reference to the server
                } else if (x.data.includes('wallet loaded')) {
                   window.alert(x.data);
                   return this.$toast.success('Wallet Loaded', 'Success')
                }
            }).catch(async(e) => {
                this.errors = e.response
                    ? e.response.data.error
                    : 'Network Error, Please check Your Network and Try again!!';
                await this.$toast.error(this.errors, 'Error');
                this.loading = false;
                return setTimeout(() => { this.errors = ''}, 5000);
            });
        }
    },
    mounted() {
        this.getDownlines()
    }
}
</script>

<style scoped>


    .pointer {
        width: 4px;
        height: 30px;
        border: 1px solid #000;
        margin: 20px auto;
        background: #000;

    }
   .btn-blue {
        position: relative;
    width: 100%;
    font-weight: 900;
    font-size: 17px;
    }
.btn-blue:hover{
color:#e0dddd;
 border: 1px solid #e0dddd;
}
    .small-img {
        height: 50px;
    }

    .account {
        background:#22395d;
        padding: 10px 30px;
        color: #fff;
    }

    .account-details {
        justify-content: space-between;
        align-items: flex-end;
    }

    .balance {
        font-size: 40px;
    }

    .card {
    border-radius: 12px;
    box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
    color: #252422;
    margin-bottom: 20px;
    position: relative;
    border: 0 none;
    transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;

    }

    .card-header {
    background: #fff;
    border-radius: 12px;
    }

    .card-stats .card-body .numbers .card-category {
    color: #fff;
    font-size: 18px;
    line-height: 1.4em;
    font-weight: 600;
    }

    .card-stats .card-body .numbers p {
    margin-bottom: 0;
    text-align: right;
    color: #fff;
    letter-spacing: 2px;
    }

    .card-stats .card-body .numbers .balance {
    font-size: 28px;
    font-weight: 900;
    }

    .card-stats .icon-big {
    font-size: 3em;
    min-height: 64px;
    }



</style>
