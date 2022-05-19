import { Movies } from './Movies'
import { getMovies } from '../services/getMovies'
import { useRef, useState } from 'react'

function App () {
  const buscarRef = useRef()

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const onGetMovies = async (e) => {
    e.preventDefault()
    const { value } = buscarRef.current
    const result = await getMovies({ query: value })
    if (result.sms) {
      setData('')
      setError(result)
    } else {
      setData(result)
      setError('')
    }

    setData(result)
    console.log(result)
  }
  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de series</h4>
      {/* Buscador */}
      <form onSubmit={onGetMovies}>
        <div className='input-group'>
          <input ref={buscarRef} type='text' className='form-control' placeholder='Buscar...' required />
          <button className='btn btn-primary'> Buscar </button>
        </div>
      </form>
      {/* Grid de peliculas */}
      {error ? <p className='text-center py-5'>{error.sms}</p> : null}
      <Movies data={data} />
    </section>
  )
}

export default App
