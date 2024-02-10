import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, id, getPhotosByTopic } = props

  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosByTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
