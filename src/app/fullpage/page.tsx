"use client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Title from "../main/1-section/page";
import Introduce from "../main/5-section/page";
import BubbleTitle from "../main/2-section/page";
import ThreeTitle from "../main/3-section/page";
import FourTitle from "../main/4-section/page";

const FullPageWrapper: React.FC = () => {
  return (
    <div className="mx-auto w-full min-w-[375px] max-w-full">
      <ReactFullpage
        licenseKey=""
        scrollingSpeed={800}
        anchors={[
          "title-section",
          "booklist-section",
          "3-section",
          "4-section",
          "introduce-section",
        ]}
        // 섹션 스냅 기능 활성화
        fitToSection={true}
        credits={{
          enabled: false,
          label: "",
          position: "right",
        }}
        // 섹션 렌더링 함수
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Title />
            </div>
            <div className="section">
              <BubbleTitle />
            </div>
            <div className="section">
              <ThreeTitle />
            </div>
            <div className="section">
              <FourTitle />
            </div>
            <div className="section">
              <Introduce />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default FullPageWrapper;
