"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Reference", href: "/reference" },
  { label: "Business Corporation", href: "/business" },
  { label: "About", href: "/about", hasDropdown: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full bg-opacity-90 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* 로고 (왼쪽 정렬) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="RGT Logo"
            width={80}
            height={30}
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
              {navItems.map(({ label, href, hasDropdown }) => (
                <div key={href}>
                  <Link
                    href={href}
                    className="block text-gray-700 hover:bg-gray-100 py-2 px-2 rounded-md"
                    onClick={() =>
                      hasDropdown && setDropdownOpen(!dropdownOpen)
                    }
                  >
                    <div className="flex justify-between items-center">
                      {label}
                      {hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={dropdownOpen ? "rotate-180" : ""}
                        />
                      )}
                    </div>
                  </Link>
                  {hasDropdown && dropdownOpen && (
                    <div className="ml-4 mt-2 text-gray-600 space-y-2">
                      <Link
                        href="/about/team"
                        className="block hover:text-[#112D64]"
                      >
                        Team
                      </Link>
                      <Link
                        href="/about/careers"
                        className="block hover:text-[#112D64]"
                      >
                        Careers
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
