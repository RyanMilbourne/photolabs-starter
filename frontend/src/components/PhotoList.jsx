import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {

  const data = photos.map((item) => (
    <li key={item.id}><PhotoListItem data={item} /></li>
  ));

  return (
    <ul className="photo-list">
      {data}
    </ul>
  );
};

export default PhotoList;
