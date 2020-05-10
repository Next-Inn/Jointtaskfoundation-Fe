<template>
    <div>
       <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="account">
                        <h2 class="text-left">Edit Profile</h2>
                    </div>
                        <div class="row mt-3">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="card ">
                                    <div class="card-body">
                                        <div class="profile-img">
                                            <img v-if="user.profile_pic" :src="user.profile_pic"/>
                                            <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                            alt/>
                                            <div class="file btn btn-lg btn-primary">
                                                Change Photo
                                                <input type="file" name="file"/>
                                            </div>

                                        </div>
                                        <div class="text-center">
                                            <h3 class="font-bold m-0">{{ user.name }}</h3>
                                            <p class="font-bold-h5 m-0">Welcome to Jointtask.com</p>
                                            <p class="font-bold-h5">Stage: {{ user.stage_completed }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <form action>
                                            <div class="bd-bt profile-details mb-3 ">
                                                <h5 class=" mb-2 "><i class="fa fa-user ft-16"></i> Personal Information</h5>
                                            </div>
                                            <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Full Name:</label>
                                                <input type="text" placeholder="Full Name" class="form-control" v-model="name"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="email">Email Address:</label>
                                                <input type="email" placeholder="Email" class="form-control"  :value="user.email" disabled/>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Phone Number:</label>
                                                    <input type="tel" placeholder="Phone" class="form-control"  v-model="phone"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>User Name:</label>
                                                    <input type="text" placeholder="User Name" class="form-control"  :value="user.username" disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                    <label>Sponsor Name:</label>
                                                    <input type="tel" placeholder="Sponsor Name" class="form-control"  :value="user.sponsorName" disabled/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                    <label>Full Address:</label>
                                                    <input type="text" placeholder="Full Aaddress" class="form-control" v-model="address"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="update-profile mt-2">
                                                <button
                                                    class="btn btn-blue btn-block"
                                                    @click.prevent="submitProfile"
                                                    style="display:flex; justify-content: center; align-items: center;"
                                                >
                                                    Update profile
                                                     <ButtonLoader v-if="loading" :loading="loading" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
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
        DashboardNav, ButtonLoader
    },
    data() {
        return {
            user: this.$auth.user,
            name: this.$auth.user.name,
            phone: this.$auth.user.phone,
            address: this.$auth.user.address,
            loading: false,
            errors: ''
        }
    },
    methods: {
        async submitProfile() {
            try{
                 this.loading = true;
                const userDetails = {
                    name: this.name,
                    phone: this.phone,
                    address: this.address
                }

                await this.$store.dispatch('user/updateUser', userDetails);
                this.loading = false;
                await this.$toast.sucess('Updated User Successfully', 'Success');
            } catch (e) {
                 this.errors = e.response
                    ? e.response.data.error
                    : 'Network Error, Please check Your Network and Try again!!';
                await this.$toast.error(this.errors, 'Error');
                this.loading = false;
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
   .bd-bt{
       border-bottom: 2px solid #d5d2d2;
   }
    .account {
        /* background: #698edf; */
        padding: 0px;
        color: #fff;
    }
.account h2:before{
    border:2px solid #a22826;
    content:'';
    width: 20px;
}
.account h2{
    color:#22395d;
    font-weight: 900;
}
.font-bold-h5 {
font-weight: 900;
}
.mt-6{
    margin-top:2rem;
}
.ft-16{    font-size: 16px;}
    .card {
    border-radius: 12px;
    box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
    color: #252422;
    margin-bottom: 20px;
    position: relative;
    border: 0 none;
    transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;

    }
.font-bold{
    color:#22395d;
    font-weight:900;
}
.update-profile button{
    width:10rem;
    margin-left: auto;

}
    .card-header {
    background: #fff;
    border-radius: 12px;
    }

    .profile-img {
  width:10rem;
  margin: auto;


}
.profile-details h5{
    margin:0;
    font-weight: 900;
}
.profile-img img {
  width: 100%;

}
.person-info h5{
    line-height:2;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 100%;
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
