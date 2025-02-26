import BookForm from "@/components/book-form";

export default function NewBook() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">새 책 추가</h1>
      <BookForm />
    </div>
  );
}
