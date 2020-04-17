<template>
  <div>
   <div class="carousel slide" id="main-carousel" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#main-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#main-carousel" data-slide-to="1"></li>
          <li data-target="#main-carousel" data-slide-to="2"></li>
          <li data-target="#main-carousel" data-slide-to="3"></li>
        </ol><!-- /.carousel-indicators -->

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="../../assets/img/The-future-of-networking-1024x553.jpg" alt="sime">
            <div class="overlay-after"></div>
            <div class="carousel-caption d-none d-md-block">
              <h3>Welcome to <span>Joint Task Foundation</span></h3>
              <p>A place with your future at heart</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="../../assets/img/business.jpg" alt="">
             <div class="overlay-after"></div>
            <div class="carousel-caption d-none d-md-block mb-5" data-aos="fade-up">
              <h3 >Vision</h3>
              <p>It take vision to desire success. Perhaps you have a burning desire to have a better standard of living. You have a vision of a better future.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="../../assets/img/boss.jpg" alt="">
             <div class="overlay-after"></div>
            <div class="carousel-caption d-none d-md-block">
              <h3>Unique</h3>
              <p>Do you want to stand out from the crowd? Become the envy of many by just a few steps.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../assets/img/slider11.jpg" alt="" class="d-block img-fluid">
             <div class="overlay-after"></div>
            <div class="carousel-caption d-none d-md-block">
              <h3>Team Building</h3>
              <p>Joint task Foundation wants to partner with you to help you get to the point of your dreams. Together we can achieve it..</p>
            </div>
          </div>
        </div><!-- /.carousel-inner -->

        <a href="#main-carousel" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only" aria-hidden="true">Prev</span>
        </a>
        <a href="#main-carousel" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only" aria-hidden="true">Next</span>
        </a>
      </div>
      <!-- /.carousel -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 1,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
    
<style scoped>
  .carousel {
      height: 100vh;
    }
    .carousel img {
      height: 100vh;
      width: 100%;
      object-fit :cover;
      filter: brightness(30%);
    }
.carousel-caption h3{
  font-size: 60px;
  font-weight: 900;
  color:aliceblue;

}
.carousel-caption p{
  font-size: 30px;
}
.carousel-caption span{
  color:#5ef4da;

}
    h3 {
      font-size: 40px;
      font-weight: 900;
    }
    p {
      font-size: 20px;
      font-weight: 700;
    }

    .carousel-caption {
      margin-bottom: 100px;
      color: #fff;
      
    }
    /* .overlay-after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #FFF;
     display: block;
    background: rgba(0, 0, 0, .6);
} */
    
</style>