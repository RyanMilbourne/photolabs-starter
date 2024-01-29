import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">

      <img className="photo-list__image" src={props.data.imageSource}></img>

      <div className="photo-list__user-details">

        <img className="photo-list__user-profile" src={props.data.profile}></img>

        <div className="photo-list__user-info">

          <span>{props.data.username}</span>

          <div>
            <span className="photo-list__user-location">{props.data.location.city}, {props.data.location.country}</span>
          </div>

        </div>

      </div>

    </div>
  )
};

export default PhotoListItem;
