import React from 'react';
import './style.scss';

export default function () {
	return (
		<div className='top-menu-wrapper'>
			<button className='btn-float-left menu-btn'/>
			<a className='btn-float-left home-btn'>
				<h1>
					pubNote
				</h1>
			</a>
			<button className='btn-float-right search-btn'/>
			<button className='btn-float-right start-btn'/>
		</div>
	);
};