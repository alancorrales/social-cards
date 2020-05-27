import React from 'react';
import Post from './post/post';
import './posts.css';

function Posts({ posts, width }) {
	return (
		<div className='posts'>
			{posts.map((post, i) => (
				<Post key={i} data={post} width={width} />
			))}
		</div>
	);
}

export default Posts;
