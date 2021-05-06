import React, {Component} from "react";
import WordCounter from "./WordCounter";

export class Home extends Component {
	render() {
		return (
			<div>
				<h1>
					Thank you for visiting{" "}
					<span class="workoutTitle"> Workout Tracker!</span> If you have an
					account please <a href="/login"> Login</a> Or else please
					<a href="/Signup"> Sign up</a>
				</h1>
			</div>
		);
	}
}

export default Home;
