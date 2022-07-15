<template>
    <div class="container mx-auto border-b border-gray-500 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">Images</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            
            <div class="mr-2" :key="index" v-for="(item, index) in images">
               <img 
                    :src="movieImage(item)" 
                    alt=""
                    class="w-64 hover:opacity-75 transition ease-in-out duration150 p-2"
                />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        images:{
            required:true
        }
    },
    methods:{
        movieImage(item){
            return item.file_path === null ? 
            `https://via.placeholder.com/300x450` : 
            `https://image.tmdb.org/t/p/w500${item.file_path}`
        }
    }
}
</script>

<style>

</style>