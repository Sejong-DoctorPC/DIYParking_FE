import React, { useState } from "react";
//import "./styles.css";

const content = [
  {
    tab: "🚗일반 모드",
    content:
    "일반적인 모드입니다!"
  },
  {
    tab: "🏕캠핑 모드",
    content:
    "캠핑차 없이도 캠핑을 즐겨보세요 ^^"
  },
  {
    tab: "📽영화관 모드",
    content:
    "차에서 즐기는 영화 한 편의 여유"
  },
  {
    tab: "❗️재난 대피용",
    content:
    "재난 대피용입니다."
  }
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

export default function ModeNavTab() {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <div className="nav-tab">
      {content.map((section, index) => (
        <button className="mode hover3" onClick={() => contentChange(index)}>{section.tab}</button>
      ))}
      <br />
      <br />
      {contentItem.content}
    </div>
  );
}