import { notFound } from "next/navigation";
import BookForm from "@/components/book-form";
import type { Book } from "@/types/book";

// ✅ 비동기 함수로 책 정보 가져오기
async function getBook(id?: string): Promise<Book | null> {
  if (!id) return null; // id가 없으면 null 반환

  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL || ""}/api/books/${id}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ✅ 서버 컴포넌트에서 `params`를 비동기적으로 처리
export default async function EditBook({
  params,
}: {
  params: { id?: string };
}) {
  if (!params?.id) return notFound(); // params가 없으면 404 처리

  const book = await getBook(params.id);
  if (!book) return notFound(); // 책 데이터가 없으면 404 처리

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">책 수정</h1>
      <BookForm initialData={book} id={params.id} />
    </div>
  );
}

// ✅ `dynamicParams` 추가하여 동적 라우트 인식
export const dynamicParams = true;
