import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { urls, user, location, similar_photos, id } = props.data;
  const { likes, toggleLike, toggleModal, handleSelectedPhoto, photos, data } = props;

  // when opening modal, open modal and pass selected photo data
  const openPhotoModal = () => {
    toggleModal();
    handleSelectedPhoto(data);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton likes={likes} toggleLike={toggleLike} photo={data} />
      <img className="photo-list__image" src={urls.full} onClick={openPhotoModal}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}></img>
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <div className="photo-list__user-location">
            <span>{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
    </div >
  )
};

export default PhotoListItem;
