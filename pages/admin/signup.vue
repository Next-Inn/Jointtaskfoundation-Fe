<template>
    <div class="container">
         <div class="container">
            <div class="auth-section">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-2 col-4 title">
                        <div class="box">
                            <h3 class="text-center py-3">Sign Up</h3>
                        </div>
                    </div>
                    <div class="col-md-4 col-8 a_sinup">
                        <div class="card">
                            <h3 class="text-center py-3 auth-title">Admin SignUp</h3>
                        <form>
                            <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" placeholder="Enter Your name" v-model="userInfo.name">
                            </div>
                            <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" placeholder="Enter email" v-model="userInfo.email">
                            </div>
                            <div class="form-group">
                            <label for="email">Username:</label>
                            <input type="text" class="form-control" placeholder="Enter Username" v-model="userInfo.username">
                            </div>
                            <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" v-model="userInfo.password">
                            </div>
                            <button type="submit" class="btn btn-blue btn-block" @click.prevent="registerUser">Submit</button>
                        </form>
                        
                        </div>
                    
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'auth',
    data() {
        return {
            userInfo: {}
        }
    },
    methods: {
        async registerUser() {
            // alert('hello want to create an account ')
           const { name, email, password, username } = this.userInfo; 
           const registered = await this.$axios.$post('/auth/signup', {
               name,
               email,
               username,
               password,
               role: 'admin',
               phone: '08067488682',
               address: "5, address, Lagos State",
           });
           return this.$router.push('/dashboard')
        }
    }
    
    
}
</script>

<style scoped>
    .auth-section {
        margin: 100px 0;
    }

    .a_sinup .card {
        padding: 20px;
    }

    .auth-section .btn-blue {
        background: #fff;
        color: #000;
        border: 1px solid #000;
    }

    .auth-section .a_sinup {
        margin: 0;
        padding: 0;
    }
    .auth-section .title {
        margin: 0;
        padding: 0;
    }



    .auth-section .box {
        margin: 40px 0;
        background: url('./../../assets/img/bitcoin2.jpg') no-repeat;
        background-position: right;
        background-size: cover;
        color: var(--white);
        padding: 20px;
        height: 300px;
        border-radius: 4px;
    }

    .auth-title {
        display: none
    }

    @media screen and (max-width: 992px) {
        /* .auth-section .box {
        display: none;
        } */

        .auth-title {
            display: block
        }
    }

    .btn-blue:hover {
        background: var(--main-bg-color);
        color: #fff;
        border: 1px solid var(--main-bg-color);
    }

</style>