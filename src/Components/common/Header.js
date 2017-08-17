import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			<NavLink
				exact
				to="/"
				className="nav-link"
				activeStyle={{
					color: 'gray'
				}}
			>
				Home
			</NavLink>

			<NavLink
				to="/about"
				className="nav-link"
				activeClassName="nav-item disabled"
				activeStyle={{
					color: 'gray'
				}}
			>
				About
			</NavLink>
		</nav>
	);
};
export default Header;
