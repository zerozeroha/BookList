/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";

// GET: 특정 책 조회
export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const book = mockBooks.find((b) => b.id === id);

    if (!book) {
      return NextResponse.json(
        { error: "책을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "success", book }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "fail to retrieve book" },
      { status: 500 }
    );
  }
}

// PUT: 책 정보 수정
export function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // 요청 본문 처리
    return request.json().then((body) => {
      const bookIndex = mockBooks.findIndex((b) => b.id === id);
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
    });
  } catch (error) {
    return NextResponse.json(
      { message: "fail to update data" },
      { status: 500 }
    );
  }
}

// DELETE: 책 삭제
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const bookIndex = mockBooks.findIndex((b) => b.id === id);
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
  } catch (error) {
    return NextResponse.json(
      { message: "fail to delete data" },
      { status: 500 }
    );
  }
}
