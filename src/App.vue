<template>
  <div>
    <Master/>
    <router-view></router-view>
  </div>
</template> 

<script>
import Master from "./Layout/Master.vue"
export default {
  name: 'App',
  components: {Master},
  data(){
    return {
      cart: []
    }
  }
}
</script>

<style>

</style>