import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, toggleModalDisplay, handleSelectedPhoto } = props;

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
    <div className="home-route">
      <TopNavigation
        topics={topics}
        displayAlert={favourites.length > 0}
      />

      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleModalDisplay={toggleModalDisplay}
        handleSelectedPhoto={handleSelectedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
