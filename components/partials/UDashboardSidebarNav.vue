<template>
    <b-collapse id="nav-collapse" is-nav>
        <section id="sidebar">
            <!-- <a href="/" class="navbar-brand">JTF</a> -->
             <template class="nav-item dropdown hide-desktop" v-if="$auth.user">
                <ul class="mobile-profile-thumnail">
                    <li >
                        <img v-if="$auth.user.profile_pic" class="image" :src="$auth.user.profile_pic"/>
                        <img v-else src="https://via.placeholder.com/50" />
                    </li>
                    <li>
                        <nuxt-link to="/user/profile" class="ul-li-a">Welcome {{ $auth.user.name }}</nuxt-link>
                    </li>
                </ul>
            </template>

            <template v-else> Name</template>
            <ul class="navbar-nav nav-sidebar text-center" id="">
                <li class="nav-item" >
                <nuxt-link to="/user/u_dashboard" class="nav-link activeClass" id="dashboard">
                    <i class="fa fa-home"></i>Home</nuxt-link>
                </li>
                <li class="nav-item" >
                <nuxt-link to="/user/withdrawal" class="nav-link" id="userList">
                    <i class="fa fa-money"></i>Widthdraw</nuxt-link>
                </li>
                <li class="nav-item" >
                <nuxt-link to="/user/requestLoan" class="nav-link" id="userList">
                    <i class="fa fa-coins"></i>Get Loan</nuxt-link>
                </li>
                <li class="nav-item" >
                <a href="#" class="nav-link" id="userList"  @click.prevent="payWithPaystack()">
                    <i class="fa fa-money"></i>Payment</a>
                </li>
                <li class="nav-item" >
                <nuxt-link to="/user/makereport" class="nav-link" id="userList">
                    <i class="fa fa-microphone"></i>Report</nuxt-link>
                </li>
                <li class="nav-link logout"  @click="logout">
                    <i class="fas fa-sign-out-alt"></i>Log out
                </li>
            </ul>
        </section>
    </b-collapse>
</template>

<script>
import store from '@/store';
export default {
    head() {
        return {
             script: [{
                src: 'https://js.paystack.co/v1/inline.js',
                type: 'text/javascript'
            }]
        }
    },

    data() {
        return {
            user: null
        }
    },

    mounted() {
        this.user = this.$store.getters['loggedInUser'];
    },

    methods: {
          async logout() {
            await this.$auth.logout().then(() => this.$toast.success('Logged Out Successfully'))
        },

         async payWithPaystack(store) {
            let payload = null;
            const paystackKey = process.env.PAYSTACK_TEST_KEY;
            const handler = PaystackPop.setup({
                key: 'pk_test_33364b8f7b0c494b6fa9002781f332ea2f60326c',
                email: this.user.email,
                amount: 400000,
                metadata: {
                    custom_fields: [
                        {
                            display_name: this.user.name,
                            variable_name: this.user.name,
                            value: this.user.phone
                        }
                    ]
                },
                callback: async function({ reference, transaction, status}) {
                    try {
                        payload = { reference, transaction, status };
                        await window.$nuxt.$store.dispatch('user/makePayment', payload);
                        window.$nuxt.$toast.success('Transacton Successfully');
                    } catch (error) {
                      window.$nuxt.$toast.error('Transacton Unsuccessfully, Please Try Again Later');
                    }
                },
                onClose: function () {
                    window.$nuxt.$toast.error('Transacton Unsuccessfully');
                }
            });
            await handler.openIframe();
        },
    }
}
</script>

<style scoped>

    #sidebar .navbar-brand {
        font-size: 30px;
    }

    #sidebar ul {
        list-style: none;
        /* margin: 40px 0; */
        /* padding: 3px; */
    }

    #sidebar ul li {
        margin: 8px 0;
    }

    #sidebar ul li a:hover {
        border-left: 4px solid #fff;
        /* background: red; */
    }

    .activeClass {
        border-left: 4px solid #fff;
    }


    #sidebar a {
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
    }

    #sidebar ul li i {
        display: block;
        /* width: 35px; */
        margin: 3px auto;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 20px;
    }

    .logout{
        cursor: pointer;
    }
    .mobile-profile-thumnail{
    list-style-type:none;
    padding: 0;
    border-bottom:2px solid;
}
.ul-li-a:hover{
    border-left:none !important;
}
    @media(min-width: 1000px){
        .hide-desktop{
            display: none;
        }
    }
    @media(max-width:1000px){
    .navbar-brand{
        left: 0px !important;
    }
    #sidebar {
        top:74px;
    border-top: 9px solid #a20a11;}
    }

    .image {
    width: 100px;
    height: 80px;
}

</style>