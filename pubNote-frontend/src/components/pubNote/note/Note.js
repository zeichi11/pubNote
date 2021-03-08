import React, { Component } from 'react';
import Cover from './Cover';
import Section from './Section';
import Footer from './Footer';
import './style.scss';

class Note extends Component {
	render() {
		return (
			<div className={'note-wrapper'}>
				<Cover browserWidth={this.props.browserWidth} browserHeight={this.props.browserHeight}/>
				<Section browserWidth={this.props.browserWidth} browserHeight={this.props.browserHeight}/>
				<Footer browserWidth={this.props.browserWidth} browserHeight={this.props.browserHeight}/>
			</div>
		);
	}
}

export default Note;