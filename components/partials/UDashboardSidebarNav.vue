<template>
    <b-collapse id="nav-collapse" is-nav>
        <section id="sidebar">
            <!-- <a href="/" class="navbar-brand">JTF</a> -->
             <div class="nav-item dropdown hide-desktop">
                <ul class="mobile-profile-thumnail">
                    <li > 
                        <nuxt-link to="/user/profile" class="ul-li-a profile-pic-nav">
                                <img v-if="$auth.user.profile_pic" :src="$auth.user.profile_pic"/>
                                <img v-else src="https://via.placeholder.com/50" />
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/user/profile" class="ul-li-a">Welcome {{ $auth.user.name }}</nuxt-link>
                        </li>
                    </ul>
                </div>
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
                <nuxt-link to="/user/makepayment" class="nav-link" id="userList">
                    <i class="fa fa-money"></i>Payment</nuxt-link>
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
export default {
    computed: {
        user(){
            return this.$store.getters.loggedInUser
        }
    },
    methods: {
          async logout() {
            await this.$auth.logout().then(() => this.$toast.success('Logged Out Successfully'))
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
    .profile-pic-nav{
        width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
    }
</style>