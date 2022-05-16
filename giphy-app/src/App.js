import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from '../src/components/SearchBar'

export default class App extends Component {

  state={
    busqueda:"",
    resultados:[],
    loading:false

  }

  handleSearch=async(busqueda)=>{
    const res=await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${'518FCRrtwPBnl3KBjPCxPAq6A8H6ojMS'}&q=${busqueda}&limit=10&rating=G`)
    this.setState({resultados:res.data.data})
  }
  REACT_API_KEY='518FCRrtwPBnl3KBjPCxPAq6A8H6ojMS'
  render() {
    return (
        <div>
          <SearchBar manejarBusqueda={this.handleSearch}/>
        {this.state.resultados.map( imagen =>(
          <img src={imagen.images.downsized.url} key={imagen.id} />
        ))}
        </div>  
    )
  }
}

