import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    
    <div>
      console.log(props.data.map(comments));
      {/* map through the comments prop and render a Comment for every piece of data */}
      {props.data.map(comments)}
    </div>
  );
};

export default Comments;
