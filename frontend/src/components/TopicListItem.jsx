import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { loadPhotoByTopic, title, id } = props

  return (
    <div className="topic-list__item">
      <span onClick={() => loadPhotoByTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
