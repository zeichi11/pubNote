import React, { Component } from 'react';

// export default class extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
//
// 	render() {
// 		return (
// 			<div style={}>{props.title}</div>
// 		);
// 	}
// }



export default (props) => {
	const style = {
		"backgroundImage": "url(" + props.imgUrl + ")",
		"width": "100%",
		"height": "100%",
	};
	return (
		<div style={style}>{props.title}</div>
	);
}