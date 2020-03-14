<template>
  <div class="heading-container">
    <slot name="header"></slot>
  </div>
</template>

<style lscoped>
.heading-container {
  background: linear-gradient(45deg, #000000c7, #00000094),
    url('../../assets/img/bitcoin2.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  min-height: 250px;
}

.heading-container h1 {
  padding: 30px 0;
  text-align: center;
  font-size: 70px;
  font-weight: 900;
  color: #fff;
}
</style>