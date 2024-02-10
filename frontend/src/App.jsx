import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const { state, toggleLike, toggleModal, handleSelectedPhoto, showFavouritedPhotos, getPhotosByTopic, getAllPhotos } = useApplicationData();

  return (
    <div className="App">
      {state.selectedPhoto &&
        <PhotoDetailsModal
          isOpen={toggleModal}
          toggleClose={() => toggleModal(null)}
          photos={state.photoData}
          toggleModal={toggleModal}
          handleSelectedPhoto={handleSelectedPhoto}
          selectedPhoto={state.selectedPhoto}
          likes={state.likes}
          toggleLike={toggleLike}
        />
      }

      <HomeRoute
        photos={state.openFavourites ? state.likes : state.photoData}
        topics={state.topicData}
        toggleModal={toggleModal}
        handleSelectedPhoto={handleSelectedPhoto}
        likes={state.likes}
        toggleLike={toggleLike}
        showFavouritedPhotos={showFavouritedPhotos}
        getPhotosByTopic={getPhotosByTopic}
        getAllPhotos={getAllPhotos}
      />
    </div>
  );
};

export default App;
