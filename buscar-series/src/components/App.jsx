import { Movies } from './Movies'
import { getMovies } from '../services/getMovies'
import { useRef, useState } from 'react'

function App () {
  const buscarRef = useRef()

  const [data, setData] = useState([])

  const onGetMovies = async (e) => {
    e.preventDefault()
    const { value } = buscarRef.current
    const result = await getMovies({ query: value })
    setData(result)
    console.log(result)
  }
  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de series</h4>
      {/* Buscador */}
      <form onSubmit={onGetMovies}>
        <div className='input-group'>
          <input ref={buscarRef} type='text' className='form-control' placeholder='Buscar...' />
          <button className='btn btn-primary'> Buscar </button>
        </div>
      </form>
      {/* Grid de peliculas */}
      <Movies data={data} />
    </section>
  )
}

export default App
