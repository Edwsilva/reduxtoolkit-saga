import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material"
import { } from "react-redux"
import { Link } from "react-router-dom"

const MoviesList = () => {
  console.log("Estou no MoviesList")
  const { moviesList } = useSelector(state => ({ ...state.movie }));
  console.log("movieList ", moviesList)
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList?.Search?.map((item, index) => (
             
              <Grid key={index} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${item.imdbID}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.Poster}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        {item.Title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {item.Year}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}

          </Grid>

        </Grid>

      </Grid>
    </div>
  )
}

export default MoviesList