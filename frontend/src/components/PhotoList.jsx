import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favourites, toggleFavourite, toggleModal, handleSelectedPhoto } = props;

  // create list item for each photo
  const data = photos.map((item) => (
    <li key={item.id}>
      <PhotoListItem
        data={item}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        toggleModal={toggleModal}
        handleSelectedPhoto={handleSelectedPhoto}
        photos={photos}
      />
    </li>
  ));

  return (
    <ul className="photo-list">
      {data}
    </ul>
  );
};

export default PhotoList;
