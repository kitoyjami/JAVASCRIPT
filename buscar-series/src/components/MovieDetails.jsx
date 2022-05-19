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
          !movie
            ? (<p>Loading</p>)
            : (
              <article className='row'>
                <aside className='col-6'>
                  <figure> <img src={movie.Poster} alt={movie.Title} className='img-fluid' /></figure>
                </aside>
                <aside className='col-6'>
                  <h6>{movie.Title}</h6>
                  <small>{movie.Year}</small>
                  <p>{movie.Type}</p>
                  <p>{movie.imdbRating}</p>
                </aside>
              </article>

              )
      }
    </section>
  )
}
