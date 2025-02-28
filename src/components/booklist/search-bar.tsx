import { Search } from "lucide-react";
import { Input } from "../ui";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="flex flex-col items-center mb-6 px-10">
      {/* 🔹 왼쪽 BOOKLIST */}
      <span className="font-black font-serif text-[32px] md:text-[60px] lg:text-[80px] text-neutral-800 w-full text-center">
        BOOKLIST
      </span>
      <span className=" text-[12px] font-mono md:text-[16px] lg:text-[20px] text-neutral-800 w-full text-center mb-2">
        나에게 꼭 맞는 책을 찾아보세요
      </span>

      {/* 🔹 가운데 검색창 */}
      <div className="relative md:w-1/3 sm:w-2/3 flex justify-center">
        <Input
          type="text"
          placeholder="책 제목 또는 저자를 입력하세요..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 pl-12 rounded-md border-2 border-blue-950"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
      </div>

      {/* 🔹 오른쪽 빈 공간 (w-1/3)으로 검색창을 중앙 정렬 */}
      <div className="md:w-1/3 sm:w-0"></div>
    </div>
  );
}
