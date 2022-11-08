import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Typography, Button } from "@mui/material"
import { getMovie } from "../redux/features/movieSlice"
import { typography } from '@mui/system';

const Movie = () => {
  const dispatch = useDispatch()
  const { movie } = useSelector((state) => ({ ...state.movie }))
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id))
    }
  }, [id])

  return (
    <section>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <div>
        <typography align="left" variant='h3' gutterBottom component='h2'>
          {movie.Title}
        </typography>
        <typography align="left" variant='h5' gutterBottom component='h5'>
          Year: {movie.year}
        </typography>
        <typography align="left" variant='body1' gutterBottom component='p'>
          {movie.Plot}
        </typography>
        <typography align="left" variant='h6' gutterBottom component='h6'>
          Director: {movie.Director}
        </typography>
        <Button variant="contained" onClick={() => navigate("/")} >
          Go Back
        </Button>
      </div>
    </section>
  )
}

export default Movie
