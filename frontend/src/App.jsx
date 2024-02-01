import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useBool from 'hooks/useBool';

const App = () => {

  const [bool, toggleBool] = useBool();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelectedPhoto = (data) => {
    setSelectedPhoto(data);
    console.log("This is the collected photo data: ", data)
    console.log("This is the similar_photos: ", data.similar_photos)
  }

  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    if (!favourites.includes(id)) {
      setFavourites(() => [...favourites, id])
    } else {
      const copyOfArray = [...favourites].filter(favourite => id !== favourite);
      setFavourites(copyOfArray);
    }
  };

  return (
    <div className="App">
      {selectedPhoto &&
        <PhotoDetailsModal
          isOpen={bool}
          toggleClose={toggleBool}
          photos={photos}
          toggleModalDisplay={toggleBool} // added for sim photo
          handleSelectedPhoto={handleSelectedPhoto} // added for sim photo
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
