import React from 'react';
import TopMenu from '../../components/View/TopMenu/';
import SideMenu from '../../components/View/SideMenu/';

export default function () {
	return (
		<header className='header'>
			<TopMenu/>
			<SideMenu/>
		</header>
	);
}