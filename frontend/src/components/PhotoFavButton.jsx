import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={status} />
      </div>
    </div>
  );
}

export default PhotoFavButton;