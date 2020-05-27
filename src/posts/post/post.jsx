import React from 'react';
import SocialCard from './card/card';
import {
	ModeCommentOutlined,
	Share,
	Favorite,
	EmailOutlined,
} from '@material-ui/icons';

import './post.css';

function Post({ data, width }) {
	return (
		<div className='postContainer' style={{ maxWidth: width }}>
			<img
				className='avatarImage'
				src={data.profileAvatar}
				alt='Profile avatar'
			/>
			<div>
				<p className='header'>
					<span className='profileName'>{data.profileName}</span>
					<span className='profileAccount'>{data.profileAccount}</span>
					<span className='profileDate'>{data.date}</span>
				</p>
				<p className='text'>{data.text}</p>
				<p className='author'>
					author: <span className='authorAccount'>{data.authorAccount}</span>
				</p>
				<SocialCard width={width} card={data.card} />
				<ul className='actionIcons'>
					<li>
						<ModeCommentOutlined />
						<span>{data.comments}</span>
					</li>
					<li className='sharesTheme'>
						<Share />
						<span>{data.shares}</span>
					</li>
					<li className='likesTheme'>
						<Favorite />
						<span>{data.likes}</span>
					</li>
					<li>
						<EmailOutlined color='primary' />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Post;
