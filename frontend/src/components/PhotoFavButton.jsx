import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { toggleFavourite, favourites } = props;

  const handleClick = () => {
    toggleFavourite(props.id);
  }

  const status = favourites.includes(props.id);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={status} status={status} />
      </div>
    </div>
  );
}

export default PhotoFavButton;