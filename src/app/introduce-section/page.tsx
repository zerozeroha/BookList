"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const BookstoreIntro = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center p-8 bg-[#0a0f29] relative overflow-hidden">
      {/* 배경 이미지 또는 비디오 */}
      <div className="absolute inset-0 bg-[url('/assets/book-bg.jpg')] bg-cover bg-center opacity-20" />

      {/* 배경 그라데이션 애니메이션 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />

      {/* 버튼 애니메이션 */}
      <motion.button
        className="mt-6 px-6 py-3 text-white rounded-lg shadow-md hover:text-blue-300 transition flex flex-col items-center gap-2 z-10"
        onClick={() => (window.location.href = "/main#booklist-section")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <BookOpen className="size-12 text-gray-100" />
        <span className="text-lg">지금 탐색하기</span>
      </motion.button>

      {/* 제목 애니메이션 */}
      <motion.h1
        className="text-5xl font-bold text-white mt-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        ONLINE BOOKSTORE
      </motion.h1>

      {/* 설명 텍스트 애니메이션 */}
      <motion.div
        className="text-white mt-8 flex flex-col justify-center items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="lg:text-[70px] sm:text-[50px] font-bold bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
          Find Your Desired Books Quickly And Easily.
        </span>
        <span className="lg:text-[50px] sm:text-[20px] font-bold bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent mt-4">
          We Offer A Wide Range Of Genres At Affordable Prices.
        </span>
      </motion.div>
    </section>
  );
};

export default BookstoreIntro;
