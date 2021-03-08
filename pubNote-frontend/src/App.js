import React from 'react';
import { Link, Route, BrowserRouter } from "react-router-dom";

import User from './domain/User';
import Login from './domain/Login';
import Join from './domain/Join';
import View from './domain/View';
import Edit from './domain/Edit';

const App = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={User}/>
			<Route path='/Login' component={Login}/>
			<Route path='/Join' component={Join}/>
			<Route path='/View' component={View}/>
			<Route path='/Edit' component={Edit}/>
		</BrowserRouter>
	);
};

export default App;
