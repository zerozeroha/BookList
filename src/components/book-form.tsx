'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/index';

interface BookFormProps {
  initialData?: {
    title: string;
    author: string;
    description: string;
    rating?: number;
  };
  id?: string;
}

export default function BookForm({ initialData, id }: BookFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    initialData || { title: '', author: '', description: '', rating: undefined }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(id ? `/api/books/${id}` : '/api/books', {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push('/');
      router.refresh();
    }
  };

  // formData의 필드에 접근할 때 타입 안전성을 보장하기 위한 핸들러
  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{id ? '책 수정' : '새 책 추가'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {['title', 'author', 'description'].map((field) => (
            <div key={field} className="space-y-2">
              <label htmlFor={field}>
                {field === 'title'
                  ? '제목'
                  : field === 'author'
                  ? '저자'
                  : '설명'}
              </label>
              {field === 'description' ? (
                <Textarea
                  id={field}
                  value={formData[field as keyof typeof formData]} // 타입 단언 사용
                  onChange={handleChange(field as keyof typeof formData)} // 타입 단언 사용
                  required
                />
              ) : (
                <Input
                  id={field}
                  value={formData[field as keyof typeof formData]} // 타입 단언 사용
                  onChange={handleChange(field as keyof typeof formData)} // 타입 단언 사용
                  required
                />
              )}
            </div>
          ))}
          <div className="space-y-2">
            <label htmlFor="rating">평점 (1-5)</label>
            <Input
              id="rating"
              type="number"
              min="1"
              max="5"
              value={formData.rating || ''}
              onChange={(e: { target: { value: unknown } }) =>
                setFormData((prev) => ({
                  ...prev,
                  rating: Number(e.target.value) || undefined,
                }))
              }
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            취소
          </Button>
          <Button type="submit">저장</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
