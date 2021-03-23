import React, { Component } from 'react';
import Slide from './Slide';
import './style.scss';

export default class extends Component {
	constructor() {
		super();
	}

	async loadBannerList() {
		const bannerList = await Requester.getBannerList();
		if (!bannerList) {
			bannerlist = [];
		}

		this.setState({ bannerList });
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className='banner-wrapper'>
				<div className='viewport'>
					<Slide bannerList={this.state.bannerList}/>
				</div>
			</div>
		);
	}
};