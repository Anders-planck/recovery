<template>
    <div class="w-full flex justify-center items-center ">
        <div class="w-10/12 md:w-3/4 lg:w-3/4 xl:w-1/2 p-4 rounded-md flex flex-col bg-white justify-center items-center border  border-gray-300 shadow-lg">
            <form class="w-full  flex flex-col items-center space-y-4 justify-center">
                <div v-if="error" class="flex flex-col space-y-2 bg-red-200 rounded-sm px-6 py-2 justify-center w-full">
                    <span class="uppercase text-sm text-red-900">{{errorMsg}}</span>
                </div>
                <div v-if="state=='REGISTER'" class="flex flex-col space-y-2 justify-center w-full">
                    <label for="firstName" class="uppercase text-sm">first-name</label>
                    <input type="text" name="firstName" id="firstName" v-model="firstName" placeholder='first-name...'
                        class="w-full rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                </div>
                <div v-if="state=='REGISTER'" class="flex flex-col space-y-2 justify-center w-full">
                    <label for="lastName" class="uppercase text-sm">last-name</label>
                    <input type="text" name="lastName" id="lastName" v-model="lastName" placeholder='last-name...'
                        class="w-full rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                </div>
                <div v-if="state=='REGISTER'" class="flex flex-col space-y-2 justify-center w-full">
                    <label for="username" class="uppercase text-sm">username</label>
                    <input type="text" name="username" id="username" v-model="username" placeholder='Username...'
                        class="w-full rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                </div>
                <div class="flex flex-col space-y-2 justify-center w-full">
                    <label for="email" class="uppercase text-sm">Email</label>
                    <input type="email" name="email" id="email" v-model="email" placeholder='email@example.com'
                        class="w-full rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                </div>
                <div class="flex flex-col space-y-2 justify-center w-full">
                    <label for="password" class="uppercase text-sm">password</label>
                    <input type="password" name="password" id="password" v-model="password" placeholder='***********'
                        class="w-full rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                </div>
                <div v-if="state=='LOGIN'" class="w-full grid grid-cols-2 gap-4">
                    <div class="col-span-2 md:col-span-1 flex justify-start items-center space-x-2">
                        <input type="checkbox" name="remenber" id="remenber" v-model="remenber"
                            class="h-5 w-5 rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                        <label for="password" class="uppercase text-sm">Remenber me</label>
                    </div>
                    <a href="#" class="text-left md:text-right text-sm col-span-2 md:col-span-1 underline text-gray-500 hover:text-gray-700">(Forgot your password ?)</a>
                </div>
                <div v-if="state=='REGISTER'" class="flex flex-col space-y-2 justify-center w-full">
                    <label for="password_confirmation" class="uppercase text-sm">confirm the password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation"
                        v-model="password_confirmation" placeholder='******'
                        class="w-full rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                </div>
                <div class="w-full flex justify-end items-center">
                    <button
                        @click.prevent="register"
                        v-if="state=='REGISTER'"
                        class="flex justify-center items-center space-x-4 text-gray-600 hover:text-green-600 bg-white font-medium hover:bg-green-100 h-full px-6 py-2 rounded-lg border border-1 border-gray-300 hover:border-green-600 transform hover:scale-95 transition-all duration-200">
                        <span  class="text-md tracking-wider font-semibold"> Register</span>
                    </button>
                    <button
                        @click.prevent="login"
                        v-if="state=='LOGIN'"
                        class="flex justify-center items-center space-x-4 text-gray-600 hover:text-green-600 bg-white font-medium hover:bg-green-100 h-full px-6 py-2 rounded-lg border border-1 border-gray-300 hover:border-green-600 transform hover:scale-95 transition-all duration-200">
                        <span  class="text-md tracking-wider font-semibold">Login</span>
                    </button>
                </div>
                <div v-if="state=='REGISTER'" class="w-full flex justify-start items-center">
                    <h3 class="tracking-wide font-light text-left w-full ">
                        <span class="text-red-400 text-lg underline">NB:</span>
                        <span class="text-gray-500 text-sm break-words">
                            Your personal data (email and username) are only used for authentication purposes and are not shared with third parties <span class="underline">(Find out more)</span>.
                        </span>
                    </h3>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from '../firebase/firebaseInit'
export default {
    props:{
        state:{
            type:String,
            required:true
        }
    },
    data: ()=> ({
        username:'',
        email:'',
        password:'',
        remenber:'',
        lastName:'',
        firstName:'',
        password_confirmation:'',
        error:false,
        errorMsg:''
    }),
    watch:{
    username(val,oldVal){
      localStorage.setItem("Form-LoginRegister-username",val)
    },
    lastName(val,oldVal){
      localStorage.setItem("Form-LoginRegister-lastName",val)
    },
    firstName(val,oldVal){
      localStorage.setItem("Form-LoginRegister-firstName",val)
    },
    email(val,oldVal){
      localStorage.setItem("Form-LoginRegister-email",val)
    },
  },
  created(){
    let u,e,l,f
    if((l = localStorage.getItem("Form-LoginRegister-lastName"))) this.lastName = l
    if((f = localStorage.getItem("Form-LoginRegister-firstName"))) this.firstName = f
    if((u = localStorage.getItem("Form-LoginRegister-username"))) this.username = u
    if((e = localStorage.getItem("Form-LoginRegister-email"))) this.email = e
  },
  methods:{
    async register(){
        if(this.lastName!=='' && this.firstName!=='' && this.username!=='' && this.email!==''&& this.password!=='' && this.password_confirmation!==''){
            this.error=false
            this.errorMsg=''
            const firebaseAuth = await firebase.auth();
            const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email,this.password);
            const result = await createUser;
            const database = db.collection("users").doc(result.user.uid);
            await database.set({
                email: this.email,
                username: this.username,
                lastName: this.lastName,
                firstName: this.firstName,
            })
            this.$router.push('/dashboard')
            return;
        }
        this.error=true
        this.errorMsg="Please fill out all the filed !"
        setTimeout(()=>{
        this.error=false
        this.errorMsg=""
      },5000)
        return;
    },
    login(){
        if(this.email!=='' && this.password!==''){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(() =>{
                this.error=false
                this.errorMsg=''
                this.$router.push('/dashboard')
                console.log(firebase.auth().currentUser.uid)
            })
            .catch( error => {
                this.error=true
                this.errorMsg=error.message
                setTimeout(()=>{
                    this.error=false
                    this.errorMsg=""
                },5000)
            })
            return;
        }
        this.error=true
        this.errorMsg='Please fill out all the field'
        setTimeout(()=>{
        this.error=false
        this.errorMsg=""
        },5000)
    }
  }
}
</script>

<style>

</style>