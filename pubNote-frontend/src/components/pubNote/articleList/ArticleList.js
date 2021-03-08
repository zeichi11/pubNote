import React, { Component } from 'react';
import Article from './article/Article';
import './style.scss';

class ArticleList extends Component {
	render() {
		return (
			<ul className={'article-list'} style={{'width': '700px'}}>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
			</ul>
		);
	}
}

export default ArticleList;