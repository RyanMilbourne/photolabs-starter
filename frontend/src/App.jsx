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
  }

  return (
    <div className="App">
      <PhotoDetailsModal
        isOpen={bool}
        toggleClose={toggleBool}
        photos={photos}
        selectedPhoto={selectedPhoto}
      />

      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModalDisplay={toggleBool}
        handleSelectedPhoto={handleSelectedPhoto}
      />
    </div>
  );
};

export default App;
