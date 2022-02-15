import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className='Footer'>
			<div className='Signature'>
				Made with hate and love by{' '}
				<a
					className='Footer-link'
					target='_blank'
					rel='nofollow noopener noreferrer'
					href='https://t.me/Vadicus'
				>
					Vadicus
				</a>
			</div>
			<p>2021</p>
		</div>
	);
}

export default Footer;
