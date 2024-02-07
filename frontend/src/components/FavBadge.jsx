import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { displayAlert, showFavouritedPhotos } = props;

  return (
    <div className='fav-badge' onClick={showFavouritedPhotos}>
      <FavIcon
        displayAlert={displayAlert}
        selected={displayAlert}
      />
    </div>
  )
};

export default FavBadge;