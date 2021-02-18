//* 🌻 Pass in props for LikeSection and Comments

import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  const { post, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      
      <LikeSection numberOfLikes={post.likes} likePost={() => likePost(post.id)} />
      <Comments comments={post.comments} />
    </div>
  );
};

export default Post;
