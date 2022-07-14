<template>
    <div class="mx-5">
        <h2 class="uppercase text-yellow-500 text-lg font-semibold">Popular Movies</h2>

        <div class="grid grid-cols-4 sm:grid-cols-3 md:cols-4 lg:cols-4 gap-8">

            <MovieItem :key="movie.id" v-for="movie in movies" :movie="movie" :genres="genres"/>

        </div>

    </div>
</template>

<script>
import MovieItem from "./İtems/MovieItem.vue"
export default {
        components:{
        MovieItem,
    },
    data(){
        return{
            movies: [],
            genres: [],    
        }
    },
    methods:{
        async getGenres(){
            try {
                const res = await this.$http.get("/genre/movie/list")
                this.genres = res.data.genres
                console.log("Genres", this.genres)
       } catch (error) {
            console.log("error", error)
       }
        }
    },
    async mounted(){
        this.getGenres()
       try {
            const res = await this.$http.get("/movie/popular")
            this.movies = res.data.results
            console.log("data", this.movies)
       } catch (error) {
            console.log("error", error)
       }
    },
}
</script>

<style>

</style>