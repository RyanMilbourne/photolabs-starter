import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { imageSource, profile, username, location } = props.data;
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}></img>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">
            <span>{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
