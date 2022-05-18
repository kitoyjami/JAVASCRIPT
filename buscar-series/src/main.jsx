import React from 'react'
import ReactDOM from 'react-dom/client'
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
// components
import App from './components/App'
import { MovieDetails } from './components/MovieDetails'

const Page404 = () => <h2 className='text-center py-5'>Página no encontrada</h2>

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/movie/:idMovie' element={<MovieDetails />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  </BrowserRouter>
  /* <App /> */
)
