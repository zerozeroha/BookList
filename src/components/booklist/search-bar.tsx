'use client';

import { Input, Button } from '@/components/ui/index';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <Input
        type="text"
        placeholder="책 제목 또는 저자를 입력하세요..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/3 border p-2 rounded-md"
      />
      {search && (
        <Button variant="outline" onClick={() => setSearch('')}>
          검색 초기화
        </Button>
      )}
    </div>
  );
}
