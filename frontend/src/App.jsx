import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const { bool, toggleBool, selectedPhoto, handleSelectedPhoto, favourites, toggleFavourite } = useApplicationData();


  return (
    <div className="App">
      {selectedPhoto &&
        <PhotoDetailsModal
          isOpen={bool}
          toggleClose={toggleBool}
          photos={photos}
          toggleModalDisplay={toggleBool}
          handleSelectedPhoto={handleSelectedPhoto}
          selectedPhoto={selectedPhoto}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      }

      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModalDisplay={toggleBool}
        handleSelectedPhoto={handleSelectedPhoto}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;
