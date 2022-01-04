<template>
  <div>
    <div class="bg-white border border-t-0 border-gray-200 shadow-lg w-full md:w-10/12 lg:w-6/12  mb-16 mx-auto p-2 pt-0">
          <hero-title :title="title +'  '+ $route.params.id" :description="description" class="mb-8"/>

          <div class="w-full p-4 mx-auto space-y-4 flex flex-col justify-start items-start ">
            <!-- <h1 class="text-3xl tracking-wider underline font-bold">{{title}}.</h1> -->
            <!-- <p class="breack-word">{{description}}.</p> -->
            <Editor 
            mode="preview" 
            :model="content" />
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
    data:() => ({
        content:'',
        description:'',
        title:'',
        preview:false,
    }),
    watch:{
        content(val,oldVal){
        localStorage.setItem("Form-content",val)
        },
        title(val,oldVal){
        localStorage.setItem("Form-title",val)
        },
        description(val,oldVal){
        localStorage.setItem("Form-description",val)
        }
    },
    created(){
        let t
        let d
        let c
        if((t = localStorage.getItem("Form-title"))) this.title = t
        if((d = localStorage.getItem("Form-description"))) this.description = d
        if((c = localStorage.getItem("Form-content"))) this.content = c
    }
}
</script>

<style>

</style>