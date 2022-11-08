//rafce
import React from 'react'
 //rafce
import Search from "../components/Search"
import MoviesList from "../components/MoviesList"

const Home = () => {
  return (
   <>
   {/* search */}
   <Search />
   {/* Vamos criar o componente de pesquisa Search.js */}
   <MoviesList/>
   </>

  )
}

export default Home

