import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'

import './scss/Main.scss';
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="App-header">
         
            <div className="star star--small"></div>
            <div className="star star--medium"></div>
            <div className="star star--large"></div>

            <Routes />
            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
