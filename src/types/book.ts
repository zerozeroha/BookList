export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  rating?: number;
  createdAt: string;
  updatedAt: string;
};

export type BookInput = Omit<Book, 'id' | 'createdAt' | 'updatedAt'>;

// 새로운 책을 추가할 때 (id와 날짜는 DB에서 자동 생성됨)
// 불필요한 속성을 제외하고 가벼운 타입을 만들고 싶을 때
// 업데이트할 때 특정 필드만 받고 싶을 때 (id 없이 title, author만 전달)
