import React, { Component } from 'react';
import Title from './Title';
import Thumbs from './Thumbs';

class Article extends Component {
	render() {
		return (
			<li className={'article'}>
				<div style={{'height': '230px', 'width': '195px', 'border': '1px solid #b8b8b8'}}/>
				{/*<Title/>*/}
				{/*<Thumbs/>*/}
			</li>
		);
	}
}

export default Article;