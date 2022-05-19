/* eslint-disable no-unused-vars */
import axios from 'axios'

const { VITE_API_KEY } = import.meta.env

export const getMovies = async ({ query }) => {
  const req = await axios.get(`http://www.omdbapi.com/?apikey=${VITE_API_KEY}&s=${query}`)
  const res = req.data.Response === 'True' ? req.data.Search : { sms: 'No hay resultados', data: [] }
  return res
}

export const getMoviesDetails = async ({ id = '' }) => {
  const req = await axios.get(`http://www.omdbapi.com/?apikey=${VITE_API_KEY}&i=${id}`)
  console.log(req)
  const res = req.data.Response === 'True' ? req.data : {}
  console.log(res)
  return res
}
