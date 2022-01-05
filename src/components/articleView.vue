<template>
    <router-link :to="'/forum/'+article.id"
        style="min-width:300px"
        class="grid grid-cols-3 gap-2  bg-white group hover:rotate-2 hover:shadow-xl  rounded-md hover:skew-2 transition-all duration-200   border border-gray-300 transform hover:scale-95  hover:border-black shadow-sm">
        <div class="w-full col-span-1 ">
            <img  class="w-full  h-full object-cover" :src="article.image.url" :alt="article.image.name">
        </div>
        <div class="w-full col-span-2 pb-2"> 
            <span
                class="group-hover:font-bold group-hover:text-black  inline-block  py-2 px-4 rounded-full border group-hover:border-black border-gray-300 my-4">{{index}}</span>
            <div class="flex flex-col justify-start items-start">
                <h1 class="text-xl group-hover:underline text-black tracking-wide mb-2"> {{article.title}}</h1>
                <p class="text-sm text-gray-500 line-clamp-3 mb-2"> {{article.description}} </p> <span
                    class="text-sm">{{new Date(article.date).toLocaleString('en-us',{dateStyle:"long"})}} </span>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    name:"articleView",
    props:{
        article:{
            type:Object,
            required:true
        },
        index:{
            type:Number,
            required:false
        }
    }
}
</script>

<style>

</style>