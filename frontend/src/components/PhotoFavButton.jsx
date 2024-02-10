import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { likes, photo, toggleLike } = props;

  const handleClick = () => {
    toggleLike(photo);
  }

  const isFavourite = likes.some((fav) => fav.id === photo.id)

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;