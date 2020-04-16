<template>
  <div>
  <section id="how">
    <div class="container mt-3">
      <div class="heading"  data-aos="fade-down" data-aos-duration="2000">
        <h1>Benefits</h1>
        <p>As a partner, you get to enjoy all these benefits</p>
      </div>
      <div class="row how_details" >
        
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4">
              <div class="benefit-box  mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">
                  <div class="screw-icon"><p>1</p></div>
                  <p class="text-bold-lg">Become a millionaire</p>
                </div>
              </div>
              
            </div>
            <div class="col-md-4">
              <div class="benefit-box  mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">
                  <div class="screw-icon"><p>2</p></div>
                  <p class="text-bold-lg">House and Office Appliances</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="benefit-box  mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">  
                  <div class="screw-icon"><p>3</p></div>
                  <p class="text-bold-lg">Food security</p>
                </div>
              </div>
              
            </div>
            <div class="col-md-4">
              <div class="benefit-box  mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">  
                  <div class="screw-icon"><p>4</p></div>
                  <p class="text-bold-lg"> International Trips</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="benefit-box  mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">
                 <div class="screw-icon"><p>5</p></div>
                  <p class="text-bold-lg">House Funding</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefit-box  mb-5" data-aos="fade-up" data-aos-duration="4000">
               <div class="benefit-text"> 
                  <div class="screw-icon"><p>6</p></div>
                  <p class="text-bold-lg">Scholarship</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefit-box mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">
                   <div class="screw-icon"><p>7</p></div>
                  <p class="text-bold-lg">Business Startup </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="benefit-box mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">
                  <div class="screw-icon"><p>8</p></div>
                  <p class="text-bold-lg"> Cash Drops </p>
                  </div>
              </div> 
            </div>
            <div class="col-md-4">
              <div class="benefit-box mb-5" data-aos="fade-up" data-aos-duration="4000">
                <div class="benefit-text">
                <div class="screw-icon"><p>9</p></div>
                  <p class="text-bold-lg">Loans</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="text-center">
        <button class="btn btn-blue">Learn More</button>
      </div> -->
    </div>
  </section>
  </div>
</template>

<style scoped>
#how {
  /* margin-top: 100px; */
  background: linear-gradient(to bottom, rgba(34, 57, 93, 0.89), rgba(34, 57, 93, 0.96)),url(../../assets/img/thinking-man.png);
  background-size: 100% 100%;
  background-attachment: fixed;
  min-height: 65vh;
  color: #fff;
  padding: 60px 0;
  text-align: center;
}

#how p {
  text-align: center;
}

.how_details {
  margin: 80px 0;
}

/* .benefit-box {
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
  transform: rotateZ(56deg) !important;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 10rem
} */

.benefit-text {
  justify-content: center;
  align-items: center ;
  /* transform: rotateZ(-40deg) !important; */
  
}
 .heading h1:after{
      border-bottom:3px solid #5ef4da;
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
    color:#fff;
    font-weight:900;
    }
    .screw-icon{
    border: 2px solid;
    padding: 9px;
    /* position: relative; */
    margin-top: 36px;
    transform: rotateZ(45deg);
    margin-bottom: 15px;
    width: 50px;
    height: 50px;
    margin:0 auto;
    font-size: 27px;
    font-weight: 900;
     margin-bottom: 15px;
    }
    .screw-icon p{
      transform: rotateZ(-48deg);
    font-size: 35px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: -10px;
}
.text-bold-lg{
font-weight: 900;
}
    
</style>