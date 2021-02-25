import React from "react";
import render from "react-dom/cjs/react-dom.production.min";
import { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");

	let lightRed = "";
	if (color == "red") lightRed = "selected";
	let lightYellow = "";
	if (color == "yellow") lightYellow = "selected";
	let lightGreen = "";
	if (color == "green") lightGreen = "selected";

	return (
		<div className="trafficLight">
			<div className="trafficTop"></div>
			<div className="trafficBottom">
				<div
					className={"red light " + lightRed}
					onClick={() => setColor("red")}></div>
				<div
					className={"yellow light " + lightYellow}
					onClick={() => setColor("yellow")}></div>
				<div
					className={"green light " + lightGreen}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
