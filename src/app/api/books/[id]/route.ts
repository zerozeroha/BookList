import { NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";

// ✅ GET 요청 처리
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!params || !params.id) {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

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

// ✅ DELETE 요청 처리 (mockBooks에서 삭제 가능하도록 수정)
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!params || !params.id) {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const { id } = params;
  const bookIndex = mockBooks.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return NextResponse.json(
      { error: "삭제할 책을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  // ❌ 기존 코드에서는 배열을 직접 조작할 수 없음
  // ✅ 새로운 배열을 반환하도록 변경 (실제 DB에서는 DELETE 수행)
  const updatedBooks = mockBooks.filter((b) => b.id !== id);

  return NextResponse.json(
    { message: "책이 삭제되었습니다.", updatedBooks },
    { status: 200 }
  );
}
