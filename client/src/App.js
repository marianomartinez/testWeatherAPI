import React, { Component } from 'react';
import Card from './components/Card';
import AddCityForm from './components/AddCityForm';
import Footer from './components/Footer';
import './App.css';

let defaultLocations = ["-34.603722, -58.381592", "-33.459229, -70.645348", "40.730610, -73.935242", "52.494118, 22.277629"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      newLocationValue: "",
      locations: defaultLocations,
      city: "",
      weather: ""
    };
    this.handleLocationChange = this.changeLattlong.bind(this);
    this.handleLocationSubmit = this.submitLattlong.bind(this);
  }

  /* On user input, add a new location */
  /* Uses "city" as input */
  changeLattlong(event) {
    this.setState({newLocationValue: event.target.value});
  }
  /* changeLattlong(event) to fetch "lattlong" of the new location (city) and adds it to the "locations" array */
  submitLattlong(event) {
    let updateLattlongs = this.state.locations;
    event.preventDefault();
    fetch(`/api/city/${this.state.newLocationValue}`)
    .then(res => res.json())
    .then(dataset => updateLattlongs.push(dataset))
    .then(() => this.setState({locations: updateLattlongs}))
    .then(() => this.setState({newLocationValue: ""}))
  }

  /* Repeatedly fetch city and weather information from API through Express server */
  /* Uses "lattlong" as input */
  fetchLattLong = (index) => {
    setInterval(() =>  {
      fetch(`/api/lattlong/${this.state.locations[index]}`)
      .then(res => res.json())
      .then((dataset) => this.setState(dataset))
      .then(() => this.setState({loading: false}))
      .then(() => (index === this.state.locations.length - 1) ? index = 0 : index++)
    }, 5000);
  }

  componentDidMount() {
    let index = 0;
    this.fetchLattLong(index);
  }

  componentWillUnmount() {
    clearInterval();
    clearTimeout();
 }

  render () {
    return(
      <div className="container-fluid">
        <h1 className="text-center">Weather app</h1>
        {(this.state.loading === true ? <p className="text-center">loading...</p> :
        <body>
          <div className="row">
            <div className="col">
            </div>
            <div className="col-sm-12 col-lg-6">
              <Card props={this.state} />
              <AddCityForm newLocationValue={this.state.newLocationValue} onSubmit={this.handleLocationSubmit} onChange={this.handleLocationChange} />
            </div>
            <div className="col">
            </div>
          </div>
        </body>
        )}
        <Footer />
      </div>
    )
  }
}

export default App;