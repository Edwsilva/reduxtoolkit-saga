import { takeLatest, put, fork, call } from "redux-saga/effects"
import * as actions from "./features/movieSlice"
//import { fetchMovies, fetchMovie } from "./api";
import * as API from "./api";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    console.log("Estou no onLoadMovieAsync ", movieName)
    // call -> Wait for the promisse to finish. The argument should be a function that returns a promisse.
   // const response = yield call(API.fetchMovies, movieName);
    const response = yield call(API.fetchMovies, movieName);
    if(response.status === 200) {
      yield put(actions.setMovies({...response.data}))
    }

  } catch (error) {
    console.log(error)
  }
}

function* onLoadMovieAsync({ payload }) {
  try {
    const movieId = payload;
    console.log("Estou no onLoadMovieAsync ", movieId)
    // call -> Wait for the promisse to finish. The argument should be a function that returns a promisse.
    //const response = yield call(fetchMovies, movieName);
    const response = yield call(API.fetchMovie, movieId);
    if(response.status === 200) {
      yield put(actions.setMovie({...response.data}))
    }

  } catch (error) {
    console.log(error)
  }
}

// método que irá disparar as acoes
function* onLoadMovies() {
  console.log("Estou no onLoadMovies() do movies saga")
  // Ação disparada e a função que irá escutar (devemos criar)
  yield takeLatest(actions.getMovies.type, onLoadMoviesAsync)
}

function* onLoadMovie() {
  console.log("Estou no onLoadMovies() do movies saga")
  // Ação disparada e a função que irá escutar (devemos criar)
  yield takeLatest(actions.getMovie.type, onLoadMovieAsync)
}

// fork is simply used to call a method you passed a method and mehod is invoked
export const movieSagas = [fork(onLoadMovies), fork(onLoadMovie)]

// Agora iremos papra o rootSaga