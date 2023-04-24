import React from "react";
import Counter from "../components/counter";

function Home() {
	return (
		<React.Fragment>
			<Counter colors={["green", "red"]} defaultColor="green"></Counter>
			<Counter colors={["yellow", "blue"]} defaultColor="yellow"></Counter>
		</React.Fragment>
	);
}

export default Home;
