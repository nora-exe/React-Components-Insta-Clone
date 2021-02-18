import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  const { likePost, numberOfLikes } = props;
  
  //* 🌻 add click event handler to heart icon
  //* 🌻 add state instead of hardcode
  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper' onClick={(likePost)} > 
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>{numberOfLikes} likes</p> 
    </div>
  );
};

export default LikeSection;

//TODO prevent your user from "liking" the same post more than once
