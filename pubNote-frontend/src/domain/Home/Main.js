import React, { Component } from 'react';
import SlideBanner from '../../components/View/SlideBanner'

export default class extends Component () {
	constructor() {
		super();
	}

	render() {
		return (
			<main className='main'>
				<SlideBanner/>
			</main>
		);
	}
}