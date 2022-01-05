<template>
  <div class="bg-white border  border-gray-200 shadow-sm w-full md:w-9/12 lg:w-6/12 mb-16 mx-auto">
    <hero-header class="mb-16" />
    <services class="mb-16" />
    <argoments class="mb-16" />
    <icon-learn class="mb-4"/>
    <last-articles class="mb-4"/>
  </div>
</template>

<script>
import IconLearn from '../components/icon_learn.vue'
import Services from '../components/services.vue'
import Last_articles from '../components/Last_articles.vue'
// @ts-ignore
import Argoments from '../components/Argoments.vue'
import hero_header from "../components/hero_header.vue"
export default {
  name:"Home",
  components:{
    IconLearn,
    Services,
    'last-articles':Last_articles,
    'argoments':Argoments,
    'hero-header':hero_header
  },
}
</script>

<style lang="scss" scoped>

</style>