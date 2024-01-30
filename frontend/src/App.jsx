import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const App = () => {

  return (
    <div className="App">
      <PhotoList />
    </div>
  );
};

export default App;
