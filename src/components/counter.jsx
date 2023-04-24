import React, { Component } from "react";

class Counter extends Component {
	state = {
		value: -2,
		colors: this.props.colors,
		color: this.props.defaultColor,
	};

	render() {
		let textColor = { color: this.state.color };
		return (
			<div>
				<span style={textColor}>{this.state.value}</span>
				<br />
				<button
					onClick={() => {
						let newValue = (this.state.value += 1);
						let newColor;
						if (Number.isInteger(newValue)) {
							newColor = this.state.colors[0];
						} else {
							newColor = this.state.colors[1];
						}
						this.setState({ value: newValue, color: newColor });
					}}
				>
					Increment by 1
				</button>
				<button
					onClick={() => {
						let newValue = (this.state.value -= 1);
						let newColor;
						if (Number.isInteger(newValue)) {
							newColor = this.state.colors[0];
						} else {
							newColor = this.state.colors[1];
						}
						this.setState({ value: newValue, color: newColor });
					}}
				>
					Decrement by 1
				</button>
				<button
					onClick={() => {
						let newValue = (this.state.value /= 2);
						let newColor;
						if (Number.isInteger(newValue)) {
							newColor = this.state.colors[0];
						} else {
							newColor = this.state.colors[1];
						}
						this.setState({ value: newValue, color: newColor });
					}}
				>
					Divide by 2
				</button>
				<button
					onClick={() => {
						let newValue = (this.state.value *= 2);
						let newColor;
						if (Number.isInteger(newValue)) {
							newColor = this.state.colors[0];
						} else {
							newColor = this.state.colors[1];
						}
						this.setState({ value: newValue, color: newColor });
					}}
				>
					Multiply by 2
				</button>
			</div>
		);
	}
}

export default Counter;
