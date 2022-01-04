<template>
    <div class="w-full z-20 sticky top-0 ">
        <div class="sticky bg-white border border-t-0 border-gray-200  w-full lg:w-8/12 mx-auto md:w-10/12   flex justify-between items-center md:p-2 p-4">
            <div class="flex lg:space-x-32 md:space-x-16 space-x-8 items-center">
                <a href="/" class=" flex justify-center items-center space-x-2 text-3xl tracking-wider hover:text-green-600 transition-all duration-200">
                For_An
                </a>
                <nav class="md:flex justify-center items-center space-x-4 mt-2 hidden ">
                    <a href="/"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Home
                    </a>
                    <a href="/Forum"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Forum
                    </a>
                    <a href="/material"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Material
                    </a>
                    <a href="/about"
                        class="text-gray-500 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        About Us
                    </a>
                </nav>
            </div>
            <div class="flex justify-center items-center space-x-4 mt-2">
                <a href="/new"
                    class="text-green-600 bg-white font-medium hover:bg-green-100 h-full px-6 py-1 rounded-lg border border-1 border-gray-300 hover:border-green-900 transform hover:scale-95 transition-all duration-200">
                    new
                </a>
                <a href="/login" class="hidden md:inline-block text-gray-500 h-full font-medium hover:underline hover:text-green-900">
                    Login
                </a>
                <a href="/register" class="hidden md:inline-block text-gray-500 h-full font-medium hover:underline hover:text-green-900">
                    Register
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style>

</style>