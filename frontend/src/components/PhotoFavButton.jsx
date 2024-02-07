import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { toggleFavourite, favourites, photo } = props;

  const handleClick = () => {
    toggleFavourite(photo);
  }

  const isFavourite = favourites.some((fav) => fav.id === photo.id)

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;