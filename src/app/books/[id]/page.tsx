import { notFound } from "next/navigation";
import BookForm from "@/components/book-form";
import type { Book } from "@/types/book";

async function getBook(id: string): Promise<Book> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`);
  if (!res.ok) notFound();
  return res.json();
}

export default async function EditBook({ params }: { params: { id: string } }) {
  const book = await getBook(params.id);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">책 수정</h1>
      <BookForm initialData={book} id={params.id} />
    </div>
  );
}
