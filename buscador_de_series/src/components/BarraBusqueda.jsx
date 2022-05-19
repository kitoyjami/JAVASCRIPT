import '../styles/index.css'
import { getSeries } from '../services/getSeries'
import { useRef, useState } from 'react'

export const BarraBusqueda = () => {
  const buscarRef = useRef()

  const [data, setData] = useState('')

  const onGetSeries = async (e) => {
    e.preventDefault()
    const { value } = buscarRef.current
    console.log({ query: value })
    const result = await getSeries({ query: value })
    setData(result)
    console.log(result)
  }

  return (
    <>
      <nav className='navbar fixed-top'>

        <a href='https://www.tvmaze.com/'>
          <img src='https://static.tvmaze.com/images/tvm-header-logo.png' className='align-text-top' />
        </a>
        <form onSubmit={onGetSeries} className='col-6'>
          <div className='input-group'>
            <input ref={buscarRef} type='text' className='form-control fs-4' placeholder='Buscar...' required />
            <button className='btn fs-4' style={{ background: '#3c948b ', color: 'white' }}> Buscar </button>
          </div>
        </form>
        <div className='Logueado col-2 text-light p-4'>
          <div className='Login'><a>Login</a></div>
          <div className='Register'><a>Register</a></div>
        </div>
      </nav>
    </>
  )
}
