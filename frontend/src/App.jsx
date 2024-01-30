import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';

const App = () => {

  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
