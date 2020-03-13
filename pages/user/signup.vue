<template>
    <div>
        <section id="login">
       <div class="container">
           <div class="row">
               <div class="col-md-2"></div>
               <div class="col-md-8 form-container">
                <form action="" id="regForm">
                  <h3 class="text-center">Create Your Account</h3>
                  <div class="tab">
                    <div class="text-container">
                      <h3>Personal Information</h3>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="First Name" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" placeholder="Last Name" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="Email" placeholder="Email" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="tel" placeholder="Mobile Number" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="text-container">
                    <h3>User Information</h3>
                </div>
                <div class="form-group">
                  <input type="text" placeholder="Username" class="form-control">
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" placeholder="Password" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="password" placeholder="Confirm password" class="form-control">
                    </div>
                  </div>
                </div>
                  </div>
                  <div class="tab">
                    <div class="text-container">
                        <h3>Sponsor Information</h3>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <input type="text" placeholder="Sponsor ID" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="text-container">
                        <h3>Package and Payment Information</h3>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <select class="form-control" id="selPackage">
                            <option>Joining package</option>
                            <option>adjoining</option>
                            <option>me</option>
                            <option>thwem</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <select class="form-control" id="selPayMode">
                            <option>E-Wallet</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <input type="password" placeholder="password" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input type="text" placeholder="E-Wallet ID" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input type="password" placeholder="E-Wallet Password" class="form-control">
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div class="tab">
                    <div class="text-container">
                        <h3>Security Question & Answer</h3>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <select class="form-control" id="securityQuestion">
                            <option>What is the name of your first School?</option>
                            <option>What is your mother's maiden name?</option>
                            <option>Whats your secret?</option>
                            <option>What's your first pet's name</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" placeholder="Your Answer" class="form-control" id="secretAnswer">
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-blue btn-block">Log In</button>
                  </div>
                    <div style="overflow:auto;">
                      <div style="float:right;" class="my-3">
                        <button class="btn btn-success" type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
                        <button class="btn btn-blue" type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
                      </div>
                      <p>Already have an account? Click <a href="login.html"><strong>Log in</strong></a> instead</p>
                    </div>

                    <!-- Circles which indicates the steps of the form: -->
                    <div style="text-align:center;margin-top:40px;">
                      <span class="step"></span>
                      <span class="step"></span>
                    </div>
                 </form>
               </div>
               <div class="col-md-2"></div>
           </div>
       </div>
   </section>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  /* signup */

  #login {
    margin: 150px 0 100px 0;
  }

/* Hide all steps by default: */
.tab {
	display: none;
}

/* Make circles that indicate the steps of the form: */
.step {
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: rgb(172, 167, 167);
	border: none;
	border-radius: 50%;
	display: inline-block;
	opacity: 0.5;
}

/* Mark the active step: */
.step.active {
	opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
	background-color: #4caf50;
}

.authPage {
	background: linear-gradient(45deg, #000000c7, #00000094), url('../../assets/img/auth.jpg') no-repeat;
	background-size: cover;
	background-position: center;
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

.text-container {
	background: var(--main-bg-color);
	color: #fff;
	padding: 6px;
	margin: 20px 0;
}

.text-container h3 {
	font-size: 16px;
	font-weight: 900;
}

</style>