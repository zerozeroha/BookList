import BookForm from "@/components/bookform/book-form";
import NewFormTitle from "@/components/bookform/new-title";

export default function NewBook() {
  return (
    <div className="container mx-auto py-6 bg-red-500 h-[1000px]">
      <NewFormTitle />
      <BookForm />
    </div>
  );
}
