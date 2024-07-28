import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={handleLike} className="like-button">
      {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
      Like me!
    </button>
  );
};

export default LikeButton;
