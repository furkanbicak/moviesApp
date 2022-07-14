<template>
    <div>
       <router-link :to="`/movie/${movie.id}`">
            <img 
                :src    =   "posterPath"
                class   =   "hover:opacity-75"
            />
       </router-link>
        <h3>{{ this.movie.title }}</h3>
        <div>
            {{this.movie.vote_average * 10 }}% | {{ this.movie.release_date }} <br/> 
            <span class="text-sm text-gray-500"> 
               <span :key="genre.id" v-for="(genre, index) in movie.genre_ids"> {{ genreTypeName(genre, index) }} </span>
            </span>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        movie: {
            required: true,
        },
        genres: {
            required: true,
        }
    },
    computed:{
        posterPath(){
            return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        },
    },
    methods:{
        genreTypeName(genreId, index){
            for(const item of this.genres){
                if(item.id == genreId){
                    if(this.movie.genre_ids.length-1 === index){
                        return item.name
                    }else {
                        return item.name + ","
                    }
                }
            } 
        }
    }
}
</script>

<style>

</style>