# RGT_Frontend_KimHaYoung_2025

📚 **책 목록 관리 프로젝트**

## 📌 소개

이 프로젝트는 **Next.js 15**, **TypeScript**, **Tailwind CSS**를 기반으로 한 **책 목록 관리 웹 애플리케이션**입니다. 사용자는 책을 **추가, 수정, 삭제**할 수 있으며, **책 상세 정보**를 확인할 수 있습니다.

## 🎯 주요 기능

- ✅ **책 목록 보기**: 전체 책 목록을 페이지네이션하여 표시
- ✅ **책 추가**: 새로운 책을 등록
- ✅ **책 수정**: 기존 책 정보 업데이트
- ✅ **책 삭제**: 책을 목록에서 제거
- ✅ **책 상세 보기**: 개별 책의 정보 확인

## 🛠️ 사용 기술 스택

### **프론트엔드**
- **Next.js 15** - React 기반 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 지원
- **TypeScript** - 안정적인 개발을 위한 정적 타입 언어
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion** - 부드러운 애니메이션 및 UI 인터랙션 구현
- **Lucide Icons** - 가벼운 아이콘 라이브러리
- **ShadCN UI** - 접근성이 뛰어난 모던 UI 컴포넌트 사용

### **UI 라이브러리 및 디자인**
- **ShadCN UI**: `Button`, `Card`, `Input`, `Textarea` 등의 UI 컴포넌트 활용
- **Lucide Icons**: 메뉴 아이콘, 닫기 버튼, 네비게이션 아이콘 등
- **Framer Motion**: 페이지 및 버튼 애니메이션 효과 적용
- **Tailwind CSS**:
  - **반응형 디자인 지원**: `grid`, `flex`, `w-full`, `h-screen` 활용
  - **다크 모드 고려**: `bg-opacity`, `hover:opacity` 적용
  - **트렌디한 색상 팔레트 적용** (예: `text-[#112D64]`, `bg-pink-500`, `hover:text-yellow-400` 등)

---

## 🚀 ** 화면 구상 **




https://github.com/user-attachments/assets/000da5ed-1235-4af1-a8db-f11dd184e81e


---

## 📂 프로젝트 구조

```
📦 src
 ┣ 📂app
 ┃ ┣ 📂api/books        # API 라우트 (전체 책 목록)
 ┃ ┣ 📂api/books/[id]   # 개별 책 조회, 수정, 삭제
 ┃ ┣ 📂books            # 클라이언트 사이드 페이지
 ┣ 📂components         # UI 컴포넌트 (Header, BookForm 등)
 ┣ 📂lib                # mock 데이터 및 유틸리티
 ┣ 📂types              # TypeScript 인터페이스 정의
 ┣ 📂public/assets      # 프로젝트 로고 및 이미지
```

---

## 🔗 API 엔드포인트

| HTTP Method | Endpoint             | Description              |
|------------|----------------------|--------------------------|
| **GET**    | `/api/books`         | 책 목록 조회             |
| **POST**   | `/api/books`         | 새로운 책 추가           |
| **GET**    | `/api/books/[id]`    | 특정 책 정보 조회        |
| **PUT**    | `/api/books/[id]`    | 특정 책 정보 수정        |
| **DELETE** | `/api/books/[id]`    | 특정 책 삭제             |




