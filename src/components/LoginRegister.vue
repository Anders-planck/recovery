<template>
    <div class="w-full flex justify-center items-center ">
        <div class="w-10/12 md:w-2/3 lg:w-1/2 p-4 rounded-md flex flex-col bg-white justify-center items-center border  border-gray-300 shadow-lg">
            <form class="w-full  flex flex-col items-center space-y-4 justify-center">
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
                        v-model="password_confirmation" placeholder='***********'
                        class="w-full rounded-sm focus:ring-green-600 focus:border-transparent border-gray-300 text-black placeholder-gray-500">
                </div>
                <div class="w-full flex justify-end items-center">
                    <button
                        v-if="state=='REGISTER'"
                        class="flex justify-center items-center space-x-4 text-gray-600 hover:text-green-600 bg-white font-medium hover:bg-green-100 h-full px-6 py-2 rounded-lg border border-1 border-gray-300 hover:border-green-600 transform hover:scale-95 transition-all duration-200">
                        <span  class="text-md tracking-wider font-semibold"> Register</span>
                    </button>
                    <button
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
        password_confirmation:''
    }),
    watch:{
    username(val,oldVal){
      localStorage.setItem("Form-LoginRegister-username",val)
    },
    email(val,oldVal){
      localStorage.setItem("Form-LoginRegister-email",val)
    },
  },
  created(){
    let u,e,p,r
    if((u = localStorage.getItem("Form-LoginRegister-username"))) this.username = u
    if((e = localStorage.getItem("Form-LoginRegister-email"))) this.email = e
  }
}
</script>

<style>

</style>