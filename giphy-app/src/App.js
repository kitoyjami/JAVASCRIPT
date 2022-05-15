import React, { Component } from 'react'

export default class App extends Component {

  state={
    busqueda:""
  }

  handleSearch=()=>{
    alert(this.state.busqueda)
  }

  render() {
    return (
        <div>
          <input value={this.state.busqueda} 
          onChange={(e)=>this.setState({busqueda:e.target.value})}
          type="text" placeholder='Ingresa tu busqueda'/>
          <button onClick={()=>this.handleSearch()}>Buscar</button>
        </div>  
    )
  }
}

