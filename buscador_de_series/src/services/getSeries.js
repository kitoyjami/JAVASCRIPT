/* eslint-disable no-unused-vars */
import axios from 'axios'

export const getSeries = async ({ query }) => {
  const req = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  console.log(query)
  const res = req.data
  console.log(res)
  return req
}
