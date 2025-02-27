import { Search } from "lucide-react";
import { Input } from "../ui";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="flex items-center mb-6 px-10">
      {/* 🔹 왼쪽 BOOKLIST */}
      <span className="font-black text-[38px] sm:text-[24px] text-blue-950 w-full sm:w-1/3 text-left">
        BOOKLIST
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
