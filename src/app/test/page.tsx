'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LogoReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // 로고를 일정 시간 후 숨김

  useEffect(() => {
    setTimeout(() => setIsRevealed(true), 500);
    setTimeout(() => setShowLogo(false), 2000); // 2초 후 로고 사라짐
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-neutral-900">
      {/* 하얀 원 애니메이션 */}
      <motion.div
        className="absolute bg-gray-50 rounded-full shadow-2xl"
        initial={{ width: 150, height: 150, borderRadius: '100%' }}
        animate={
          isRevealed
            ? { width: '150vw', height: '150vw', borderRadius: '0%' }
            : {}
        }
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />

      {/* 로고 애니메이션 (나타났다 사라짐) */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="absolute z-10 flex flex-col items-center mt-14"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: [-20, -40], opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={100}
              height={50}
              priority
              className="drop-shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* RGT 텍스트 애니메이션 */}
      {isRevealed && (
        <motion.p
          className="absolute text-white text-[100px] font-extrabold mb-40 text-center drop-shadow-[3px_3px_0_rgba(0,0,0,1)]"
          initial={{
            opacity: 0,
            y: 30,
            transform: 'perspective(1000px) rotateX(0deg)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            transform: 'perspective(1000px) rotateX(15deg)',
            textShadow:
              '6px 6px 0px rgba(0,0,0,0.3), 12px 12px 0px rgba(0,0,0,0.2), 18px 18px 0px rgba(0,0,0,0.1)',
          }}
          transition={{ duration: 1, delay: 2.5, ease: 'easeInOut' }}
        >
          RGT
        </motion.p>
      )}

      {/* ROBOT GLOBAL TEAM 텍스트 애니메이션 */}
      {isRevealed && (
        <motion.p
          className="absolute text-gray-900 text-base font-bold mb-4 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          ROBOT . GLOBAL . TEAM
        </motion.p>
      )}

      {/* ONLINE BOOKSTORE 3D 텍스트 애니메이션 */}
      {isRevealed && (
        <motion.p
          className="absolute text-white text-[100px] font-extrabold mt-20 text-center drop-shadow-[3px_3px_0_rgba(0,0,0,1)]"
          initial={{
            opacity: 0,
            y: 30,
            transform: 'perspective(1000px) rotateX(0deg)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            transform: 'perspective(1000px) rotateX(15deg)',
            textShadow:
              '6px 6px 0px rgba(0,0,0,0.3), 12px 12px 0px rgba(0,0,0,0.2), 18px 18px 0px rgba(0,0,0,0.1)',
          }}
          transition={{ duration: 1, delay: 2.5, ease: 'easeInOut' }}
        >
          ONLINE BOOKSTORE
        </motion.p>
      )}

      {/* 밑으로 당겨서 더보기 */}
      {isRevealed && (
        <motion.p
          className="absolute text-neutral-600 text-10 font-extrabold bottom-0 text-center "
          initial={{
            opacity: 0,
            y: 30,
            transform: 'perspective(1000px) rotateX(0deg)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            transform: 'perspective(1000px) rotateX(15deg)',
          }}
          transition={{ duration: 1, delay: 2.5, ease: 'easeInOut' }}
        >
          밑으로 당겨서 더보기
        </motion.p>
      )}
    </div>
  );
}
