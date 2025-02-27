import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";

function Footer({
  nextSectionRef,
}: {
  nextSectionRef: React.RefObject<HTMLDivElement>;
}) {
  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center py-10">
      {/* 스크롤 유도 애니메이션 */}
      <motion.div
        className="cursor-pointer absolute bottom-10 animate-bounce z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={handleScroll}
      >
        <ChevronDown className="size-10 text-gray-50" />
      </motion.div>
    </div>
  );
}

export default Footer;
