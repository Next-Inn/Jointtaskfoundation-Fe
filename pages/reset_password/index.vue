<template>
       <div class="container">
           <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6 form-container text-center">

                <form action="">
                    <div class="nav mb-4">
                        <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>
                        <h3>Reset Password?</h3>
                    </div>
                    <h3><i class="fa fa-lock fa-4x"></i></h3>
                    <h2 class="text-center"></h2>
                    <p>Sorry you forgot your password, you can create another here</p>
                    <div class="form-group">
                      <input type="password" placeholder="New Password" class="form-control">
                    </div>
                    <div class="form-group">
                      <input type="password" placeholder="Confirm password" class="form-control">
                    </div>
                    <button class="btn btn-blue btn-block">Change Password</button>
                 </form>
               </div>
               <div class="col-md-3"></div>
           </div>
       </div>
</template>

<script>
export default {
    layout: 'auth'
}
</script>

<style scoped>

    .navbar-brand {
        font-weight: 600;
        font-size: 29px;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav h3 {
        color: #1655b8;
    }
    .form-container {
        margin: auto;
    }

    .form-container form {
        background: var(--white);
        padding: 30px;
    }

    .form-container form a {
        color: var(--main-txt-color);
        text-decoration: none;
    }

    .form-container form a:hover {
        color: var(--main-bg-color);
    }

    .form-container h3 i {
        color: var(--main-bg-color);
    }
</style>