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
        <div class="grid grid-cols-3 z-10 bg-white p-8 gap-x-8 gap-y-8">
            <a 
            v-for="(article,index) in filterArticles" 
            :href="'/forum/'+article.id"
            :key="article.id"
            class="bg-white group hover:rotate-2 hover:shadow-xl  rounded-md hover:skew-2 transition-all duration-200 col-span-2 md:col-span-1  border border-gray-300 transform hover:scale-95  hover:border-black p-4 shadow-sm">
                <span
                    class="group-hover:font-bold group-hover:text-black  inline-block  py-2 px-4 rounded-full border group-hover:border-black border-gray-300 my-4">{{index}}</span>
                <h1 class="text-xl group-hover:underline text-black tracking-wide mb-2"> {{article.title}}</h1>
                <p class="text-sm text-gray-500 line-clamp-3">
                    {{article.description}}
                </p>
            </a>
        </div>
    </div>
</template>

<script>
var posts = []
for (let i = 0; i < 8; i++) {
    let post = {
        id: i,
        title:  'Lorem, ipsum dolor '+i,
        description:'Lorem ipsum dolor sit amet.consectetur adipisicing elit.Impedit nihil tempore a optio? Totam, sequi.Impedit nihil tempore a optio? Totam, sequi.'
    }
    posts.push(post)
}
export default {
    name:'listArticles',
    data:()=>({
        search:'',
        Articles:posts,
    }),
    computed:{
        filterArticles(){
            if(this.Articles.length!=0){
                return this.Articles.filter((a)=> {
                    if(a.title.toLowerCase().includes(this.search.toLowerCase()) || a.description.toLowerCase().includes(this.search.toLowerCase())) 
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