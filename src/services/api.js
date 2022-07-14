import axios from "axios"

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTk5ZWI5ZTU4MjRiMjJmNWUxZWQzMTI2MDJjYzI3ZiIsInN1YiI6IjYyYzc0NzFmZjY1OTZmMDA1MDRlOGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZcI9jt7du1GeDxEJKZYe20SrewXa8NI4WQXR8wT8X18"

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Authorization: `Bearer ${token}`,
    },
})