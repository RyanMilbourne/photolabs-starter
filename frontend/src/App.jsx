import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useBool from 'hooks/useBool';

const App = () => {

  const [bool, toggleBool] = useBool();

  return (
    <div className="App">
      <PhotoDetailsModal isOpen={bool} />
      <HomeRoute photos={photos} topics={topics} toggleBool={toggleBool} />
    </div>
  );
};

export default App;
