"use client";

import { useState } from "react";
import useSWR from "swr";
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
} from "@/components/ui/pagination";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BookList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, error, mutate } = useSWR(`/api/books?page=${page}`, fetcher);
  // type Book is now imported from "@/types/book"

  const books: Book[] = data?.books || [];
  const totalPages = data?.totalPages || 1;

  const handleDelete = async (id?: string) => {
    if (!id || !confirm("이 책을 삭제할까요?")) return;
    await fetch(`/api/books/${id}`, { method: "DELETE" });
    mutate();
  };

  // 검색 기능
  const filteredBooks = books.filter(({ title, author }) =>
    [title, author].some((text) =>
      text.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto p-4">
      <SearchBar search={search} setSearch={setSearch} />
      {error ? (
        <p className="text-red-500 text-center">데이터를 불러올 수 없습니다.</p>
      ) : (
        <>
          <BookTable books={filteredBooks} onDelete={handleDelete} />
          {totalPages > 1 && (
            <Pagination className="mt-4">
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
        </>
      )}
    </div>
  );
}
