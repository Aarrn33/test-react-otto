import React, { Component } from "react";

class Form extends Component {
	state = { startDate: "2022-11-01", endDate: "2022-11-30" };

	handleSubmit = (event) => {
		console.log(this.state);
		console.log(this.event);
		console.log(this.startDate);
		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="date"
					name="startDate"
					defaultValue="2022-11-01"
					ref={(input) => (this.startDate = input)}
				></input>
				<input
					type="date"
					name="endDate"
					defaultValue="2022-11-30"
					ref={(input) => (this.endDate = input)}
				></input>
				<input type="submit" value="Get funding rate"></input>
			</form>
		);
	}
}

export default Form;
