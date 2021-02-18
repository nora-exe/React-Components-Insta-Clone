import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;

  //* 🌻 Loop over data rendering posts (.map)
  return (
    <div className='posts-container-wrapper'>
      {
        posts.map((post) => {
          return <
            Post
            key={post.id}
            post={post}
            likePost={likePost}
          />
        })
      }
    </div>
  );
};

export default Posts;
