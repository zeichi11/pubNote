import React, { Component } from 'react';
import './style.scss';

class Cover extends Component {
	render() {
		console.log(this.props.browserWidth);
		return (
			<div className={'note-cover'} style={{'height': '400px'}}>
				<div className={'note-cover-inner'}></div>
			</div>
		);
	}
}

export default Cover;