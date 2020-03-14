<template>
    <section id="sidebar">
        <a href="#" class="navbar-brand">MLM</a>
        <ul class="navbar-nav nav-sidebar text-center" id="">
            <li class="nav-item" >
            <a href="/dashboard" class="nav-link activeClass" id="dashboard">
                <i class="fa fa-home"></i>Home</a>
            </li>
            <li class="nav-item" >
            <a to="/user_list" class="nav-link" id="userList">
                <i class="fa fa-users"></i>Users</a>
            </li>
            <li class="nav-item" >
            <a to="#" class="nav-link " id="logOut">
                <i class="fas fa-sign-out-alt"></i>Log out</a>
            </li>
        </ul>
    </section>
</template>

<style scoped>
    #sidebar {
        width: 100px;
        bottom: 0;
        float: none;
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        background: var(--main-bg-color);
        color: var(--white);
        padding: 8px 0px;
        text-align: center;
        display: block;
        z-index: 1;
        color: #fff;
        font-weight: 600;
    }

    #sidebar .navbar-brand {
        font-size: 30px;
    }

    #sidebar ul {
        list-style: none;
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

</style>