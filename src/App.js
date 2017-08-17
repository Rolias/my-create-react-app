import React, { Component } from 'react';
// import HomePage from './Components/home/HomePage';
import Routes from './routes';
import Header from './Components/common/Header';

// import HomePage from './Components/home/HomePage';
// import logo from './logo.svg';
import './App.css';
// import ButtonArea from './Components/Button/ButtonArea';
// import Card from './Components/Card/Card';
// import CardList from './Components/Card/CardList';
// import CardArea from './Components/card/CardArea';
class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				<Routes />
			</div>

			// <div className="App">
			// 	<div className="App-header">
			// 		<img src={logo} className="App-logo" alt="logo" />
			// 		<h2>Welcome to Tod's React</h2>
			// 	</div>
			// 	<p className="App-intro">
			// 		To get started, edit <code>src/App.js</code> and save to reload.
			// 	</p>
			// </div>
		);
	}
}

export default App;
