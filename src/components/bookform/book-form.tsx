"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui";

interface BookFormProps {
  initialData?: {
    title: string;
    author: string;
    description: string;
    rating?: number;
  };
  id?: string;
}

export default function BookForm({ initialData, id }: BookFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    initialData || { title: "", author: "", description: "", rating: undefined }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(id ? `/api/books/${id}` : "/api/books", {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/");
      router.refresh();
    }
  };

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <Card className="max-w-4xl mx-auto bg-[#ffffff] shadow-md rounded-lg p-6">
      <CardHeader className="mb-4">
        <CardTitle
          className="text-3xl font-serif text-neutral-900 border-b border-neutral-300"
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          {id ? "Edit Book" : "Add New Book"}
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-neutral-900"
              >
                제목
              </label>
              <Input
                id="title"
                value={formData.title}
                onChange={handleChange("title")}
                required
                className="mt-1 p-3 border border-slate-200 rounded-md focus:bg-slate-50 focus:border-slate-700"
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="block text-lg font-medium text-neutral-900"
              >
                저자
              </label>
              <Input
                id="author"
                value={formData.author}
                onChange={handleChange("author")}
                required
                className="mt-1 p-3 border border-slate-200 rounded-md focus:bg-slate-50 focus:border-slate-700"
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-lg font-medium text-neutral-900"
              >
                평점 (1-5)
              </label>
              <Input
                id="rating"
                type="number"
                min="1"
                max="5"
                value={formData.rating || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rating: Number(e.target.value) || undefined,
                  }))
                }
                className="mt-1 p-3 border border-slate-200 rounded-md focus:bg-slate-50 focus:border-slate-700"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="description"
                className="block text-lg font-medium text-neutral-900"
              >
                설명
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={handleChange("description")}
                required
                className="mt-1 p-3 border border-slate-200 rounded-md focus:bg-slate-50 focus:border-slate-700 h-[220px]"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-slate-700 text-neutral-900 rounded-md hover:bg-opacity-80 transition-colors"
          >
            취소
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-opacity-80 transition-colors"
          >
            저장
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
