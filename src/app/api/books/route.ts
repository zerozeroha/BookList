/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { mockBooks } from "@/lib/mock-data";

// GET: 모든 책 조회
export function GET() {
  try {
    return NextResponse.json(
      { message: "success", books: mockBooks },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "fail to retrieve books" },
      { status: 500 }
    );
  }
}

// POST: 새 책 추가
export function POST(request: NextRequest) {
  try {
    return request.json().then((body) => {
      if (!body.title || !body.author || !body.description) {
        return NextResponse.json(
          { error: "모든 필수 정보를 입력하세요." },
          { status: 400 }
        );
      }

      const newBook = {
        id: String(mockBooks.length + 1),
        title: body.title,
        author: body.author,
        description: body.description,
        rating: body.rating || 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      mockBooks.push(newBook);

      return NextResponse.json(
        { message: "책이 추가되었습니다.", book: newBook },
        { status: 201 }
      );
    });
  } catch (error) {
    return NextResponse.json(
      { message: "fail to create book" },
      { status: 500 }
    );
  }
}
