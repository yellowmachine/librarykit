import type { Book } from '@src/entities/Book.entity';
import type { User } from '@src/entities/User.entity';
import type { GoogleBooksVolume } from '@src/types/googleBook';

export function mapGoogleBookToBook(owner: User, apiData: GoogleBooksVolume): Omit<Book, 'id'> {
  const v = apiData.volumeInfo;

  return {
    owner,
    title: v.title,
    authors: v.authors ?? [],
    publisher: v.publisher ?? null,
    language: v.language,
    pageCount: v.pageCount,
    categories: v.categories,
    //publishDate: v.publishedDate ?? null,
    coverUrl: v.imageLinks?.thumbnail ?? null,
    description: v.description ?? null
  }
}
