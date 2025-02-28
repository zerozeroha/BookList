"use client";

import { Book } from "@/types/book";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/index";
import { Star } from "lucide-react";
import Link from "next/link";

type BookTableProps = {
  books: Book[];
  onDelete: (id: string | undefined) => void;
};

export default function BookTable({ books, onDelete }: BookTableProps) {
  return (
    <Table className="w-full cursor-default">
      <TableHeader className="w-full border-y-2 border-neutral-900 bg-gray-100">
        <TableRow className="w-full text-lg text-neutral-900">
          <TableHead className="w-1/4 text-center items-center">제목</TableHead>
          <TableHead className="w-1/4 text-center">저자</TableHead>
          <TableHead className="w-1/4 text-center">평점</TableHead>
          <TableHead className="w-1/4 text-center">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.length > 0 ? (
          books.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="w-1/4 text-center">{book.title}</TableCell>
              <TableCell className="w-1/4 text-center">{book.author}</TableCell>
              <TableCell className="w-1/4 text-center">
                {book.rating && (
                  <div className="flex justify-center items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1">{book.rating}</span>
                  </div>
                )}
              </TableCell>
              <TableCell className="w-1/4 text-center">
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/books/${book.id}`}>상세보기</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(book.id)}
                  >
                    삭제
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-4">
              검색 결과가 없습니다.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
