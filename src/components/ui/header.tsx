'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Products', href: '/products' },
  { label: 'Reference', href: '/reference' },
  { label: 'Business Corporation', href: '/business' },
  { label: 'About', href: '/about', hasDropdown: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between relative">
        {/* 언어 선택 (모바일에서는 왼쪽 정렬) */}
        <button className="lg:hidden absolute left-4 text-gray-500 hover:text-[#112D64]">
          <Globe size={18} />
          <span className="ml-1 text-sm">E/K</span>
        </button>

        {/* 로고 (중앙 정렬) */}
        <Link href="/" className="flex-1 text-center">
          <Image
            src="/assets/logo.png"
            alt="RGT Logo"
            width={80}
            height={30}
            priority
            className="mx-auto"
          />
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-500 hover:text-[#112D64] transition-colors ${
                pathname === href ? 'font-bold text-[#112D64]' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="lg:hidden text-gray-900 absolute right-4"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* 모바일 사이드바 (오른쪽에서 슬라이드) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-[80%] sm:w-[300px] bg-white h-full p-6 shadow-md absolute right-0 top-0 transition-transform transform translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 상단 영역 (갈색 배경) */}
            <div className="bg-[#3B3024] text-white flex items-center justify-between p-4">
              <span>Sign-in required.</span>
              <button className="text-white">Sign in</button>
            </div>

            {/* 닫기 버튼 */}
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* 네비게이션 메뉴 */}
            <nav className="mt-4">
              {navItems.map(({ label, href, hasDropdown }) => (
                <div key={href}>
                  <Link
                    href={href}
                    className="block text-gray-700 hover:bg-gray-100 py-2 px-2 rounded-md"
                    onClick={() =>
                      hasDropdown && setIsDropdownOpen(!isDropdownOpen)
                    }
                  >
                    <div className="flex justify-between items-center">
                      {label}
                      {hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      )}
                    </div>
                  </Link>
                  {hasDropdown && isDropdownOpen && (
                    <div className="ml-4 mt-2 text-gray-600">
                      <Link
                        href="/about/team"
                        className="block py-1 hover:text-[#112D64]"
                      >
                        Team
                      </Link>
                      <Link
                        href="/about/careers"
                        className="block py-1 hover:text-[#112D64]"
                      >
                        Careers
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* 하단 영역 */}
            <div className="absolute bottom-6 left-6 text-gray-600 flex items-center">
              <Globe size={18} />
              <span className="ml-1 text-sm">English</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
