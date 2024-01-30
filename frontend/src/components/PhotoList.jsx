import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const mockPhotos = props.photos;

  const data = mockPhotos.map((item) => (
    <li key={item.id}><PhotoListItem data={item} /></li>
  ));

  return (
    <ul className="photo-list">
      {data}
    </ul>
  );
};

export default PhotoList;
