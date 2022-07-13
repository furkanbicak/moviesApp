<template>
    <div>
        <div class=" container mx-auto flex mt-20 border-b border-gray-600 pb-2">
            <img src="https://i.pinimg.com/564x/93/4c/23/934c23e629f299722051058c7c8fda99.jpg" class="w-64"/>
            <div class="ml-24">
                    <h2 class="text-4xl font-semibold">Yüzüklerin Efendisi</h2>

                    <span class="text-gray-500 text-sm"> 47% | 2020-01-01 Crime, Thriller, Drama </span>
                    <span class="text-sm text-gray-500"> Sicence Fiction, Thriller, Drama </span>

                    <p class="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quas pariatur quos maxime placeat corporis aperiam laboriosam sit earum sapiente? Tempore nesciunt reiciendis perferendis ullam eligendi deserunt suscipit ipsum molestias?</p>

                    <div class="mt-5">
                        <span class="mt-5 font-semibold">Featured Cast</span>

                        <div class="flex">
                            <div class="flex flex-col mt-5 mr-5">
                                <span>Scott Silver</span>
                                <span class="text-gray-500">Writer</span>
                            </div>

                            <div class="flex flex-col mt-5">
                                <span>Bruce Berman</span>
                                <span class="text-gray-500">Executive Producer</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5">
                        <a href="#" class="rounded bg-yellow-500 px-5 py-4">Play Trailer</a>
                        <a href="#" class="rounded bg-yellow-500 px-5 py-4">Favourite</a>
                    </div>
            </div>
        </div>
     
       <Cast />
       <Images />
    </div>
</template>

<script>
import Cast from "./Cast.vue"
import Images from "./Images.vue"
export default {
    components:{
        Cast,
        Images
    }
}
</script>

<style>

</style>