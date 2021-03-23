import React, { Component } from 'react';
import Note from '../../components/pubNote/note/Note';
import { Link } from 'react-router-dom';
import './style.scss';

class User extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		let width = function getWidth() {
				return Math.max(
					document.body.scrollWidth,
					document.documentElement.scrollWidth,
					document.body.offsetWidth,
					document.documentElement.offsetWidth,
					document.documentElement.clientWidth
				);
			}(),
			height = function getHeight() {
				return Math.max(
					document.body.scrollHeight,
					document.documentElement.scrollHeight,
					document.body.offsetHeight,
					document.documentElement.offsetHeight,
					document.documentElement.clientHeight
				);
			}();

		return (
			<div className={'inner-wrapper'}>
				{/*<div className={'let-area'}/>*/}
				<div className={'note-area'}><Note browserWidth={width} browserHeight={height}/></div>
				{/*<div className={'right-area'}/>*/}
				<Link to='/Home'>go to Home</Link>
			</div>
		)
	}
}

export default User;