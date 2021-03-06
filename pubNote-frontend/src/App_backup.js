// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
//
// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <App/>,
//     rootElement
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
//
// import { createStore } from 'redux';
// import reducers from './reducers';
// //import reducers from './reducers/index'; 라는 의미
//
// import * as actions from './actions';
//
//
// const store = createStore(reducers);
//
// // console.log(store.getState());
// // const unsubscribe = store.subscribe(() => console.log(store.getState()));
// // store.dispatch(actions.increment());
// // store.dispatch(actions.increment());
// // store.dispatch(actions.decrement());
// // store.dispatch(actions.setColor([200, 200, 200]));
// //
// // unsubscribe();// unsubscribe
// //
// // store.dispatch(actions.setColor([210, 210, 210]));
//
//
//
// import { Provider } from 'react-redux';
//
// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     rootElement
// );

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './editor/reducers';
// import EditorContainer from './editor/EditorContainer';
// import IMEContainer from './editor/IME/IMEContainer';
// import KeyHandler from './editor/handler/KeyHandler';
//
// import ScrollMemo from './components/pubNote/ScrollMemo';
//
// const rootElement = document.getElementById('noteWrapper');
// const store = createStore(reducers);
// const keyHandler = new KeyHandler();
// const keyHandlers = {
// 	'handleInput': keyHandler.handleInput,
// 	'handleComposing': keyHandler.handleComposing,
// 	'handleKeyDown': keyHandler.handleKeyDown,
// 	'handleKeyUp': keyHandler.handleKeyUp,
// 	'handleKeyPress': keyHandler.handleKeyPress
// };
//
// // ReactDOM.render(
// // 	<Provider store={store}>
// // 		<EditorContainer/>
// // 		<IMEContainer keyHandlers={keyHandlers}/>
// // 	</Provider>,
// // 	rootElement
// // );
//
// const App = () => {
// 	return (
// 		<Provider store={store}>
// 			<EditorContainer/>
// 			<IMEContainer keyHandlers={keyHandlers}/>
// 		</Provider>
// 	);
// };
//
// export default App;








import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import User from 'domain/User';
import Login from 'domain/Login';
import Join from 'domain/Join';
import View from 'domain/View';
import Edit from 'domain/Edit';

const routerDev = () => {
	return (
		<Router>
			<Route exact path='/' component={User}/>
			<Route exact path='/Login' component={Login}/>
			<Route exact path='/Join' component={Join}/>
			<Route exact path='/View' component={View}/>
			<React exact path='/Edit' component={Edit}/>
		</Router>
	);
};

export default routerDev;

