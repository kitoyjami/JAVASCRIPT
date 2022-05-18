/* eslint-disable no-unused-vars */
import axios from 'axios'

const { VITE_API_KEY } = import.meta.env

export const getMovies = async ({ query }) => {
  const req = await axios.get(`http://www.omdbapi.com/?apikey=${VITE_API_KEY}&s=${query}`)
  return req.data
}
