"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Booklist", href: "/booklist" },
  { label: "Newbook", href: "/books/new" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full bg-opacity-90 bg-white shadow-md z-50 font-didot">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* 로고 (왼쪽 정렬) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="RGT Logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-500 hover:text-[#112D64] transition-colors ${
                pathname === href ? "font-bold text-[#112D64]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* 모바일 사이드바 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-[80%] sm:w-[300px] bg-white h-full p-6 shadow-lg absolute right-0 top-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* 네비게이션 메뉴 */}
            <nav className="mt-8 space-y-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-gray-700 hover:bg-gray-100 py-2 px-2 rounded-md"
                  onClick={() => setIsOpen(false)} // 메뉴 클릭 시 닫기
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
