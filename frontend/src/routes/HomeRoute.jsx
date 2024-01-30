import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.mockTopics} />
      <PhotoList photos={props.mockPhotos} />
    </div>
  );
};

export default HomeRoute;
