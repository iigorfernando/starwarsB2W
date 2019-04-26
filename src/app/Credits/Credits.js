import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

class Credits extends Component {
  render() {
    return (
      <div className="container--align-center vertical-center">
        <h1 className="title">THANKS FOR WATCHING</h1>   
          <a className="button" target="_blank" rel="noopener noreferrer" href="https://igorfernando.com">
            @iigorfernando
          </a>
        <Link className="button" to="/">
          BACK TO HOME
        </Link>            
      </div>
    )
  }
}

export default Credits;