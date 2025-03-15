import { NextRequest, NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";

type Params = { params: { id: string } };

// GET: 특정 책 조회
export function GET(request: NextRequest, { params }: Params) {
  const book = mockBooks.find((b) => b.id === params.id);

  if (!book) {
    return NextResponse.json(
      { error: "책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  return NextResponse.json({ message: "success", book }, { status: 200 });
}

// PUT: 책 정보 수정
export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json();

  const bookIndex = mockBooks.findIndex((b) => b.id === params.id);
  if (bookIndex === -1) {
    return NextResponse.json(
      { error: "책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  mockBooks[bookIndex] = {
    ...mockBooks[bookIndex],
    ...body,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(
    { message: "책이 수정되었습니다.", book: mockBooks[bookIndex] },
    { status: 200 }
  );
}

// DELETE: 책 삭제
export function DELETE(request: NextRequest, { params }: Params) {
  const bookIndex = mockBooks.findIndex((b) => b.id === params.id);
  if (bookIndex === -1) {
    return NextResponse.json(
      { error: "책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  mockBooks.splice(bookIndex, 1);

  return NextResponse.json(
    { message: "책이 삭제되었습니다." },
    { status: 200 }
  );
}
