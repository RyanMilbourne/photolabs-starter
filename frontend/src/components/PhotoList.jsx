import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, likes, toggleLike, toggleModal, handleSelectedPhoto } = props;

  // create list item for each photo
  const data = photos.map((photo) => (
    <li key={photo.id}>
      <PhotoListItem
        key={photo.id}
        data={photo}
        likes={likes}
        toggleLike={toggleLike}
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
