import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
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
          photos={state.photoData}
          toggleModal={toggleModal}
          handleSelectedPhoto={handleSelectedPhoto}
          selectedPhoto={state.selectedPhoto}
          favourites={state.favourites}
          toggleFavourite={toggleFavourite}
        />
      }

      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        toggleModal={toggleModal}
        handleSelectedPhoto={handleSelectedPhoto}
        favourites={state.favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;
