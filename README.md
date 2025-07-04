# BookList

📚 **책 목록 관리 프로젝트**

## 📌 소개

이 프로젝트는 **Next.js 15**, **TypeScript**, **Tailwind CSS**를 기반으로 한 **책 목록 관리 웹 애플리케이션**입니다. 
사용자는 책을 **추가, 수정, 삭제**할 수 있으며, **책 상세 정보**를 확인할 수 있습니다.

---

##  **개발 목표**

 **사용자 경험(UX) 최적화**
 **빠르고 직관적인 인터페이스 구축**
 **최신 프론트엔드 기술 적극 활용**

---

##  주요 기능

-  **책 목록 보기**: 전체 책 목록을 페이지네이션하여 표시
-  **책 추가**: 새로운 책을 등록
-  **책 수정**: 기존 책 정보 업데이트
-  **책 삭제**: 책을 목록에서 제거
-  **책 상세 보기**: 개별 책의 정보 확인

---

##  **기술 스택**

###  **프론트엔드 핵심**

| 기술              | 설명                                       |
| ----------------- | ------------------------------------------ |
| **Next.js 15**    | 최신 React 기반 프레임워크, SSR & SSG 지원 |
| **TypeScript**    | 안정적인 정적 타입 시스템 도입             |
| **Tailwind CSS**  | 빠르고 효율적인 스타일링                   |
| **SWR**           | React 기반 데이터 패칭 최적화              |
| **Framer Motion** | 부드러운 애니메이션 효과 구현              |

###  **UI & 애니메이션**

| 라이브러리        | 설명                          |
| ----------------- | ----------------------------- |
| **ShadCN UI**     | Radix 기반의 모던 UI 컴포넌트 |
| **Lucide Icons**  | 가벼운 SVG 아이콘 컬렉션      |
| **Framer Motion** | 페이지 전환, 요소 애니메이션  |

---

##  **UI & 디자인 특징**

✅ **미니멀리즘 & 트렌디한 디자인 적용**
✅ **Tailwind CSS 기반 반응형 레이아웃** (`flex`, `grid`, `w-full`)
✅ **ShadCN UI의 세련된 버튼 & 카드 UI 활용**
✅ **다크 모드 지원** (`dark:bg-gray-900`, `text-white`)
✅ **모션 기반 UX 향상** (`framer-motion`으로 부드러운 인터랙션 추가)

---

<<<<<<< HEAD
=======
## 🚀 **화면 구상**

<!-- ## PC 화면 기록

![Screen Record GIF](https://github.com/zerozeroha/BookList/blob/main/public/assets/output.gif)

## 태블릿 화면 기록

![Tablet Record GIF](https://github.com/zerozeroha/BookList/blob/main/public/assets/tablet_record_half.gif)

## 모바일 화면 기록

![Mobile Record GIF](https://github.com/zerozeroha/BookList/blob/main/public/assets/mobile_record_half.gif) -->


>>>>>>> 7abd6b3 (수정)

---

## 📂 **프로젝트 구조**

## 🔗 **API 엔드포인트**

| HTTP Method | Endpoint          | Description       |
| ----------- | ----------------- | ----------------- |
| **GET**     | `/api/books`      | 책 목록 조회      |
| **POST**    | `/api/books/[id]` | 새로운 책 추가    |
| **GET**     | `/api/books/[id]` | 특정 책 정보 조회 |
| **PUT**     | `/api/books/[id]` | 특정 책 정보 수정 |
| **DELETE**  | `/api/books/[id]` | 특정 책 삭제      |

---
<!-- 
## 🎬 **데모 영상**

[📺 YouTube 영상 보기](https://www.youtube.com/watch?v=gtpN-hFdpLw) -->

---

##  **설치된 라이브러리**

 **최신 프론트엔드 트렌드를 반영한 라이브러리들!**

###  **기본 프레임워크 & 상태 관리**

- **Next.js 15** → 최신 React 기반 프레임워크
- **TypeScript** → 안정적인 정적 타입 시스템
- **SWR** → React 데이터 패칭 최적화

###  **UI & 스타일링**

- **Tailwind CSS** → 유틸리티 기반 스타일링
- **ShadCN UI** → Radix 기반 UI 컴포넌트 (Button, Card, Input 등)
- **Lucide Icons** → 심플하고 세련된 아이콘 컬렉션

###  **애니메이션 & UX**

- **Framer Motion** → 부드러운 인터랙션과 트랜지션 제공

###  **개발 생산성 도구**

- **ESLint & Prettier** → 코드 스타일 관리
- **PostCSS** → CSS 후처리 및 최적화
- **TypeScript 타입 정의** → (`@types/react`, `@types/node`)

## **UI & 반응형 디자인**

 **모바일 퍼스트 디자인 적용** (`sm:`, `md:`, `lg:`, `xl:`)
**반응형 그리드 & 플렉스 레이아웃** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
**모션 기반 UX 향상** (`framer-motion`으로 부드러운 인터랙션 추가)
