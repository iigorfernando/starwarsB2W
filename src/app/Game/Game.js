import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card/Card'
import Row from '../components/Row/Row'
import Button from '../components/Button/Button'
import Loading from '../components/Loading/Loading'
import axios from 'axios'

const category = 'planets'

const initialState = {
  loading: true,
  planet : {
    population: '',
    climate: '',
    films: []
  }
}
const baseUrl = 'https://swapi.co/api/'

class Game extends Component {

  constructor(props){
    super(props)
    this.newPlanet = this.newPlanet.bind(this)
  }
  
  state = { ...initialState}
  render() {
    
    if (this.state.loading){
    return (
    <div className="container--align-center vertical-center">
      <Loading status={this.state.loading} />
    </div>)
    } else {
    return(
      <div className="container--align-center vertical-center">
        <Loading status={this.state.loading} />
        <Card title={this.state.planet.name}>
          <Row name="Populatin" value={this.state.planet.population} className="card__row" />
          <Row name="Climate" value={this.state.planet.climate} className="card__row" />
          <Row name="Terrain" value={this.state.planet.terrain} className="card__row" />
          <Row name="Diameter" value={this.state.planet.diameter} className="card__row" />
          <Row name="Gravity" value={this.state.planet.gravity} className="card__row" />
          <Row name="Surface Water" value={this.state.planet.surface_water} className="card__row" />
         
          <div className="card__footer">Featured in {this.state.planet.films.length} films </div>
  
        </Card>
        <Button name="NEW RANDOM PLANET" onClick={this.newPlanet} />
        <Link className="button" to="/">BACK TO HOME</Link>
      </div>
      )
    }
  }

    componentDidMount(){
      this.getPlanet()
    }

    clearState(){
      this.setState({ ...initialState})
    }

    newPlanet(){
      this.clearState()
      this.getPlanet()
    }

    getPlanet(){
      axios.get(baseUrl + category + "/?page=" + 1)
      .then(res => {
        let planetsPerPage = res.data.results.length
        let randomPlanetPosition = Math.floor((Math.random() * res.data.count) + 1)
        let randomIndex = randomPlanetPosition - 1
        let positionAtPage = randomIndex - ((Math.ceil(randomPlanetPosition / planetsPerPage) - 1) * planetsPerPage)
        let randomPlanetPage = Math.ceil(randomPlanetPosition / planetsPerPage)

        axios.get(baseUrl + category + "/?page=" + randomPlanetPage)
        .then(res => {
          this.setState({loading: false, planet: res.data.results[positionAtPage]})
          console.log(this.state)
        })
      })
    }
}

export default Game;