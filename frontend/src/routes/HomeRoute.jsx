import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, toggleModal, handleSelectedPhoto, likes, toggleLike, showFavouritedPhotos, getPhotosByTopic, getAllPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation
        getAllPhotos={getAllPhotos}
        topics={topics}
        displayAlert={likes.length > 0}
        likes={likes}
        showFavouritedPhotos={showFavouritedPhotos}
        getPhotosByTopic={getPhotosByTopic}
      />

      <div className='home_photo-gallery'>
        <PhotoList
          photos={photos}
          likes={likes}
          toggleLike={toggleLike}
          toggleModal={toggleModal}
          handleSelectedPhoto={handleSelectedPhoto}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
