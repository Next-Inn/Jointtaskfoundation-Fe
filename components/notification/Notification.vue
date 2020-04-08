<template>
  <div class="alert alert-danger text-center py-4" role="alert">
    <strong>{{message}}</strong>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message']
}
</script>