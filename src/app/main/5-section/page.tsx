"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactIntro = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "이메일",
      value: "contact@company.com",
      href: "mailto:contact@company.com",
    },
    {
      icon: Phone,
      label: "전화번호",
      value: "+82 2-1234-5678",
      href: "tel:+8221234567",
    },
    {
      icon: MapPin,
      label: "위치",
      value: "서울특별시 강남구 테헤란로 123",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-8 relative overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
        style={{ zIndex: -2 }}
      />

      {/* 그라데이션 오버레이 */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"
        style={{ zIndex: -1 }}
      />

      {/* 메인 컨테이너 */}
      <div className="max-w-4xl w-full z-10">
        {/* 헤더 아이콘 */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Send className="size-12 text-white" />
          </div>
        </motion.div>

        {/* 제목 */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-white font-didot mb-4"
            animate={{
              opacity: [0.9, 1, 0.9],
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            CONTACT US
          </motion.h1>
          <p className="text-white/80 text-lg sm:text-xl font-light">
            언제든지 연락주세요
          </p>
        </motion.div>

        {/* 구분선 */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* 연락처 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="group block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-2xl group-hover:shadow-white/10">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                    <item.icon className="size-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 font-didot">
                      {item.label}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 하단 메시지 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-white/70 text-sm sm:text-base font-light">
            빠른 응답을 위해 이메일로 연락주시면 감사하겠습니다
          </p>
        </motion.div>
      </div>

      {/* 장식적 요소들 */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div
        className="absolute top-40 right-32 w-1 h-1 bg-white/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-20 w-2 h-2 bg-white/25 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </section>
  );
};

export default ContactIntro;
