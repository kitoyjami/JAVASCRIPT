import '../styles/index.css'
export const BarraBusqueda = () => {
  return (
    <>
      <nav className='navbar fixed-top'>

        <a href='https://www.tvmaze.com/'>
          <img src='https://static.tvmaze.com/images/tvm-header-logo.png' className='align-text-top' />
        </a>
        <form className='col-6'>
          <div className='input-group'>
            <input type='text' className='form-control fs-4' placeholder='Buscar...' required />
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
export const Selector = () => {
  return (
    <>
      <p>Soy un selector</p>
    </>
  )
}
