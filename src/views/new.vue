<template>
  <div>
    <div
      class="bg-white border  border-gray-200 shadow-lg w-full md:w-10/12 lg:w-6/12  mb-16 mx-auto p-2 pt-0">
      <hero-title :title="preview && title ? title : 'new Article'"
        :description="preview && description ? description : null" />
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
          <transition enter-active-class="animate__animated animate__flipInX"
            leave-active-class="animate__animated animate__flipOutX">
            <div v-if="error"
              class="mb-4 flex flex-col space-y-2 bg-red-200 rounded-sm px-6 py-2 justify-center w-full">
              <span class="uppercase text-sm text-red-900">{{errorMsg}}</span>
            </div>
          </transition>
          <div class="flex-col space-y-4 justify-center w-full mb-4">
            <label for="title" class="underline">Title of article</label>
            <input type="text" name="title" id="title" v-model="title" placeholder='title...'
              class="w-full rounded-lg focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
          </div>

          <div class="flex-col space-y-4 justify-center w-full mb-4">
            <label for="description" class="underline">Description of article</label>
            <textarea name="description" id="title" v-model="description" style="min-height:50px"
              placeholder='description...'
              class="w-full rounded-lg focus:ring-green-600  focus:border-transparent border-gray-300 text-black placeholder-gray-500">
            </textarea>
            <!-- <vue-editor 
              :editorOptions="editorSettings" 
              v-model="description" 
              useCustomImageHandler
              @image-added="imageHandler" /> -->
          </div>

          <div class="flex-col space-y-4 justify-center w-full mb-4">
            <label for="image" class="form-label underline">Image of article</label>
            <input
            @change="chooseFile($event)"
            type="file"
            name="image"
            id="image"
            accept=".jpg,.png,.jpeg"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            </div>

          <div class="flex-col space-y-4 justify-center w-full mb-4">
            <label class="underline" for="content">Content of article</label>
            <Editor mode="editable" :model.sync="content" id="content"
              placeholder="write the content of your article here" class="placeholder-gray-500" />
          </div>

          <div class="my-8 w-full flex justify-between items-center text-right">
            <h3 class="tracking-wide font-semibold"><span class="text-red-400 text-xl underline">NB:</span> <span
                class="text-gray-500 text-lg">Please look the preview of your articles first.</span></h3>
            <button @click.prevent="createArticle"
              class="flex justify-center items-center space-x-4 text-gray-600 hover:text-green-600 bg-white font-medium hover:bg-green-100 h-full px-6 py-2 rounded-lg border border-1 border-gray-300 hover:border-green-600 transform hover:scale-95 transition-all duration-200">
              <span class="text-2xl tracking-wider font-semibold"> Create</span>
            </button>
          </div>
          <transition enter-active-class="animate__animated animate__flipInX"
            leave-active-class="animate__animated animate__flipOutX">
            <div v-if="error"
              class="mb-4 flex flex-col space-y-2 bg-red-200 rounded-sm px-6 py-2 justify-center w-full">
              <span class="uppercase text-sm text-red-900">{{errorMsg}}</span>
            </div>
          </transition>
        </form>

        <div class="w-full bg-white p-4 lg:p-4" v-else>
          <div class="w-full mx-auto space-y-4 flex flex-col justify-start items-start ">
            <!-- <h1 class="text-3xl tracking-wider underline font-bold">{{title}}.</h1> -->
            <!-- <div class="breack-words w-full overflow-hidden" v-html="description"></div> -->
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
import firebase from 'firebase/compat/app';
import "firebase/compat/storage"
import 'firebase/compat/firestore';
import db from '../firebase/firebaseInit'
import Quill from 'quill';
// @ts-ignore
window.Quill= Quill
const ImageResize = require('quill-image-resize-module').default;
import { ImageDrop } from 'quill-image-drop-module'
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop)
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
    image:null,
    preview:false,
    error:false,
    errorMsg:'',
    editorSettings:{
      modules:{
        imageDrop:true,
        imageResize:{}
      }
    }
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
  methods:{
    async createArticle(){
      if(this.content!="" && this.title!='' && this.description!='' && this.image){
        
        this.error=false
        this.errorMsg=""
        const storageRef = firebase.storage().ref();
        const docRef = storageRef.child(`document/forum/photo/${this.image.name}`);
        docRef.put(this.image).on("state_changed",
        (snapshot)=>{
          console.log(snapshot)
        },(err)=>{
          console.log(err)
        },async ()=>{
          const downloadUrl = await docRef.getDownloadURL();
          const database = await db.collection("articles").doc()
          await database.set({
            id: database.id,
            title: this.title,
            description:this.description,
            content:this.content,
            user_id: this.$store.state.user.id,
            date: Date.now(),
            ImageName:this.image.name,
            url: downloadUrl
          })
        })
        this.$router.push(`/forum`)
        return;
      }
      this.error=true
      this.errorMsg="Please fill out all field"
      setTimeout(()=>{
        this.error=false
        this.errorMsg=""
      },5000)
      return;
    },
    chooseFile(event) {
    this.image = event.target.files[0]
    }
    // imageHandler(file, Editor, cursorLocation, resetUploader){
    //   const storageRef = firebase.storage().ref();
    //   const docRef = storageRef.child(`document/forum/photo/${file.name}`);
    //   docRef.put(file).on("state_changed",
    //   (snapshot)=>{
    //     console.log(snapshot)
    //   },(err)=>{
    //     console.log(err)
    //   },async ()=>{
    //     const downloadUrl = await docRef.getDownloadURL();
    //     Editor.insertEmbed(cursorLocation,"image",downloadUrl);
    //     resetUploader();
    //   }
    //   )
    // }
  },
  created(){
    let t,d,c
    if((t = localStorage.getItem("Form-title"))) this.title = t
    if((d = localStorage.getItem("Form-description"))) this.description = d
    if((c = localStorage.getItem("Form-content"))) this.content = c
  }
}
</script>

<style>

</style>