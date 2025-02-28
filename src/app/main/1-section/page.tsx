"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Video from "@/components/title/video";

const Title = () => {
  const [showLogo, setShowLogo] = useState(true);

  // 일정 시간 후 로고가 사라지도록 설정
  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1200); // 3초 후 사라짐
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center bg-neutral-900 overflow-hidden h-screen ">
      <Video />
      {/* 하얀 원 애니메이션 */}

      <motion.div
        className="absolute bg-white rounded-full shadow-2xl"
        initial={{ width: 150, height: 150, borderRadius: "100%", opacity: 1 }}
        animate={{
          width: "150vw",
          height: "150vw",
          borderRadius: "0%",
          opacity: [1, 1, 0], // 3초 후 opacity 0
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* 로고 애니메이션 */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="absolute z-10 flex flex-col items-center mt-14"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: [-20, -40], opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }} // 사라질 때 효과 적용
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={200}
              height={150}
              priority
              className="drop-shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-40 justify-center items-center sm:w-[375px]">
        {/* ONLINE BOOKSTORE 3D 텍스트 애니메이션 */}
        <motion.div
          className="absolute font-serif flex flex-col lg:text-[80px] md:text-[70px] mt-50 text-center cursor-pointer w-full "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          style={{
            textShadow:
              "6px 6px 10px rgba(0,0,0,0.3), 12px 12px 15px rgba(0,0,0,0.2)",
          }}
          onClick={() => window.open("#", "_blank")}
        >
          <div className="text-center flex-col flex font-bold text-blue-500 w-full hover:text-blue-700">
            Robot Global Team
          </div>
          <div className="text-center flex flex-col font-bold text-blue-700 w-full">
            Online Book Store
          </div>
          {/* <div className=" flex flex-col border-2 border-white h-50 w-20"></div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Title;
