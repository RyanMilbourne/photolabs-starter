import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favourites, toggleFavourite, toggleBool } = props;

  const data = photos.map((item) => (
    <li key={item.id}><PhotoListItem data={item} favourites={favourites} toggleFavourite={toggleFavourite} toggleBool={toggleBool} /></li>
  ));

  return (
    <ul className="photo-list">
      {data}
    </ul>
  );
};

export default PhotoList;
