import { NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";

// ✅ GET 요청 처리
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const book = mockBooks.find((b) => b.id === id);

  if (!book) {
    return NextResponse.json(
      { error: "책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  return NextResponse.json(book, { status: 200 });
}

// ✅ DELETE 요청 처리
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const bookIndex = mockBooks.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return NextResponse.json(
      { error: "삭제할 책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  // ❌ mockBooks는 직접 수정 불가 (배열이 정적이므로)
  // ✅ 대신, 실제 API에서는 데이터베이스에서 삭제해야 함
  return NextResponse.json(
    { message: "책이 삭제되었습니다." },
    { status: 200 }
  );
}
