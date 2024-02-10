import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, displayAlert, favourites, showFavouritedPhotos, getPhotosByTopic, getAllPhotos } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={getAllPhotos}>PhotoLabs</span>
      <div className='nav_action'>
        <TopicList
          topics={topics}
          getPhotosByTopic={getPhotosByTopic}
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