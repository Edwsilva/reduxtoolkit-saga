import React, { useState, useEffect } from 'react'
import { TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from "../styles"
import { getMovies } from "../redux/features/movieSlice"

const Search = () => {
  console.log("ESTOU")
  const [name, setName] = useState("spider")
  //const classes = useStyles()
  const { moviesList } = useSelector((state) => ({ ...state.movie}))
  console.log("movieListeee ", moviesList?.Error)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name))
  }, [name]);

  return (
    <>
      <h2>Movie Search App</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        { moviesList?.Error && <p><h4>{moviesList.Error}</h4></p>}

      </form>
    </>
  )
}

export default Search
