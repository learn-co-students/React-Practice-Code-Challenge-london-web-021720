import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    plates: [],
    budget: 100
  }

  getSushis = () => fetch(API).then(res => res.json())

  eatSushi = ({id, price}) => {
    const budget = this.state.budget - price

    if (budget >= 0 && this.checkEaten(id)) {
      this.setState({
        plates: [...this.state.plates, id],
        budget
      })
    }
    
  }

  checkEaten = id => !this.state.plates.includes(id)

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({ sushis }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} checkEaten={this.checkEaten}/>
        <Table budget={this.state.budget} plates={ this.state.plates }/>
      </div>
    );
  }
}

export default App;