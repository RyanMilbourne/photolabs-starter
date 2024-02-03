import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { loadPhotoByTopic } = props
  const { title } = props.data;

  return (
    <div className="topic-list__item">
      <span onClick={() => loadPhotoByTopic(props.data.id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
