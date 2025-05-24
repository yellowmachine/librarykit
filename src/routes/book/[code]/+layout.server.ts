// src/routes/book/[code]/+layout.ts
//import type { LayoutLoad } from './$types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
  const code = params.code;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${code}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const book = data.items?.[0]?.volumeInfo ?? null;

  return { book, code };
};