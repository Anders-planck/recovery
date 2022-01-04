<template>
    <div class="w-full flex flex-col justify-center items-center bg-gunmetal polygone h">
        <div class="p-4 text-center break-words capitalize underline text-white tracking-wider text-4xl font-black   flex justify-center items-center">
            {{title}}.
        </div>
        <p  v-if="description" class="w-2/3 text-md text-white break-words">
            {{description}}
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
  min-height: 250px;
}
</style>