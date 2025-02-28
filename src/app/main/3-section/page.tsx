"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ThreeTitle = () => {
  const router = useRouter();
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg-section3.jpeg"
          alt="Background Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ONLINE BOOKSTORE 3D 텍스트 애니메이션 */}
      <div
        className="font-serif flex flex-col lg:text-[80px] md:text-[70px] text-right cursor-pointer w-full justify-end items-end"
        style={{
          textShadow:
            "6px 6px 10px rgba(0,0,0,0.3), 12px 12px 15px rgba(0,0,0,0.2)",
        }}
        onClick={() => router.push("/booklist")}
      >
        <div className="text-right font-bold text-purple-400 w-full hover:text-purple-600 mr-4">
          We will always be with you.
        </div>
        <div className="text-right text-[12px] md:text-base font-normal text-purple-600 w-[300px] md:w-[500px] mr-8">
          Self-Esteem: The Key to Personal Growth** Self-esteem is the
          foundation of our confidence and sense of self-worth. It shapes how we
          perceive ourselves, interact with others, and approach challenges in
          life. People with healthy self-esteem tend to be more resilient, open
          to growth, and able to handle criticism constructively. On the other
          hand, low self-esteem can lead to self-doubt, fear of failure, and
          difficulty in forming strong relationships. Building self-esteem
          requires self-acceptance, positive self-talk, and setting achievable
          goals. Recognizing ones strengths and embracing imperfections are
          essential in fostering a healthy self-image. Surrounding oneself with
          supportive people and engaging in activities that bring joy and
          fulfillment can also contribute to a stronger sense of self-worth. As
          psychologist Nathaniel Branden once said, Self-esteem is the
          reputation we acquire with ourselves. Cultivating a positive
          self-image is a lifelong journey, but it is one that leads to greater
          happiness, confidence, and success in all aspects of life.
        </div>
      </div>

      {/* 스크롤 유도 애니메이션 */}
      <motion.div
        className="absolute bottom-10 animate-bounce z-10 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ChevronDown className="w-10 h-10 text-gray-50" />
      </motion.div>
    </div>
  );
};

export default ThreeTitle;
