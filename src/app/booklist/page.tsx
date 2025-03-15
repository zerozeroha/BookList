"use client";

import { useState } from "react";
import SearchBar from "@/components/booklist/search-bar";
import BookTable from "@/components/booklist/table";
import { mockBooks } from "@/lib/mock-data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/index";

const ITEMS_PER_PAGE = 10; // ✅ 한 페이지에 표시할 개수

export default function BookListPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // ✅ 검색 최적화 (소문자로 변환하여 검색)
  const lowerSearch = search.toLowerCase();
  const filteredBooks = mockBooks.filter(({ title, author }) =>
    [title.toLowerCase(), author.toLowerCase()].some((text) =>
      text.includes(lowerSearch)
    )
  );

  // ✅ 페이지네이션 적용 (slice로 분할)
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const paginatedBooks = filteredBooks.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-4">
      <div className="h-[100px] w-full flex"></div>
      <SearchBar search={search} setSearch={setSearch} />
      <BookTable books={paginatedBooks} onDelete={() => {}} />

      {/* ✅ 페이지네이션 유지 (데이터 기반) */}
      {totalPages > 1 && (
        <Pagination className="mt-4 cursor-pointer">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className={page === 1 ? "disabled" : ""}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className={page === totalPages ? "disabled" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
