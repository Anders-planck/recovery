<template>
    <div class="w-full">
        <div class="grid grid-cols-2  bg-white p-8 grid-rows-5 gap-x-4 gap-y-8">
            <div class="transition-all duration-200 transform hover:scale-95 group col-span-2 xl:col-span-1 border border-gray-300  hover:border-black p-4 shadow-sm">
                <h1 class="text-3xl font-black underline text-black tracking-wider mb-2"> Lorem, ipsum dolor.</h1>
                <p class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit nihil tempore a optio? Totam, sequi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus dolor soluta beatae dolorum recusandae amet?
                </p>
            </div>
            <div v-for="i in 9" :key="i"
                class="bg-white group hover:rotate-2 hover:shadow-xl  rounded-md hover:skew-2 transition-all duration-200 col-span-2 md:col-span-1  border border-gray-300 transform hover:scale-95  hover:border-black p-4 shadow-sm">
                <span
                    class="group-hover:font-bold group-hover:text-black  inline-block  py-2 px-4 rounded-full border group-hover:border-black border-gray-300 my-4">{{i}}</span>
                <h1 class="text-xl group-hover:underline text-black tracking-wide mb-2"> Lorem, ipsum dolor.</h1>
                <p class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit nihil tempore a optio? Totam, sequi.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'services'
}
</script>

<style>

</style>