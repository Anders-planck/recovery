<template>
  <div class="w-full md:w-8/12 lg:w-7/12 xl:w-4/12 mb-16 mx-auto">
    <hero-title title="Register "/>

    <login-register state="REGISTER" class="my-32"/>
  </div>
</template>

<script>
import LoginRegister from '../components/LoginRegister.vue'
import HeroTitle from '../components/hero_title.vue'
// @ts-ignore
export default {
  name:"Register",
  components:{
    LoginRegister,
    HeroTitle,
  },
}
</script>

