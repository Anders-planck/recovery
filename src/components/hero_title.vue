<template>
    <div class="w-full flex flex-col pb-8 justify-center items-center bg-white text-black polygone h">
        <div class="p-4 text-center break-words capitalize underline  tracking-wider text-4xl font-black   flex justify-center items-center">
            {{title}}.
        </div>
        <p  v-if="description" class="w-2/3 text-md text-center  break-words">
            {{description}}.
        </p>
    </div>
</template>

<script>
export default {
    name:'hero_title',
    props:{
        title:{
            type: String,
            required:true
        },
        description:{
            type: String,
            required:false
        }
    }
}
</script>


<style lang='scss' scoped>
.h{
  min-height: 150px;
  height: auto
}
</style>