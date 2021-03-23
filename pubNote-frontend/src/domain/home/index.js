import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function createWarning(functionName) {
	return () => console.warn(functionName + ' is not define.');
}

const defaultProps = {
	onPlus: createWarning('onPlus'),
	onSubtract: createWarning('onSubtract'),
	onRandomizeColor: createWarning('onRandomizeColor'),
};

export default class extends Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div className={"inner-wrapper"}>
				<Header/>
				<Main/>
				<Footer/>
			</div>
		);
	}
};