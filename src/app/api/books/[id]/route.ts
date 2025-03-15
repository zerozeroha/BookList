import { NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";

// ✅ GET 요청 처리 (모든 책 조회 - Read All)
export async function GET(
  request: Request,
  context?: { params?: { id?: string } }
) {
  try {
    // If an ID is provided, fetch a single book
    if (context?.params?.id) {
      const { id } = context.params;
      const book = mockBooks.find((b) => b.id === id);
      if (!book) {
        return NextResponse.json(
          { error: "책을 찾을 수 없습니다." },
          { status: 404 }
        );
      }
      return NextResponse.json({ message: "success", book }, { status: 200 });
    }

    // If no ID, return all books
    return NextResponse.json(
      { message: "success", books: mockBooks },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ 책 조회 오류:", error);
    return NextResponse.json(
      { message: "fail to retrieve books" },
      { status: 500 }
    );
  }
}

// ✅ POST 요청 처리 (새 책 생성 - Create)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.author || !body.description) {
      return NextResponse.json(
        { error: "모든 필수 정보를 입력하세요." },
        { status: 400 }
      );
    }

    const newBook = {
      id: String(mockBooks.length + 1), // Simple ID generation (Use UUID for real DB)
      title: body.title,
      author: body.author,
      description: body.description,
      rating: body.rating || 0, // Default rating
      createdAt: new Date().toISOString(), // Add createdAt timestamp
      updatedAt: new Date().toISOString(), // Add updatedAt timestamp
    };

    mockBooks.push(newBook);

    return NextResponse.json(
      { message: "책이 성공적으로 추가되었습니다.", book: newBook },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ 책 생성 오류:", error);
    return NextResponse.json(
      { message: "fail to create book" },
      { status: 500 }
    );
  }
}

// ✅ PUT 요청 처리 (책 수정 - Update)
export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    if (!id) {
      return NextResponse.json(
        { error: "잘못된 요청입니다." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const bookIndex = mockBooks.findIndex((b) => b.id === id);

    if (bookIndex === -1) {
      return NextResponse.json(
        { error: "수정할 책을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    // ✅ Update book information
    mockBooks[bookIndex] = { ...mockBooks[bookIndex], ...body };

    return NextResponse.json(
      { message: "책이 수정되었습니다.", book: mockBooks[bookIndex] },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ 데이터 수정 오류:", error);
    return NextResponse.json(
      { message: "fail to update data" },
      { status: 500 }
    );
  }
}

// ✅ DELETE 요청 처리 (책 삭제 - Delete)
export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    if (!id) {
      return NextResponse.json(
        { error: "잘못된 요청입니다." },
        { status: 400 }
      );
    }

    const bookIndex = mockBooks.findIndex((b) => b.id === id);
    if (bookIndex === -1) {
      return NextResponse.json(
        { error: "삭제할 책을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    // ✅ Create a new array without the deleted book
    const updatedBooks = mockBooks.filter((b) => b.id !== id);

    return NextResponse.json(
      { message: "책이 삭제되었습니다.", updatedBooks },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ 데이터 삭제 오류:", error);
    return NextResponse.json(
      { message: "fail to delete data" },
      { status: 500 }
    );
  }
}
