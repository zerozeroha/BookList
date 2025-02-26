import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Title from "../title-section/page";
import BookList from "../booklist-section/page";
import Introduce from "../introduce-section/page";

const FullPageWrapper: React.FC = () => {
  return (
    <div className="mx-auto w-full min-w-[375px] max-w-full">
      <ReactFullpage
        licenseKey=""
        // 스크롤 전환 속도 (밀리초 단위, 700ms)
        scrollingSpeed={800}
        // 각 섹션의 앵커 (URL 해시와 연결됨)
        anchors={["title-section", "booklist-section", "introduce-section"]}
        // 섹션 스냅 기능 활성화
        fitToSection={true}
        // Fullpage.js 하단 저작권 표시 설정
        credits={{
          enabled: false, // 저작권 메시지 표시 여부 (false: 숨김)
          label: "", // 메시지 텍스트 - 이걸 없애야 밑에 안 뜸.
          position: "right", // 메시지 위치 ("right", "left", "top", "bottom")
        }}
        // 섹션 렌더링 함수
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Title />
            </div>
            <div className="section">
              <BookList />
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
