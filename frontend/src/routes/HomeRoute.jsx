import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, toggleModalDisplay, handleSelectedPhoto, favourites, toggleFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        displayAlert={favourites.length > 0}
      />

      <div className='home_photo-gallery'>
        <PhotoList
          photos={photos}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          toggleModalDisplay={toggleModalDisplay}
          handleSelectedPhoto={handleSelectedPhoto}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
