<template>
    <div class="w-full bg-white border boder-r-0 boder-l-0 border-gray-200">
        <a href="/" class="pt-2 block md:hidden w-full text-center text-3xl tracking-wider hover:text-green-600 transition-all duration-200">For_An</a>
        <div class="w-full lg:w-7/12 mx-auto md:w-7/12   flex justify-between items-center  px-4">
            <div class="mb-4 flex flex-col justify-start space-y-8 items-start">
                <a href="/" class="hidden md:block w-full pt-2 text-center text-3xl tracking-wider hover:text-green-600 transition-all duration-200">For_An</a>
                <nav class="w-full  flex flex-col justify-start items-start space-y-4">
                    <a href="/"
                        class="text-gray-400 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Home
                    </a>
                    <a href="/articles"
                        class="text-gray-400 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Articles
                    </a>
                    <a href="#"
                        class="text-gray-400 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        Material
                    </a>
                    <a href="/about"
                        class="text-gray-400 h-full hover:underline hover:text-green-600 font-medium hover:underline-green-600 duration-200 transition-all ">
                        About Us
                    </a>
                </nav>
            </div>
            <div class=" flex flex-col justify-start items-start space-y-4">
                <a href="" 
                    class="inline-block text-gray-400 h-full font-medium hover:underline hover:text-green-900">
                    Register
                </a>
                <a href="/new"
                    class=" inline-block text-gray-400 h-full font-medium hover:underline hover:text-green-900">
                    new article
                </a>
                <a href=""
                    class="inline-block text-gray-400 h-full font-medium hover:underline hover:text-green-900">
                    Login
                </a>
            </div>
        </div>
        <div class="p-4 text-gray-500 text-sm border-gray-200 border-t-2 py-2 w-full lg:w-7/12 mx-auto md:w-7/12 flex justify-between items-center">
            <h6>make by Anders</h6>
            <span>copyrigth 2022</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer-end"
}
</script>

<style>

</style>