import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/Home.vue"
import Movie from "../components/Movies/Movie.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            component: Home
        },
        {
            path:"/movie/:id",
            component: Movie
        }
    ]
})
