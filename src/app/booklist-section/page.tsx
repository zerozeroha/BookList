"use client";

import { useState, useEffect, useMemo } from "react";
import type { Book } from "@/types/book";
import SearchBar from "@/components/booklist/search-bar";
import BookTable from "@/components/booklist/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`/api/books?page=${page}`);
        const data = await res.json();
        setBooks(data.books);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("책 목록을 불러오는 중 오류 발생:", error);
      }
    };

    fetchBooks();
  }, [page]);

  const handleDelete = async (id?: string) => {
    if (!id || !confirm("이 책을 삭제하시겠습니까?")) return;
    try {
      await fetch(`/api/books/${id}`, { method: "DELETE" });
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (error) {
      console.error("책 삭제 중 오류 발생:", error);
    }
  };

  // 🔹 검색 필터링을 `useMemo`로 최적화
  const filteredBooks = useMemo(
    () =>
      search
        ? books.filter(
            ({ title, author }) =>
              title.toLowerCase().includes(search.toLowerCase()) ||
              author.toLowerCase().includes(search.toLowerCase())
          )
        : books,
    [search, books]
  );

  // 🔹 10개씩 페이지네이션 그룹 계산
  const startPage = Math.floor((page - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  return (
    <div className="container mx-auto p-4 h-screen">
      <SearchBar search={search} setSearch={setSearch} />
      <BookTable books={filteredBooks} onDelete={handleDelete} />

      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
              <PaginationItem key={startPage + i}>
                <PaginationLink
                  isActive={page === startPage + i}
                  onClick={() => setPage(startPage + i)}
                >
                  {startPage + i}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > endPage && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
