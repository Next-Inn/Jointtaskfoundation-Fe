<template>
    <div>
        <footer class="footer-layer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>JTF</h1>
            <p>Jointtask Foundation is a marketing company birthed to raise people finanially. It is no news that many people in our country barely have a decent meal or life. joint task foundation is here to turn that around. We desire to transform the life of people who are under living into a high quality life. Together we can make that happen.</p>
          </div>
          <div class="col-md-2 col-5 quick-links">
            <h3>Quick Links</h3>
            <ul class="contact-info">
              <li class="mt-4"><a href="index.html">Home</a></li>
              <li class="mt-3"><a href="about.html">About Us</a></li>
              <li class="mt-3"><a href="plan.html">Marketing Plan</a></li>
              <li class="mt-3"><a href="signup.html">Sign Up</a></li>
              <li class="mt-3"><a href="login.html">Login</a></li>
            </ul>

          </div>
          <div class="col-md-4 col-7">
            <div class="contact-info-section">
              <h3> Reach Us on...</h3>
              <ul class="contact-info">
                <li><i class="fa fa-map-marker"></i><span>21 Revolution Street</span></li>
                <li><i class="fa fa-phone"></i><span>08067488682, 08090066060</span></li>
                <li><i class="fa fa-envelope"></i><span>21 Revolution Street</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr>
        <div class="container">
          <div class="footer-icons pull-right">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
          </div>
          <p>&copy; Built with pride 2020. </p>
        </div>
      </div>
    </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
/* footer */

footer {
	background: var(--main-bg-color);
	color: #fff;
	min-height: 91vh;
	padding: 80px 0 10px;
	font-size: 18px;
	/* font-family: 'Nunito', sans-serif; */
}

.contact-info {
	list-style: none;
	padding: 0px;
}

footer hr {
	background: #fff;
}

.footer-icons a {
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	border-radius: 2px;
	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;
	margin-right: 3px;
	margin-bottom: 5px;
}

.footer-layer {
	display: flex;
	flex-flow: wrap column;
	align-items: space-between;
	justify-content: space-between;
}

.contact-info i {
	color: #ffffff;
	font-size: 20px;
	width: 38px;
	height: 38px;
	text-align: center;
	line-height: 42px;
	margin: 10px 8px;
	vertical-align: middle;
	border: 2px solid #ffe484;
	padding: 0px 4px;
}

.contact-info div {
	display: flex;
}

.contact-info p span {
	display: block;
	font-weight: normal;
	font-size: 16px;
	line-height: 2;
}

.contact-info p {
	font-size: 18px;
}

.quick-links a {
	text-decoration: none;
	color: #fff !important;
	cursor: pointer;
	font-size: 16px;
}

.quick-links a:before {
	font-family: "Font Awesome 5 Free";
	left: 0;
	font-size: 15px;
	color: #fff;
	content: "\f04";
	font-weight: bold;
	padding-right: 11px;
}
</style>