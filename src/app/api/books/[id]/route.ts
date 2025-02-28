import { NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";

// ✅ GET 요청 처리 (특정 책 조회)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const book = mockBooks.find((b) => b.id === id);
  if (!book) {
    return NextResponse.json(
      { error: "책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  return NextResponse.json(book);
}

// ✅ DELETE 요청 처리 (책 삭제)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const bookIndex = mockBooks.findIndex((b) => b.id === id);
  if (bookIndex === -1) {
    return NextResponse.json(
      { error: "삭제할 책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  // ✅ 새로운 배열 반환 (mockBooks는 변경 불가능한 배열이므로 filter 사용)
  const updatedBooks = mockBooks.filter((b) => b.id !== id);

  return NextResponse.json({ message: "책이 삭제되었습니다.", updatedBooks });
}
