import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
// const API = "http://localhost:3000/sushis"

class App extends Component {
	constructor() {
		super();
		this.state = {
			sushiData: [],
			consumedSushi: [],
			budget: 100,
		};
	}

	componentDidMount() {
		fetch("http://localhost:3000/sushis")
			.then((resp) => resp.json())
			.then((data) =>
				this.setState({
					sushiData: data.sort(() => 0.5 - Math.random()).slice(0, 4),
				})
			);
	}

	moreSushi = () => {
		fetch("http://localhost:3000/sushis")
			.then((resp) => resp.json())
			.then((data) =>
				this.setState({
					sushiData: data.sort(() => 0.5 - Math.random()).slice(0, 4),
				})
			);
	};

	eatSushi = (sushi, price) => {
		console.log(sushi);
		if (price > this.state.budget) {
      alert("YOU CAN NOT AFFORD THAT!!!");
		} else {
			this.setState({
				sushiData: this.state.sushiData.filter(
					(sushiData) => sushiData !== sushi
				),
				consumedSushi: [...this.state.consumedSushi, sushi],
				budget: this.state.budget - price,
			});
		}
	};

	selectedSushi = (sushi) => {
		this.setState({
			selectedSushi: sushi,
		});
	};

	render() {
		return (
			<div className="app">
				<SushiContainer
					budget={this.state.budget}
					consumedSushi={this.state.consumedSushi}
					sushiData={this.state.sushiData}
					onClick={this.moreSushi}
					eatSushi={this.eatSushi}
					remainingBudget={this.remainingBudget}
				/>
				<Table
					budget={this.state.budget}
					consumedSushi={this.state.consumedSushi}
					sushiData={this.state.sushiData}
				/>
			</div>
		);
	}
}

export default App;
