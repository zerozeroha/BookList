"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const BookstoreIntro = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center p-4 sm:p-8 relative overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-[url('/assets/bg.jpeg')] bg-cover bg-center"
        style={{ zIndex: -1 }}
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/70" style={{ zIndex: -1 }} />

      {/* 버튼 */}
      <button
        className="group px-6 py-3 text-white hover:text-gray-400 transition flex flex-col items-center gap-4 z-10 mb-8 sm:mb-12"
        onClick={() => (window.location.href = "/booklist")}
      >
        <span className="text-lg ">지금 탐색하기</span>
        <BookOpen className="size-12 text-gray-100 group-hover:text-gray-400" />
      </button>

      {/* 제목 */}
      <div className="flex items-center justify-center">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-white z-10"
          initial={{ opacity: 0.9 }}
          animate={{
            opacity: [0.9, 1, 0.9],
            filter: ["blur(2px)", "blur(1px)", "blur(2px)"],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <div className="flex flex-col items-center justify-center font-didot">
            <span>ONLINE</span>
            <span>BOOKSTORE</span>
          </div>
        </motion.h1>
      </div>

      {/* 구분선 */}
      <div className="w-[300px] sm:w-[400px] h-[4px] bg-white rounded-full mt-8 sm:mt-8" />

      {/* 설명 텍스트 */}
      <div className="flex justify-center items-center sm:pl-24">
        <div className="text-white mt-6 sm:mt-8 flex flex-col justify-center items-center z-10 font-didot">
          <span className="text-2xl sm:text-[50px] font-bold bg-gradient-to-r from-blue-300 to-gray-200 bg-clip-text text-transparent max-w-[90%] sm:max-w-[500px] leading-normal">
            Find Your Desired Books Quickly And Easily With Us.
          </span>
          <span className="text-lg sm:text-[30px] font-bold bg-gradient-to-r from-gray-200 to-blue-300 bg-clip-text text-transparent mt-2 sm:mt-4 max-w-[90%] sm:max-w-[300px] leading-normal">
            We Offer A Wide Range Of Genres At Affordable Prices.
          </span>
        </div>
        <div className="hidden sm:block border-b-8 border-t-8 border-r-8 h-[200px] w-[100px] bg-transparent border-white" />
      </div>
    </section>
  );
};

export default BookstoreIntro;
