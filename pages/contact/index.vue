<template>
  <div>
    <!-- <Banner>
      <h1 slot="header">Contact</h1>
    </Banner> -->

    <section id="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img-box">
              <div class="heading mt-5 cont-header">
                  <h1 class="bolder">Get in Touch</h1>
              </div>
              <div class="contact-info-section mt-4">
              <ul class="mt-3 contact-info">
                <li class="mt-3"><a href="#"><i class="fa fa-map-marker"></i> 21 Revolution Street</a></li>
                <li class="mt-3"><a href="#"><i class="fa fa-phone"></i> 08067488682, 08090066060</a></li>
                <li class="mt-3"><a href="#"><i class="fa fa-envelope"></i> 21 Revolution Street</a></li>
              </ul>
            </div>
              <img src="./../../assets/img/woman-baloon.png" alt="about-image" class="img-fluid p-abs" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-div mt-5">
              <div class="heading cont-header">
                <h1 class="bolder">Write to us</h1>
                <p class="mt-3">Complete the form below and we will be in touch!</p>
            </div>
              <form action="#">
                <div class="form-group mb-2">
                  <input type="text" class="form-control" placeholder="Enter Your Name" id="email" />
                </div>
                <div class="form-group mb-2">
                  <input type="email" class="form-control" placeholder="Enter Email" id="pwd" />
                </div>
                <div class="form-group mb-2">
                  <input type="text" class="form-control" placeholder="Enter Phone" id="phone" />
                </div>
                <div class="form-group mb-2">
                  <textarea name id rows="4" class="form-control" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="btn btn-contact btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Banner from './../../components/other/Banner'
export default {
  components: { Banner }
}
</script>

<style scoped>
/* contact page */
#contact-section {
  /* margin: 85px 0; */
  background: url("../../assets/img/contact-bg.png");
    padding: 100px 0;
    background-size:cover;
    background-position: fixed;
}

#contact-section .heading h1 {
  margin-top: 5px;
      color: #22395d;
}
.p-abs{
     position: absolute;
    left: 3rem;
    top: 17rem;

}
/* .img-box {
  margin: 35px 0; 
}*/
.card-div{ 
  box-shadow: -2px 1px 10px 2px;
    border-radius: 9px;
    background: #ffffff;
    padding: 2rem 1rem;
}
.bolder{
  font-weight: bolder;
}
.heading h1{
  margin: 0;
}
.contact-info {
	list-style: none;
	padding: 0px;
}
.mb-2{
  margin-bottom:2rem !important;
}
.mt-4{
  margin-top:3rem !important;
}
.contact-info i {
	color: #ffffff;
	font-size: 20px;
	width: 38px;
	height: 38px;
	text-align: center;
	line-height: 42px;
	/* margin: 10px 8px; */
	vertical-align: middle;
	padding: 0px 4px;
  border: 1px solid;
    color: #22395d;
      margin-right: 1rem;
}
.contact-info a{
  font-size: 20px;
  color: #22395d;

}
@media(max-width:1000px){
  .p-abs{
    display:none;
  }
}
.cont-header h1{    border-bottom: 3px solid #cccccc; }
</style>