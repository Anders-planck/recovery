<template>
  <div>
    <div class="bg-white border border-t-0 border-gray-200 shadow-lg w-full md:w-10/12 lg:w-6/12  mb-16 mx-auto p-2 pt-0">
      <hero-title :title="preview && title ? title : 'new Article'" :description="preview && description ? description : null" />
      <div class="mb-8 w-full flex space-x-4 bg-white px-8 py-2 md:p-4 justify-end items-center text-right">
        <!-- <h1 class="hidden text-3xl tracking-wider font-semibold">Create new Article</h1> -->
        <button @click="preview=false"
          :class="!preview ? 'border-green-600 text-green-600' : 'text-gray-600 border-gray-300'"
          class="flex justify-center items-center space-x-4  hover:text-green-600 bg-white font-medium hover:bg-green-100 h-full px-4 py-1 rounded-lg border border-1  hover:border-green-600 transform hover:scale-95 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </button>
        <button @click="preview=true"
          :class="preview ? 'border-green-600 text-green-600' : 'text-gray-600 border-gray-300'"
          class="flex justify-center items-center space-x-4 text-gray-600 hover:text-green-600 bg-white font-medium hover:bg-green-100 h-full px-4 py-1 rounded-lg border border-1 border-gray-300 hover:border-green-600 transform hover:scale-95 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
      <div class="flex justify-between bg-white p-4 items-center w-full">
        <form class="w-full" v-if="!preview">
          <div class="flex-col space-y-4 justify-center w-full mb-4">
            <label for="title" class="underline">Title of article</label>
            <input type="text" name="title" id="title" v-model="title" placeholder='title...'
              class="w-full rounded-lg focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
          </div>

          <div class="flex-col space-y-4 justify-center w-full mb-4">
            <label for="description" class="underline">Description of article</label>
            <textarea 
            name="description" 
            id="title" 
            v-model="description" 
            style="min-height:100px"
            placeholder='description...'
              class="w-full rounded-lg focus:ring-green-600  focus:border-transparent border-gray-300 text-black placeholder-gray-500">
              </textarea>
          </div>

          <div class="flex-col space-y-4 justify-center w-full mb-4">
            <label class="underline" for="content">Content of article</label>
            <Editor mode="editable" :model.sync="content" id="content"
              placeholder="write the content of your article here" class="placeholder-gray-500" />
          </div>

          <div class="my-8 w-full flex justify-between items-center text-right">
            <h3 class="tracking-wide font-semibold"><span class="text-red-400 text-xl underline">NB:</span> <span
                class="text-gray-500 text-lg">Please look the preview of your articles first.</span></h3>
            <button
              class="flex justify-center items-center space-x-4 text-gray-600 hover:text-green-600 bg-white font-medium hover:bg-green-100 h-full px-6 py-2 rounded-lg border border-1 border-gray-300 hover:border-green-600 transform hover:scale-95 transition-all duration-200">
              <span class="text-2xl tracking-wider font-semibold"> Create</span>
            </button>
          </div>
        </form>

        <div class="w-full bg-white p-4 lg:p-4" v-else>
          <div class="w-full mx-auto space-y-4 flex flex-col justify-start items-start ">
            <!-- <h1 class="text-3xl tracking-wider underline font-bold">{{title}}.</h1>
            <p class="breack-word">{{description}}.</p> -->
            <Editor mode="preview" :model="content" id="preview" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ts-ignore
import Editor from "@/components/Editor.vue"
import HeroTitle from '../components/hero_title.vue'

export default {
  name:"new",
  components:{
    Editor,
    HeroTitle,
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