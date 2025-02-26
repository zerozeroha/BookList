'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Book } from '@/types/book';

import SearchBar from '@/components/booklist/search-bar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import BookTable from './table';

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState(''); // 🔹 검색어 상태

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(`/api/books?page=${page}`);
      const data = await response.json();
      setBooks(data.books);
      setFilteredBooks(data.books);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('책 목록을 불러오는 중 오류 발생:', error);
    }
  }, [page]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleDelete = async (id: string | undefined) => {
    if (!id) {
      console.error('삭제할 책 ID가 없습니다.');
      return;
    }
    if (confirm('이 책을 삭제하시겠습니까?')) {
      try {
        await fetch(`/api/books/${id}`, { method: 'DELETE' });
        fetchBooks();
      } catch (error) {
        console.error('책 삭제 중 오류 발생:', error);
      }
    }
  };

  // 🔹 검색 기능
  useEffect(() => {
    if (!search) {
      setFilteredBooks(books);
    } else {
      const lowerSearch = search.toLowerCase();
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerSearch) ||
          book.author.toLowerCase().includes(lowerSearch)
      );
      setFilteredBooks(filtered);
    }
  }, [search, books]);

  // 10개씩 페이지네이션 그룹 계산
  const startPage = Math.floor((page - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  return (
    <div className="container mx-auto p-4">
      {/* 🔹 검색창 컴포넌트 사용 */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* 책 목록 테이블 */}
      <BookTable books={filteredBooks} onDelete={handleDelete} />

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className={page === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {/* 10개 단위 페이지 그룹 */}
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
              const pageNumber = startPage + i;
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    isActive={page === pageNumber}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* 중간 생략 (...) */}
            {totalPages > endPage && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className={
                  page === totalPages ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
