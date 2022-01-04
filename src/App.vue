<template>
  <div id="app">
    <Navbar/>
    <transition :name="transitionName" :enter-active-class="'animate__animated animate__'+transitionName">
      <router-view></router-view>
    </transition>
    <footer-end/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer_end from './components/Footer_end.vue'
export default {
components: {
    Navbar,
    'footer-end':Footer_end
  },
  data:()=>({
    transitionName:"slideInRight"
  }),
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slideInRight' : 'slideInLeft'
  }
}
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app,li,.v-md-editor__tooltip,.ecran{
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


.polygone{
  clip-path: polygon(0% 0%, 100.3% 0%, 100.3% 84%, 0% 100%);
}
.polygone-inverse{
  height:300px;
  clip-path: polygon(0% 0%, 100.3% 0%, 100.3% 100.8%, 0% 67.3%);
}

body{
background-image: repeating-conic-gradient(#ececeee1 0% 25%, #ffffff 0% 50%);
background-position: 0 0, 100px 100px;
background-size: 200px 200px;
background-color: #ffffff;
}

h1,h2,h3,h4,h5,h6{
 text-transform: capitalize ;
 font-weight: bold;
}

a {
  color: #2c3e50;

  &.router-link-exact-active {
      color: #42b983;
  }
}

</style>
