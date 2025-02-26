"use client";

import { Input, Button } from "@/components/ui/index";
import { Search } from "lucide-react"; // 돋보기 아이콘 추가

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="flex justify-center items-center mb-6 gap-10">
      <span className="text-900 text-[40px] text-blue-950 ">BOOKLIST</span>
      <div className="relative w-1/3">
        {/* 🔍 검색 입력창 */}
        <Input
          type="text"
          placeholder="책 제목 또는 저자를 입력하세요..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 pl-12 rounded-md border-2 border-blue-950"
        />

        {/* 🔍 돋보기 아이콘 (입력창 안에 위치) */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />

        {/* 🔄 검색 초기화 버튼 (검색어가 있을 때만 표시) */}
        {search && (
          <Button
            variant="outline"
            onClick={() => setSearch("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 text-sm"
          >
            검색 초기화
          </Button>
        )}
      </div>
    </div>
  );
}
