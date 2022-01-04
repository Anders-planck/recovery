<template>
  <div class="bg-white border border-t-0 border-gray-200 shadow-lg w-full md:w-9/12 lg:w-6/12 mb-16 mx-auto">
    <hero-title title="Forum"/>
    <list-articles class="my-16"/>
  </div>
</template>

<script>
import HeroTitle from '../components/hero_title.vue'
import Last_articles from '../components/Last_articles.vue'
import ListArticles from '../components/ListArticles.vue'
// @ts-ignore
export default {
  name:"Articles",
  components:{
    HeroTitle,
    'last-articles':Last_articles,
    'list-articles':ListArticles,
  },
}
</script>

