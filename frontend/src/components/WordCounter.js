import React, {Component} from "react";

export class WordCounter extends Component {
	state = {
		word: "",
		count: 0,
	};

	handleChange = (event) => {
		this.setState({
			word: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// this.setState({
		// 	count: this.state.word.length + this.state.count,
		// 	word: "",
		// });

		console.log("a");

		fetch("http://localhost:3000//users/1/workouts")
			.then((resp) => {
				console.log("b", resp);
				return resp.json();
			})
			.then((data) => console.log("c", data));

		for (let i = 0; i < 5000; i++) {
			console.log("d");
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Word:</label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.word}
					/>
					<input type="submit" value="Click Me" />
					Count = {this.state.count}
				</form>
			</div>
		);
	}
}

export default WordCounter;
