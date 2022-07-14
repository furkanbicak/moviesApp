<template>
    <div>
        <div class=" container mx-auto flex mt-20 border-b border-gray-600 pb-2">
            <img :src="`https://image.tmdb.org/t/p/w500${this.movie.poster_path}`" class="w-64"/>
            <div class="ml-24">
                    <h2 class="text-4xl font-semibold">{{this.movie.title}}</h2>

                    <span class="text-gray-500 text-sm"> 
                        {{this.movie.vote_average * 10}}% | {{this.movie.release_date}}
                        <span :key="index" v-for="(item, index) in movie.genres">
                           {{ item.name }},
                        </span>  
                    </span>
                    
                    <p class="mt-5">{{this.movie.overview}}</p>

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

                    <div class="mt-5 mb-5">
                        <a href="#" class="rounded bg-yellow-500 px-5 py-4">Play Trailer</a>
                        <a href="#" class="rounded bg-yellow-500 px-5 py-4">Favourite</a>
                    </div>
            </div>
        </div>
     
        <Cast :casts="casts"/>
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
    },
    data(){
        return{
            movie:[],
            casts: null
        }
    },
    methods:{
        async getMovie(movieId){
            const res = await this.$http.get(`/movie/${movieId}?append_to_response=credits,videos,images`)
            this.movie = res.data
            this.casts = res.data.credits.cast
            console.log("Casts", this.casts)
        }
    },
    mounted() {
        this.getMovie(this.$route.params.id)
    },
}
</script>

<style>

</style>