<template>
    <div id="why-section">
        <div class="container mt-5 mb-5">
          <div class="heading text-center my-5" data-aos="fade-down" data-aos-duration="2000">
            <h1 class="headingh1">Our Services</h1>
            <p>As an organization, our partners enjoys the full benefits of a life-changing opportunities and service support </p>
          </div>

          <div class="row text-center why_section_details">
            <div class="col-md-3 col-6" data-aos="fade-right" data-aos-duration="2000">
              <!-- <i class="fa fa-diamond"></i> -->
              <i class="fas fa-hamburger ourserviceicon fa-3x"></i>
              <h3>Nutrition</h3>
              <p>Drive HUNGER strife from our homes</p>
            </div>
            <div class="col-md-3 col-6" data-aos="fade-up" data-aos-duration="2000">
              <i class="fa fa-graduation-cap ourserviceicon fa-3x"></i>
              <h3>Education</h3>
              <p>Promote educational quality in our society</p>
            </div>
            <div class="col-md-3 col-6" data-aos="fade-up" data-aos-duration="2000">
              <i class="fas fa-briefcase ourserviceicon fa-3x"></i>
              <h3>Employment</h3>
              <p>Employ and Empower ourselves.</p>
            </div>
            <div class="col-md-3 col-6" data-aos="fade-left" data-aos-duration="2000">
              <i class="fas fa-money ourserviceicon fa-3x"></i>
              <h3>Investment</h3>
              <p>Invest together for a better tomorrow.</p>
            </div>
             <div class="baloon">
        <img class="d-block img-fluid" src="../../assets/img/baloon.png" alt="">
      </div>
          </div>
      </div>
     
    </div>
</template>

<style scoped>
    #why-section {
        /* margin: 100px 0 70px; */
        min-height: 70vh;
    }
.baloon img{
  position:absolute;
  left:0;
  width:inherit;
}
    .why_section_details {
        margin: 100px 0;
    }

    #why-section h3 {
        font-weight: 800;
    }

    #why-section i {
        color: var(--main-bg-color);
        margin-bottom: 10px;
    }
    .heading p::after{
      border:1px solid red;
    }
    .ourserviceicon{
          border: 2px solid;
    padding: 10px;
    margin-bottom:5px;
    }
  @media(max-width:1200px){
     .why_section_details {
        margin: 0;
    }
    .baloon{
      position: absolute;
    }
  }
   
</style>