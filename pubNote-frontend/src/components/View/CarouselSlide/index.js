import React, { Component } from 'react';
import Slide from './Slide';
// import Requester from '../../../utils/Requester';
import './style.scss';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = { bannerList: [] };
	}

	componentDidMount() {
		// const { bannerList } = Requester.loadBannerList();
		// this.setState({ bannerList });
		this.setState(
			{
				bannerList: [
					{
						title: "title 1",
						imgUrl: "https://demo.ycart.kr/shopboth_marmalade_001/data/editor/1612/cd2f39a0598c81712450b871c218164f_1482469121_0784.jpg",
						linkTo: "http://naver.com"
					},
					{
						title: "title 2",
						imgUrl: "https://previews.123rf.com/images/vectoraart/vectoraart1505/vectoraart150500024/40557778-%EA%B5%AC%EB%A6%84-%EC%9D%B4%EB%AF%B8%EC%A7%80%EA%B0%80-%EB%A7%8E%EC%9D%80-%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98.jpg",
						linkTo: "http://google.com"
					},
					{
						title: "title 3",
						imgUrl: "https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg",
						linkTo: "http://daum.net"
					},
					{
						title: "title 4",
						imgUrl: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__340.jpg",
						linkTo: "http://gw.hancom.com"
					}
				]
			}
		);
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