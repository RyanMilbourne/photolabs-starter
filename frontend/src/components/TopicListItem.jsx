import React from "react";

import "../styles/TopicListItem.scss";
import TopicList from "./TopicList";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = () => {

  return (
    <div className="topic-list__item">
      <TopicList />
    </div>
  );
};

export default TopicListItem;
