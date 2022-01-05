<template>
  <div class="w-full">
    <v-md-editor v-if="mode!='preview'"
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link code "
    right-toolbar="emoji todo-list tip | preview toc sync-scroll fullscreen |  image"
    v-model="value"
    :disabled-menus="[]"
    @upload-image="imageHandle"
    @copy-code-success="handleCopyCodeSuccess"
    :mode="mode"
    @change="change"
     height="700px"
    class="font-sans"
    default-show-toc
    toc-nav-position-right
    autofocus>
    </v-md-editor> 

    <v-md-editor v-else
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"
    right-toolbar="emoji todo-list tip | preview toc sync-scroll fullscreen"
    v-model="model"
    @copy-code-success="handleCopyCodeSuccess"
    :mode="mode"
    class="font-sans">
    </v-md-editor>    
  </div>
</template>

<script>

import firebase from 'firebase/compat/app';
import "firebase/compat/storage"
import 'firebase/compat/firestore';
import db from '../firebase/firebaseInit'
  export default {
    name:"Editor",
    props:{
        mode:{
            type:String,
            required: false,
            default: "edit"
        },
        model: String
    },
    data:() => ({
        value:''
    }),
    mounted(){
        console.log(this.model)
        if(this.model) this.value = this.model
    },
    methods: {
      handleCopyCodeSuccess(code) {
        var copy= document.createElement("textarea")
        copy.classList.add("hidden")
        copy.value = code
        document.body.appendChild(copy)
        copy.focus()
        copy.select()
        document.execCommand("copy")
        document.body.removeChild(copy)
      },
      change(text,html){
          this.$emit("update:model",text)
      },
      imageHandle(event, insertImage,files){
        console.log(files[0])
        const storageRef = firebase.storage().ref();
        const file= files[0]
        const docRef = storageRef.child(`document/forum/photo/${file.name}`);
         docRef.put(file).on("state_changed",
         (snapshot)=>{
          console.log(snapshot)
         },(err)=>{
           console.log(err)
         },async ()=>{
          const downloadUrl = await docRef.getDownloadURL();
          insertImage({
            url: downloadUrl,
            desc: 'desc',
            width: 'auto',
            height: 'auto',
          });
         })
      }
    },
  };
</script>
