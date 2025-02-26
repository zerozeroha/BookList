import type { NextRequest } from "next/server";
import { mockBooks } from "@/lib/mock-data";
import type { BookInput } from "@/types/book";

// 메모리에 데이터 저장
const books = [...mockBooks];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number.parseInt(searchParams.get("page") || "1");
  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  return Response.json({
    books: books.slice(start, end),
    total: books.length,
    page,
    totalPages: Math.ceil(books.length / limit),
  });
}

export async function POST(request: NextRequest) {
  const body: BookInput = await request.json();

  const newBook = {
    id: Date.now().toString(),
    ...body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  books.push(newBook);
  return Response.json(newBook, { status: 201 });
}
