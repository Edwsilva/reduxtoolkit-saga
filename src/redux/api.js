import axios from 'axios'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

export const fetchMovies = async (movieName) => {
  console.log("Estou na fetchMovies que recebe o movieName ", movieName)
  return axios.get(`${API_ENDPOINT}&s=${movieName}`)
}

export const fetchMovie = async (movieId) => {
  console.log("Estou na fetchMovie que recebe o movieId ", movieId)
  return axios.get(`${API_ENDPOINT}&i=${movieId}`)
}

// Agora iremos configurar o SAGA para usar esse métodos