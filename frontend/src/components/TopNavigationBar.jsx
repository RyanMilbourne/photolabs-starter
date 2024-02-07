import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, displayAlert, loadPhotoByTopic, favourites, showFavouritedPhotos } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='nav_action'>
        <TopicList
          topics={topics}
          loadPhotoByTopic={loadPhotoByTopic}
        />
        <FavBadge
          displayAlert={displayAlert}
          favourites={favourites}
          showFavouritedPhotos={showFavouritedPhotos}
        />
      </div>
    </div>
  )
}

export default TopNavigation;