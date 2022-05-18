import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMoviesDetails } from '../services/getMovies'

export const MovieDetails = () => {
  const { idMovie } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getData = async () => {
      const result = await getMoviesDetails({ id: idMovie })
      console.log(result)
      setMovie(result)
    }
    getData()
  }, [])

  return (
    <section className='container py-5'>
      <Link to='/' className='btn btn-primary mb-5'> Home</Link>
      {
          !movie ? (<p>Loading</p>) : (<p>{movie.Title}</p>)
      }
    </section>
  )
}
