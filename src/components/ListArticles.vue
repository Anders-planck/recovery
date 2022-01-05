<template>
    <div class="w-full">
          <div class="flex  justify-end items-center p-4 w-full mb-4">
            <div class=" group flex border border-gray-300 transition-all duration-200 hover:border-green-600 justify-center items-center px-8 py-1 rounded-full">
                <label for="title" class="underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </label>
            <input type="text" name="title" id="title" v-model="search" placeholder='search...'
              class="w-full border-0  rounded-full focus:ring-0 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
            </div>
          </div>
        <div class="grid  grid-cols-2  z-10 bg-white p-8 gap-x-8 gap-y-8">
            <article-view 
            class="col-span-2 xl:col-span-1"
            v-for="(article,index) in filterArticles" 
            :key="article.id"
            :index="index" 
            :article="article"/>
        </div>
    </div>
</template>

<script>
import articleView from "../components/articleView.vue"
export default {
    name:'listArticles',
    data:()=>({
        search:'',
    }),
    components:{
        "article-view":articleView
    },
    created(){
        this.$store.dispatch("getArticles")
    },
    computed:{
        filterArticles(){
            if(this.$store.state.articles && this.$store.state.articles.length!=0){
                return this.$store.state.articles.filter((a)=> {
                    if(a.title.toLowerCase().includes(this.search.toLowerCase())) 
                        return a
                })
            }
            return []
        }
    }
}
</script>

<style lang="scss">
.ombre {
    transition: all .2s ease-in-out;
}
</style>