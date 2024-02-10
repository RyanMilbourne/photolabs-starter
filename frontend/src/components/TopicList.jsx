import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, loadPhotoByTopic } = props

  const data = topics.map((topic) => (
    <TopicListItem key={topic.id} data={topic} id={topic.id} title={topic.title} loadPhotoByTopic={loadPhotoByTopic} />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {data}
    </div>
  );
};

export default TopicList;
