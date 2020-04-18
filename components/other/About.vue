<template>
  <div id="about">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6 about-img" data-aos="fade-up-right" data-aos-duration="2000">
          <img src="../../assets/img/bitcoin2.jpg" alt="about-image" class="img-fluid d-sm-none hidden-sm" />
        </div>
        <div class="col-md-6" data-aos="fade-down" data-aos-duration="2000">
          <div class="heading" >
            <h1 class="text-center">About JTF</h1>
          </div>
          <p>
            Joint Task Foundation is a Multi Level Marketing born out of passion in offering a life changing opportunities. The founding members are all networkers who come together towards achieving a great success. 
          </p>

          <p>
            Joint Task Foundation is about helping and enriching humanity across the globe by empowering individuals and cooperate bodies. We are here to work with you and through you empower others.
          </p>
          <div class="text-center">
            <!-- <button class="btn btn-blue">Read More</button> -->
          </div>
        </div>
      </div>
      <hr class="mt-5 mb-5">
      <div class="row " data-aos="fade-up-right" data-aos-duration="2000">
        <div class="col-md-6">
          <div class="flex-container">
            <div class="flex-body">
              <p><i class="fa fa-eye"></i></p>
            </div>
            <div class="flex-body">
              <h3>Our Mission</h3>
              <p>To eradicate poverty in the lives of people</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
         <div class="flex-container">
          <div class="flex-body">
            <p><i class="fa fa-eye"></i></p>
          </div>
          <div class="flex-body">
            <h3>Our Vision</h3>
          <p>To be dream achievers. Search out for 
              innovative ways to build up our organization
              to achieve high quality of life and
              prosperity for our partners and the 
              less privileged members of the larger 
              society
              </p>
          </div>
         </div>
          
          
        </div>
      </div>
    </div>
    <div class="bubble-left">
      <img src="../../assets/img/bubble-l.png" alt="">
    </div>
    <div class="bubble-right">
      <img src="../../assets/img/bubble-r.png" alt="">
    </div>
  </div>
</template>

<style scoped>
#about {
  /* margin: 80px 0; */
  min-height: 75vh;
  background: #ebf0f4;
      padding: 9rem 0 12rem;
}

#about p {
  text-align: justify;
}
 .heading h1:after{
      border-bottom:3px solid #22395d;
      /* height:20px; */
      width:100px;
      text-align: center;
      display:block;
      padding:5px;
      content:'';
      margin:auto;
    }
    .heading h1{
    border-bottom: 1px solid #cccccc;
    width: max-content;
    margin: auto;
    margin-bottom: 29px;
    color:#22395d;
    font-weight:900;
    }
    .about-img img{
      border-bottom-left-radius:50px;
      border-top-right-radius:50px;
      border-top-left-radius:50px;
       
    }
    .flex-container {
  display: flex;
}
.flex-body i {
    border: 1px solid #22395d;
    padding: 3px 9px;
    color: #22395d;
    margin-right: 10px;
}
.bubble-right{
  position: absolute;
  right: 0;
}
.bubble-left{
  position: absolute;
  left: 0;
}
.flex-body h3{
  font-weight: 900;
  color:#22395d;
}
</style>