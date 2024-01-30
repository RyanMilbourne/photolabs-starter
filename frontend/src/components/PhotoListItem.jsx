import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { urls, user, location } = props.data;
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={urls.regular}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}></img>
        <div className="photo-list__user-info">
          <span>{user.name}</span>
          <div className="photo-list__user-location">
            <span>{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
