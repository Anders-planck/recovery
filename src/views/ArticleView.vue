<template>
  <div v-if="article">
    <div class="bg-white border  border-gray-200 shadow-sm w-full md:w-10/12 lg:w-6/12  mb-16 mx-auto p-2 pt-0">
          <hero-title :title="article.title" :description="article.description"  class="mb-8"/>
          <div class="w-full p-4 mx-auto space-y-4 flex flex-col justify-start items-start ">
            <!-- <h1 class="text-3xl tracking-wider underline font-bold">{{article.title}}.</h1> -->
            <!-- <div class="breack-words" v-html="article.description"></div> -->
              <span class="text-sm">Post on : {{new Date(article.date).toLocaleString('en-us',{dateStyle:"long"})}} </span>
              <Editor 
              mode="preview"
              
              :model="article.content" />
          </div>
      </div>
  </div>
</template>

<script>
import Editor from "../components/Editor.vue"
import HeroTitle from '../components/hero_title.vue'
export default {
    name:'article_view',
    components:{
        HeroTitle,
        Editor
    },
    created(){
      this.$store.dispatch("getArticles")
    },
    computed:{
      article(){
        return this.$store.state.articles.filter(a => a.id == this.$route.params.id)[0]
      }
    }
}
</script>

<style>

</style>