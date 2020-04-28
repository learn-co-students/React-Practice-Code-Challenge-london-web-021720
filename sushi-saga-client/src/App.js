import React, { Component } from 'react';
  import { connect } from 'react-redux'
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount(){
    this.getSushis()
  }

  getSushis = () =>{

    fetch(API)
    .then(resp => resp.json())
    .then(obj => this.props.setSushis(obj))

  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSushis: sushis => dispatch({type: "SET_SUSHIS", payload: {sushis:sushis}})
  }
}

export default connect(null, mapDispatchToProps) (App);