import React from 'react';
import update from 'react-addons-update';
import ContactInfo from '../contact/ContactInfo';
import Navigator from './navigator/Navigator';
import Document from './Document';

class ScrollMemo extends React.Component {
	constructor (props) {
		super(props);
	}

	/**
	 * component 마운트 전 처리
	 */
	componentWillMount() {

	}

	/**
	 * component 업데이트 후 처리
	 * @param prevProps
	 * @param prevState
	 */
	componentDidUpdate(prevProps, prevState) {

	}

	render() {
		return (
			<div style={{'position':'relative', 'float': 'left', 'width': '100%', 'height': '100%'}}>
				<Navigator/>
				<Document/>
			</div>
		)
	}
}

export default ScrollMemo;