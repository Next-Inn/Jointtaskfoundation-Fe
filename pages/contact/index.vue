<template>
  <div>
    <Banner>
      <h1 slot="header">Contact</h1>
    </Banner>

    <section id="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img-box">
              <img src="./../../assets/img/bitcoin.jpg" alt="about-image" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="heading">
              <h1 class="text-center">Write to us</h1>
            </div>
            <p class="text-center">We are just a call away</p>

            <form action="#">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter Your Name" id="email" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Enter Email" id="pwd" />
              </div>
              <div class="form-group">
                <textarea name id rows="4" class="form-control" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" class="btn btn-blue btn-block">Submit</button>
            </form>
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
  margin: 100px 0;
}

#contact-section .heading h1 {
  margin-top: 5px;
}

.img-box {
  margin: 35px 0;
}
</style>