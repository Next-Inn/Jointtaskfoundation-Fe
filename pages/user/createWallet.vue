<template>
    <div>
       <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="card my-5">
                            <div class="card-body">
                                <div class="account">
                                    <h1 class="text-center">Create a Wallet</h1>
                                </div>
                                <form action="" class="py-3">
                                    <div class="form-group">
                                        <select class="form-control" v-model="walletDetail.bank_code">
                                            <option v-for="bank in banks" :value="bank.code" :key="bank.code" >{{ bank.name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Account Number" v-model="walletDetail.account_number">
                                    </div>

                                    <button class="btn btn-blue pull-right" @click.prevent="createWallet">Create Wallet</button>
                                    
                                </form>
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
            walletDetail: {}
        }
    },
    methods: {
        async getDownlines() {
            const result = await this.$axios.$get('/list-banks')
            this.banks = result.data;
            console.log(this.banks)
        },
        async createWallet() {
           
            try {
                const {account_number, bank_code} = this.walletDetail
                const wallet = this.$axios.$post('/create-wallet', {
                account_number,
                bank_code
            })
            bank_code: " "
            account_number: " "
            console.log(bank_code)
            console.log(account_number)
            this.$router.push('/user/u_dashboard')
            }
            catch(e) {
                console.log(e)
            }
            

        }
        // async getReward() {
        //     const rewards = await this.$axios.$get('/verify-account-number');
        //     console.log(rewards)
        // }
    },
    mounted() {
        this.getDownlines()
    }
}
</script>

<style scoped>
    .main {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    }

    .main .content {
    padding: 30px 15px;
    min-height: calc(100vh - 160px);
    /* margin-top: 30px; */
    background: #dddddd;
    }

    .pointer {
        width: 4px;
        height: 30px;
        border: 1px solid #000;
        margin: 20px auto;
        background: #000;

    }

    .small-img {
        height: 50px;
    }

    .account {
        background: #698edf;
        padding: 10px 30px;
        color: #fff;
    }

    option {
        justify-content: space-between;
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


    .main-footer {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    padding: 10px;
    }

</style>
