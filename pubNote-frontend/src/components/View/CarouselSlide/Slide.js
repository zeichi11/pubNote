import React from 'react';
import Banner from './Banner';
import Button from './Button';
import Indicator from './Indicator';
import './style.scss';

export default function (props) {
	const convertBannerListToComponent = (bannerList) => {
		return bannerList.map((banner, index) => {
			return (<Banner key={index}
							title={banner.title}
							imgUrl={banner.imgUrl}
							linkTo={banner.linkTo}/>);
		})
	};

	return (
		<div className='slide'>
			{convertBannerListToComponent(props.bannerList)}
		</div>
	);
};