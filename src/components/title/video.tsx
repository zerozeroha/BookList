"use client";
import React, { useEffect, useRef, useState } from "react";

// ✅ 제공된 동영상 URL 목록
const videoSources = [
  "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
  "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
];

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState("");

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
