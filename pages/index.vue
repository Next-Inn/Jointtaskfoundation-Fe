<template>
  <div>
    <slider/>
    <Whysection/>
    <About id="about"/>
    <How id="how-benefit"/>
    <Marketplan/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Slider from '~/components/other/Slider'
import Whysection from '~/components/other/Whysection'
import About from '~/components/other/About'
import How from '~/components/other/How'
import Marketplan from '~/components/other/Marketplan'

export default {
  components: {
    Slider,
    Whysection,
    About,
    How,
    Marketplan
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
