<template>
    <div class="mx-5">
        <h2 class="uppercase text-yellow-500 text-lg font-semibold">Popular Movies</h2>

        <div class="grid grid-cols-4 sm:grid-cols-3 md:cols-4 lg:cols-4 gap-8">
            <MovieItem />
            <MovieItem />
            <MovieItem />
        </div>

    </div>
</template>

<script>
import MovieItem from "./İtems/MovieItem.vue"
export default {
    components:{
        MovieItem,
    }
}
</script>

<style>

</style>