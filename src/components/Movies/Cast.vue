<template>
    <div class="container mx-auto border-b border-gray-500 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">Cast</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            
            <div class="mr-2" :key="item.id" v-for="item in casts">
                <img 
                    :src="item.profile_path===null ? `https://via.placeholder.com/300x450` : `https://image.tmdb.org/t/p/w500${item.profile_path}`" 
                    alt=""
                    class="w-64 hover:opacity-75 transition ease-in-out duration150"
                />
                <span class="text-gray-300">{{item.name}} / {{item.character}}</span>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        casts:{
            required: true
        }
    },
}
</script>

<style>

</style>