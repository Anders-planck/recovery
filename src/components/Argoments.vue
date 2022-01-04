<template>
  <div class="w-full bg-white p-8">
      <h1 class="underline text-3xl  text-black font-black mb-8">
        Arguments we are working on
      </h1>
      <div class="grid  grid-cols-4  grid-flow-row-dense  gap-4">
        <div class="transition-all duration-200 group hover:border-black transform hover:scale-95 border border-gray-200 flex flex-col justify-center items-center  col-span-4 md:col-span-2 lg:col-span-1  p-4" 
        v-for="i in 7" 
        :key="i">
          <svg 
          role="img" 
          viewBox="0 0 24 24" 
          class="h-10 w-10 "><title/>
          <path d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608"/>
          </svg>
          <h3 class="group-hover:underline font-semibold text-md text-black">vue cli {{i}}</h3>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name:"argoments"
}
</script>

<style>

</style>