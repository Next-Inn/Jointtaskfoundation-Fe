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
              <div class="heading">
                  <h1 class="bolder">Contact Us</h1>
              </div>
              <div class="contact-info-section">
              <ul class="mt-5 contact-info">
                <li class="mt-3"><a href="#"><i class="fa fa-map-marker"></i> 21 Revolution Street</a></li>
                <li class="mt-3"><a href="#"><i class="fa fa-phone"></i> 08067488682, 08090066060</a></li>
                <li class="mt-3"><a href="#"><i class="fa fa-envelope"></i> 21 Revolution Street</a></li>
              </ul>
            </div>
              <img src="./../../assets/img/woman-baloon.png" alt="about-image" class="img-fluid p-abs" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-div">
              <div class="heading">
                <h1 class="bolder">Write to us</h1>
                <p class="">Complete the form below and we will be in touch!</p>
            </div>
              <form @submit.prevent="submitContact">
                <div class="form-group mb-2">
                  <input type="text" class="form-control" placeholder="Enter Your Name" id="name" v-model="name"/>
                </div>
                <div class="form-group mb-2">
                  <input type="email" class="form-control" placeholder="Enter Email" id="email" v-model="email" />
                </div>
                <div class="form-group mb-2">
                  <input type="text" class="form-control" placeholder="Enter Phone" id="phone" v-model="number"/>
                </div>
                <div class="form-group mb-2">
                  <textarea name id rows="4" class="form-control" placeholder="Your Message" v-model="message"></textarea>
                </div>
                <button
                  type="submit"
                    style="display:flex; justify-content: center; align-items: center;"
                  class="btn btn-blue btn-block">
                  Submit
                    <ButtonLoader v-if="loading" :loading="loading" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Banner from './../../components/other/Banner';
import ButtonLoader from './../../components/notification/buttonLoader'
export default {
  components: { Banner, ButtonLoader },

  data() {
    return {
      name: '',
      email: '',
      number: '',
      message: '',
      loading: false,
      errors: ''
    }
  },

  methods: {
    async submitContact () {
      if (
        this.name === '' ||
        this.email === '' ||
        this.phone === '' ||
        this.message === ''
      ) {
        await this.$toast.warning('Please Fill All Fields', 'Warning');
        return this.loading = false;
      }
      const data = {
        name: this.name,
        email: this.email,
        phone: this.number,
        message: this.message
      };

      try {
        this.loading = true;
        const contact = await this.$axios.post('/contact-us', data);
        this.loading = false;
        await this.$toast.success(contact.data.data, contact.data.status)
        return this.name = this.email = this.number = this.message = '';
      } catch (e) {
        this.errors = e.response
          ? e.response.data.error
          : 'Network Error, Please check Your Network and Try again!!';
        await this.$toast.error(this.errors, 'Error');
        this.loading = false;
        return setTimeout(() => { this.errors = ''}, 5000);
      }
    }
  }
}
</script>

<style scoped>
/* contact page */
#contact-section {
  /* margin: 85px 0; */
  background: #EBF0F4;
    padding: 100px 0;
}

#contact-section .heading h1 {
  margin-top: 5px;
      color: #22395d;
}
.p-abs{
  position:absolute;
  left:0;
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
</style>