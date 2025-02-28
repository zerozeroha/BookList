"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BubbleTitle = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg-booklist.jpeg"
          alt="Background Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ONLINE BOOKSTORE 3D 텍스트 애니메이션 */}
      <div
        className=" flex font-serif flex-col lg:text-[80px] md:text-[70px] text-left cursor-pointer w-full"
        style={{
          textShadow:
            "6px 6px 10px rgba(0,0,0,0.3), 12px 12px 15px rgba(0,0,0,0.2)",
        }}
        onClick={() => router.push("/booklist")}
      >
        <div className="text-left font-bold text-yellow-200 w-full ml-4 hover:text-yellow-400">
          Explore Various Books
        </div>
        <div className="text-left text-[12px] md:text-base font-normal text-yellow-400 ml-8 w-[300px] md:w-[500px]">
          Online bookstores have transcended the limitations of traditional
          bookstores by leveraging digital technology and the internet,
          providing readers with a more convenient reading environment.
          Platforms such as Amazon, Kyobo Bookstore, and Yes24 offer vast book
          selections without physical constraints, allowing readers to easily
          find desired books through search and recommendation systems. In
          particular, AI-based personalized recommendation systems analyze
          readers purchasing patterns to provide tailored book suggestions,
          enhancing the overall reading experience (Kim & Park, 2021).
          Additionally, the rise of e-books and audiobooks has enabled readers
          to access books anytime and anywhere via mobile devices, significantly
          improving accessibility.
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

export default BubbleTitle;
