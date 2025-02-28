"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FourTitle = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg-section4.jpeg"
          alt="Background Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ONLINE BOOKSTORE 3D 텍스트 애니메이션 */}
      <div
        className="font-serif flex flex-col lg:text-[80px] md:text-[70px] text-center cursor-pointer w-full"
        style={{
          textShadow:
            "6px 6px 10px rgba(0,0,0,0.3), 12px 12px 15px rgba(0,0,0,0.2)",
        }}
        onClick={() => router.push("/booklist")}
      >
        <div className="text-center font-bold text-red-700 w-full hover:text-red-800 ">
          The Only way To Go Great Work Is
        </div>
        <div className="text-center font-bold text-red-800 w-full">
          To Love What You Do.
        </div>
      </div>

      {/* 스크롤 유도 애니메이션 */}
      <motion.div
        className="absolute bottom-10 animate-bounce z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ChevronDown className="size-10 text-gray-50" />
      </motion.div>
    </div>
  );
};

export default FourTitle;
