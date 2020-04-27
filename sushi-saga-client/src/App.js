import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
let startIndex = 0
let elements = 4



class App extends Component {
  constructor(){
    super()
    this.state = {
     allSushi: [],
     someSushi: [],
     eaten: true,
     plates: [],
     budget: 100
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.someSushis(data)
        console.log(data)
        this.setState({
          allSushi: data
        })
      })
  }

   someSushis = (data) => {
    
    const newSushi = data.map(sushi =>{ return  {...sushi, eaten: false}
 
    })
    console.log(newSushi)
    this.setState( {
      someSushi: newSushi.slice(0,4)
    })
  }

  nextSushi = () => { 
    const val = elements + 4 
    if (this.state.allSushi.length === val)  {
      startIndex = 0
      elements = 4
      this.setState({ 
        someSushi: this.state.allSushi.slice(startIndex,elements)
      })
    }
    else {
    startIndex += 4 
    elements +=4 
    this.setState({ 
      someSushi: this.state.allSushi.slice(startIndex,elements)
    })
  }
  }




  eaten = (id, price) =>{
 
    const sushis = this.state.someSushi.map(sushi =>{ return sushi.id === id ? {...sushi, eaten: true}:sushi })
    const sushis1 = this.state.allSushi.map(sushi =>{ return sushi.id === id ? {...sushi, eaten: true}:sushi })
    const newBudget = this.state.budget - price 
    debugger
    this.setState({ 
      budget: newBudget,
      someSushi: sushis,
      allSushi: sushis1,
      plates:[...this.state.plates, sushis.find(sushi => sushi.id === id) ]
    })

  }

  


  


  render() {
    return (
      <div className="app">
        <SushiContainer nextSushi = {this.nextSushi} eaten = {(id,price) => this.eaten(id,price)} sushis = {this.state.someSushi} />
        <Table plates = {this.state.plates} budget = {this.state.budget} />
      </div>
    );
  }
}

export default App;