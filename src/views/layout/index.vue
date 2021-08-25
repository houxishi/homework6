<template>
  <div class="box">
    <Leftnav></Leftnav>
    <div class="right">
      <Header></Header>
      <div class='main'>
        <router-view/>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import Header from './Header.vue'
import Leftnav from './Leftnav.vue'
import Footer from './Footer.vue'
// import asyncRouter  from '../router/dynamic.js'

// import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Leftnav,
    Header,
    Footer
  },
  data(){
        return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.box {
    display: flex;
    width: 100%;
    min-height: 100vh;
}

.right {
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
}

.main {
    flex:1;
    margin: 10px;
}


</style>
