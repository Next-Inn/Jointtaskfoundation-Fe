<template>
<b-collapse id="nav-collapse" is-nav>
     <section id="sidebar" >
        
        <!-- <a href="/" class="navbar-brand">JTF</a> -->
        <div class="nav-item dropdown hide-desktop">
           <div class="mobile-profile-thumnail">
               <div> 
                <nuxt-link to="/profile">
                        <img v-if="$auth.user.profile_pic" :src="$auth.user.profile_pic"/>
                        <img v-else src="https://via.placeholder.com/50" />
                    </nuxt-link>
                </div>
                <div>
                    <nuxt-link to="/user/u_dashboard">Welcome {{ $auth.user.name }}</nuxt-link>
                </div>
            </div>
        </div>
        <ul class="navbar-nav nav-sidebar text-center" id="" >
            <li class="nav-item" >
            <nuxt-link to="/dashboard" class="nav-link activeClass" id="dashboard">
                <i class="fa fa-home"></i>Home</nuxt-link>
            </li>
            <li class="nav-item" >
            <nuxt-link to="/admin/userlist" class="nav-link" id="userList">
                <i class="fa fa-users"></i>Users</nuxt-link>
            </li>
             <li class="nav-item" >
            <nuxt-link to="/admin/profile" class="nav-link" id="userList">
                <i class="fa fa-user"></i>Profile</nuxt-link>
            </li>
            <li class="nav-item" >
            <nuxt-link to="#" class="nav-link " id="logOut">
                <i class="fas fa-sign-out-alt"></i>Log out</nuxt-link>
            </li>
        </ul>
    </section>
    </b-collapse>


</template>
<script>
export default {
}
</script>

<style scoped>
 

    #sidebar .navbar-brand {
        font-size: 30px;
    }
    .mobile-profile-thumnail{
        list-style-type:none;
        padding: 0;
        border-bottom:2px solid;
    }
    #sidebar ul {
        list-style: none;
        margin: 40px 0;
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
        font-size: 24px;
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
</style>