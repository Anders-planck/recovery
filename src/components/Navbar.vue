<template>
    <div class="w-full z-20 sticky top-0  border border-t-0 border-gray-200 bg-white ">
        <div class="   w-full lg:w-8/12 mx-auto md:w-10/12   flex justify-between items-center  px-8 py-2">
            <div class="flex lg:space-x-32 md:space-x-16 space-x-8 items-center">
                <router-link to="/" class=" flex justify-center items-center space-x-2 text-3xl tracking-wider hover:text-green-600 transition-all duration-200">
                For_An
                </router-link>
                <nav class="md:flex justify-center items-center space-x-4 mt-2 hidden ">
                    <router-link to="/"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Home
                    </router-link>
                    <router-link to="/forum"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Forum
                    </router-link>
                    <router-link to="/material"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Material
                    </router-link>
                    <router-link to="/about"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        About Us
                    </router-link>
                </nav>
            </div>
            <div class="flex justify-center items-center space-x-4 mt-2">
                <router-link v-if="isLogin" to="/new"
                    class="text-green-600 bg-white font-medium hover:bg-green-100 h-full px-6 py-1 rounded-lg border border-1 border-gray-300 hover:border-green-900 transform hover:scale-95 transition-all duration-200">
                    new
                </router-link>
                <router-link v-if="!isLogin" to="/login" class="hidden md:inline-block text-gray-500 h-full font-medium hover:underline hover:text-green-900">
                    Login
                </router-link>
                <router-link v-if="!isLogin" to="/register" class="hidden md:inline-block text-gray-500 h-full font-medium hover:underline hover:text-green-900">
                    Register
                </router-link>

                <div v-if="isLogin" class="relative">
                    <button @click="showMenuInfoUser=!showMenuInfoUser" class="bg-black px-2 pb-1 pt-2 uppercase rounded-full md:inline-block text-white tracking-wider  h-full font-medium transform cursor-pointer  hover:scale-95">
                        {{this.$store.state.user.initials}}
                    </button>
                    <transition 
                    enter-active-class="animate__animated animate__flipInX" 
                    leave-active-class="animate__animated animate__flipOutX">
                        <div v-if="showMenuInfoUser" style="width:300px;bottom: -170px;left:-266px" class="absolute block  p-2 bg-black text-white">
                            <div class="grid grid-cols-2 gap-4 p-2">
                                <h1 class="col-span-1 flex border-r-2 border-gray-400  justify-center items-center text-xl uppercase   text-white tracking-wider  h-full font-medium transform cursor-pointer  hover:scale-95">
                                    <span class="border-2 border-white rounded-full p-2">{{this.$store.state.user.initials}}</span>
                                </h1>
                                <div class="col-span-1 flex flex-col space-y-2 justify-start items-start">
                                    <h3 class="block w-full text-sm pt-1">{{this.$store.state.user.firstName}}</h3>
                                    <h3 class="block w-full text-sm border-t border-white pt-1">{{this.$store.state.user.lastName}}</h3>
                                    <h5 class="text-sm w-full italic border-t border-white pt-1">{{this.$store.state.user.email}}</h5>
                                </div>
                            </div>
                            <div class="border-t border-white p-2 grid grid-cols-2 gap-4">
                                <router-link  to="/dashboard" class="hidden md:inline-block border-r-2 border-gray-400 text-white h-full font-bold hover:underline">
                                    dashboard
                                </router-link>
                                <button @click="LogOut" class="hidden md:inline-block text-white h-full font-bold hover:underline ">
                                    Log-Out
                                </button>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export default {
    name:"Navbar",
    created(){
        console.log(this.$store.state.user)
    },
    computed:{
        isLogin(){
            if(this.$store.state.isLogged) return true 
            return false
        }
    },
    data:()=>({
        showMenuInfoUser:false
    }),
    methods:{
        LogOut(){
            firebase.auth().signOut();
            window.location.reload();
        }
    }
}
</script>

<style>

</style>