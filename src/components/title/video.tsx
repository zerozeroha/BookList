"use client";
import React, { useEffect, useRef, useState } from "react";

// ✅ 제공된 동영상 URL 목록
const videoSources = [
  // "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
  // "https://dream-machine.lumalabs.ai/share/idea/43d2265d-888f-4409-8ce6-154f2f463f61",
  "/assets/bg.mp4",
];

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined); // ✅ 초기값을 undefined로 설정

  //  랜덤 비디오 선택 & 2초 후 자동 재생
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    setVideoSrc(videoSources[randomIndex]);

    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        src={videoSrc} // ✅ 동적 비디오 URL 적용
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
    </div>
  );
}
