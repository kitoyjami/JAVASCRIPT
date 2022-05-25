
export const LienzoPrincipal = ({ Recibirdata }) => {
  return (
    <>
      <ul style={{ paddingInlineStart: '0' }} className='row gy-4'>
        {
                     Recibirdata.map(movie => (

                       <li style={{ listStyle: 'none' }} key={movie.show.externals.imdb} className='col-3'>
                         <article className='card text-dark'>
                           <figure>
                             <img className='img-fluid' src={movie.show.image.original} alt={movie.show.name} />
                           </figure>
                           <h6>{movie.show.name}</h6>
                           <small>{movie.show.ended}</small>
                         </article>

                       </li>
                     ))

                     }
      </ul>
    </>
  )
}
