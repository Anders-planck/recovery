<template>
    <div class="w-full">
        <div class="grid grid-cols-2  bg-white p-8 grid-rows-2 gap-x-4 gap-y-8">
            <div class="transition-all duration-200  group col-span-2 xl:col-span-1 border border-gray-300  hover:border-black p-4 shadow-sm">
                <h1 class="text-3xl font-black underline text-black tracking-wider mb-2"> the last 3 articles.</h1>
            </div>
            <article-view 
            class="bg-white group hover:rotate-2 hover:shadow-xl  rounded-md hover:skew-2 transition-all duration-200 col-span-2 md:col-span-1  border border-gray-300 transform hover:scale-95  hover:border-black shadow-sm"
            v-for="(article,index) in Articles" 
            :key="article.id"
            :index="index" 
            :article="article"/>
        </div>
    </div>
</template>

<script>
import articleView from "../components/articleView.vue"
export default {
    name:'last_articles',
    created(){
        this.$store.dispatch("getArticles")
    },
    computed:{
        Articles(){
            return this.$store.getters.LastArticles
        }
    },
    components:{
        "article-view":articleView
    },
}
</script>

<style>

</style>