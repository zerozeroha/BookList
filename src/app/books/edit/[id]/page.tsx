"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import type { Book } from "@/types/book";
import BookForm from "@/components/bookform/book-form";
import ChangeFormTitle from "@/components/bookform/change-title";

export default function EditBook() {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      router.push("/404");
      return;
    }

    const fetchBook = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) {
          router.push("/404");
          return;
        }
        const data = await res.json();
        setBook(data);
      } catch {
        router.push("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, router]);

  if (loading) return <div>Loading...</div>; // 로딩 중 표시
  if (!book) return <div>책을 찾을 수 없습니다.</div>; // 책 데이터가 없을 경우

  return (
    <div className="container mx-auto py-6">
      <ChangeFormTitle />
      <BookForm initialData={book} id={id} />
    </div>
  );
}
