import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
  },

  // Para buscar dados a API precisaremos das ACTIONS e do SAGA
  reducers: {
    getMovies(name) {
      console.log("NOME ", name)
      return name
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovie(id) {

      return id
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    }
  }
})

// Deixando ações disponíveis para serem usadas no meddleware (thunk ou saga)
export const {getMovies, setMovies, getMovie, setMovie} = movieSlice.actions

export default movieSlice.reducer;
