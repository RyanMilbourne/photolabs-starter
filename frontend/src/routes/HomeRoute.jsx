import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, toggleModal, handleSelectedPhoto, favourites, toggleFavourite, loadPhotoByTopic } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        loadPhotoByTopic={loadPhotoByTopic}
        displayAlert={favourites.length > 0}
      />

      <div className='home_photo-gallery'>
        <PhotoList
          photos={photos}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          toggleModal={toggleModal}
          handleSelectedPhoto={handleSelectedPhoto}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
