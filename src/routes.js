import React from 'react';
import { Route, Switch } from 'react-router';
import AboutPage from './Components/about/AboutPage';
import HomePage from './Components/home/HomePage';

const Routes = () =>
	<main>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/index" component={HomePage} />
			<Route path="/home" component={HomePage} />
		</Switch>
	</main>;
export default Routes;
