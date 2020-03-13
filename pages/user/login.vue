<template>
    <div>
        <section id="login">
       <div class="container">
           <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6 form-container">
                <form action="">
                  <h3 class="text-center">Log In</h3>
                    <div class="form-group">
                      <input type="email" placeholder="Email" class="form-control">
                    </div>
                    <div class="form-group">
                      <input type="password" placeholder="password" class="form-control">
                    </div>
                    <p>Don't have an account? Click <a href="/signup.html"><strong>Sign up</strong></a> to create one</p>
                    <button class="btn btn-blue btn-block">Log In</button>
                 </form>
               </div>
               <div class="col-md-3"></div>
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
  body {
    background: linear-gradient(45deg, #000000c7, #00000094), url('../../assets/img/auth.jpg') no-repeat;
	  background-size: cover;
	  background-position: center;
  }
  #login {
    margin: 150px 0 100px 0;
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