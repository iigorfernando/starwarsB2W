import React, { Component }  from 'react'
import Logo from '../components/Logo/Logo'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
          <Logo />
          <div className="container--align-center vertical-bottom">
              <Link className="button" to="/Game">
                  Start the game
              </Link>

              <Link className="button" to="/Credits">
                  Credits
              </Link>
          </div>
      </div>
    )
  }
}

export default Home;