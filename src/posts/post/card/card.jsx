import React from 'react';
import './card.css';

function SocialCard({ card, width }) {
	return (
		<div className='card'>
			<img
				width={width}
				height={width / 2}
				src={card.image}
				alt='Fake-generated'
			/>
			<div className='content'>
				<p className='title'>{card.title}</p>
				<p className='description'>{card.description}</p>
				<p className='url'>{card.url}</p>
			</div>
		</div>
	);
}

export default SocialCard;
