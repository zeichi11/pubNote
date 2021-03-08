import React, { Component } from 'react';
import ArticleList from '../articleList/ArticleList';
import './style.scss';

class Section extends Component {
	render() {
		return (
			<div className={'note-section'} style={{'marginTop': '400px'}}>
				<div className={'note-section-frame'}>
					<ArticleList/>
				</div>
			</div>
		);
	}
}

export default Section;