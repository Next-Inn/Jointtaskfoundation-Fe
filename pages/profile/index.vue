<template>
       <div class="container">
           <div class="row">
               <div class="col-md-2"></div>
               <div class="col-md-8 form-container">
                <form action="">
                  <div class="nav mb-4">
                        <nuxt-link to="/" class="navbar-brand">JTF</nuxt-link>
                        <h3>Profile</h3>
                    </div>
                  <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6 text-center">
                      <div class="profile-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                        <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3"></div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                              <input type="text" placeholder="Username" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                              <input type="email" placeholder="Email" class="form-control">
                            </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group">
                              <input type="tel" placeholder="Phone" class="form-control">
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                              <input type="text" placeholder="State" class="form-control">
                          </div>
                      </div>
                  </div>

                  <button class="btn btn-blue btn-block">Update profile</button>
                </form>
               </div>
               <div class="col-md-2"></div>
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

    .profile-img {
        text-align: center;
    }
    .profile-img img {
        width: 70%;
        height: 100%;
    }
    .profile-img .file {
        position: relative;
        overflow: hidden;
        margin-top: -20%;
        width: 70%;
        border: none;
        border-radius: 0;
        font-size: 15px;
        background: #212529b8;
    }
    .profile-img .file input {
        position: absolute;
        opacity: 0;
        right: 0;
        top: 0;
    }

</style>