import '../styles/index.css'
import { getSeries } from '../services/getSeries'
import { useRef, useState } from 'react'
import { LienzoPrincipal } from './Lienzo'

export const BarraBusqueda = () => {
  const buscarRef = useRef()

  const [Recibirdata, setData] = useState([])

  const onGetSeries = async (e) => {
    e.preventDefault()
    const { value } = buscarRef.current
    const result = await getSeries({ query: value })
    setData(result)
    console.log(Recibirdata)
  }
  console.log(Recibirdata)

  return (
    <>
      <nav className='navbar'>

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
      <LienzoPrincipal Recibirdata={Recibirdata} />

    </>
  )
}
