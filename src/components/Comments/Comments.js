import React from 'react';
import Comment from './Comment';
import './Comments.css';

//* 🌻 Loop over data rendering comments; give comments key and 'comment' prop
const Comments = props => {
  const { comments } = props;

  return (
    <div>
      {
        comments.map((comment) => {
          return <
          Comment
          key={comment.id}
          comment={comment}
          />
        })
      }      
    </div>
  );
};

export default Comments;
