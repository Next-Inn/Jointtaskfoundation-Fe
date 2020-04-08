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
                                <div class="account mb-4">
                                    <h1 class="text-center">Profile</h1>
                                </div>
                                <form action>
                                    <!-- <div class="nav mb-4">
                                        <h3></h3>
                                    </div> -->
                                    <div class="row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6 text-center">
                                            <div class="profile-img">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                                alt
                                            />
                                            <div class="file btn btn-lg btn-primary">
                                                Change Photo
                                                <input type="file" name="file" />
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3"></div>
                                        </div>
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <input type="text" placeholder="Username" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <input type="email" placeholder="Email" class="form-control" />
                                        </div>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <input type="tel" placeholder="Phone" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <input type="text" placeholder="State" class="form-control" />
                                        </div>
                                    </div>
                                    </div>

                                    <button class="btn btn-blue btn-block">Update profile</button>
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
    //  middleware: ['redirectIfAuthenticated'],
    layout: 'dashboard',
    components: {
        DashboardNav
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
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

    .account {
        background: #698edf;
        padding: 10px 30px;
        color: #fff;
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


    .main-footer {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    padding: 10px;
    }

</style>
