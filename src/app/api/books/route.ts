import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";
import type { BookInput } from "@/types/book";

// 메모리에 저장된 책 데이터
const books = [...mockBooks];

// ✅ GET 요청 (페이징 지원)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || "1");
  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  return NextResponse.json({
    books: books.slice(start, end),
    total: books.length,
    page,
    totalPages: Math.ceil(books.length / limit),
  });
}

// ✅ POST 요청 (새로운 책 추가)
export async function POST(request: NextRequest) {
  const body: BookInput = await request.json();

  const newBook = {
    id: Date.now().toString(),
    ...body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}
