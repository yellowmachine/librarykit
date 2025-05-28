export interface GoogleBooksVolume {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount: number;
    categories: string[];
    language: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
  };
}
