<template>
    <div class="flex">
    <img src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" class="w-1/4 h-16" />

    <ul class="flex mt-7">
        <li>
            <router-link to="/movies" class="ml-5"> Movies </router-link>
        </li>
        <li>
            <router-link to="/actors" class="ml-5"> Actors </router-link>
        </li>
        <li>
            <router-link to="/profile" class="ml-5"> Profile </router-link>
        </li>
    </ul>
    </div>
</template>

<script>
import "tailwindcss/tailwind.css"

export default{
}
</script>

<style scoped>

</style>