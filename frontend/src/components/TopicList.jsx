import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, loadPhotoByTopic } = props

  const data = topics.map((item) => (
    <TopicListItem key={item.id} data={item} loadPhotoByTopic={loadPhotoByTopic} />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {data}
    </div>
  );
};

export default TopicList;
