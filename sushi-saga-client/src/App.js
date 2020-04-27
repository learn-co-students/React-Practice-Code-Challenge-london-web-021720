import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: [],
    money: 100,
    currentPlate: 0
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState(previousState => ({
      ...previousState,
      sushi: sushi
    })))
  }

  getMoreSushi = () => {
    if (this.state.currentPlate === 96){
      this.setState(previousState => ({
        ...previousState,
        currentPlate: 0
      }))
    }
    else {
      this.setState(previousState => ({
        ...previousState,
        currentPlate: previousState.currentPlate + 4
      }))
    }
  }

  addToEaten = (sushi) => {
    if (sushi.price <= this.state.money) {
      if (!this.state.eaten.includes(sushi.id))
      {
        this.setState(previousState => ({
          ...previousState,
          eaten: [...previousState.eaten, sushi.id],
          money: previousState.money - sushi.price
        }))
      }
    }

  }

  render() {
    return (
      <div className="app">
        <SushiContainer addToEaten={this.addToEaten} eaten={this.state.eaten} getMoreSushi={this.getMoreSushi} sushi={this.state.sushi.slice(this.state.currentPlate, this.state.currentPlate + 4)}/>
        <Table eaten={this.state.eaten} money={this.state.money} />
      </div>
    );
  }
}

export default App;