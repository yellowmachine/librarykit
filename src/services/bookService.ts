import type { GoogleBooksVolume } from '@src/types/googleBook';
import type { Book } from '$generated/prisma';

export function mapGoogleBookToPrismaBook(apiData: GoogleBooksVolume): Omit<Book, 'id'> {
  const v = apiData.volumeInfo;
  return {
    title: v.title,
    authors: v.authors ?? [],
    publisher: v.publisher ?? null,
    language: v.language,
    pageCount: v.pageCount,
    categories: v.categories,
    publishDate: v.publishedDate ?? null,
    coverUrl: v.imageLinks?.thumbnail ?? null,
    description: v.description ?? null
  };
}
