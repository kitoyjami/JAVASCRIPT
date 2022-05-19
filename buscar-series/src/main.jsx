import React from 'react'
import ReactDOM from 'react-dom/client'
// router
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
// components
import App from './components/App'
import { MovieDetails } from './components/MovieDetails'

const Page404 = () => <h2 className='text-center py-5'>Página no encontrada</h2>

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/movies' replace />

    },
    {
      path: '/movies',
      element: <App />
    },
    {
      path: '/movie/:idMovie',
      element: <MovieDetails />
    },
    {
      path: '*',
      element: <Page404 />
    }
  ])
  return element
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
  /* <App /> */
)
