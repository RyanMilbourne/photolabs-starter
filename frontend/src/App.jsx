import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const { state, toggleFavourite, toggleModal, handleSelectedPhoto } = useApplicationData();

  return (
    <div className="App">
      {state.selectedPhoto &&
        <PhotoDetailsModal
          isOpen={toggleModal}
          toggleClose={() => toggleModal(null)}
          photos={photos}
          toggleModal={toggleModal}
          handleSelectedPhoto={handleSelectedPhoto}
          selectedPhoto={state.selectedPhoto}
          favourites={state.favourites}
          toggleFavourite={toggleFavourite}
        />
      }

      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModal={toggleModal}
        handleSelectedPhoto={handleSelectedPhoto}
        favourites={state.favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;
