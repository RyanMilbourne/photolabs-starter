import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const App = () => {

  // const photoArray = [1, 2, 3];

  return (
    <div className="App">
      {/* {photoArray.map((index) => (<PhotoListItem key={index} data={sampleDataForPhotoListItem} />))} */}
      <PhotoList />
    </div>
  );
};

export default App;
