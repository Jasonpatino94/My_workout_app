// packages
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// components
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import {clearUser} from "./redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
//services
import {clearToken, getToken} from "./services/local_storage";

function App() {
	// eslint-disable-next-line
	const state = useSelector((state) => state);
	// used just for "re-rendering"

	const dispatch = useDispatch();

	const handleLogout = () => {
		clearToken();
		dispatch(clearUser());
	};

	return (
		<Router>
			<div className="App">
				<h1> Welcome to Workout Tracker! </h1>

				<Switch>
					<Route exact path="/" component={Home} />

					<Route path="/login" component={Login} />

					<Route path="/profile" component={Profile} />

					<Route path="/signup" component={Signup} />
				</Switch>
				{getToken() ? (
					<button className="LogoutButton" onClick={handleLogout}>
						Logout
					</button>
				) : null}
			</div>
		</Router>
	);
}

export default App;
