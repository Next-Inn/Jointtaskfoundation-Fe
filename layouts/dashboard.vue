<template>
  <div>
    <Sidebar/>
    <nuxt />
  </div>
</template>

<script>
import Sidebar from '~/components/partials/DashboardSideNav'
export default {
  components: {
    Sidebar
  },

  middleware: 'auth'
}
</script>

<style scoped>
:root {
  --main-bg-color: #23395d;
  --main-txt-color: blue;
  --white: #fff;
  --main-padding: 15px;
}

body {
  margin: 0;
  padding: 0;
}

/* .main {
  background: rgba(7, 7, 14, 0.15);
  position: relative;
  float: right;
  width: calc(100% - 100px);
} */

.navbar {
  border: 0;
  font-size: 1rem;
  border-radius: 0;
  min-height: 50px;
  max-height: 70px;
  background: #fff !important;
  padding-left: 24px;
  padding-right: 24px;
  transition: 2s;
}

/* .main .content {
  padding: 30px 15px;
  min-height: calc(100vh - 160px);
  margin-top: 30px;
  background: #f2edf3;
} */
</style>
