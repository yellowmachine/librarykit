import type { GoogleBooksVolume } from "@src/types/googleBook";
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, fetch }) => {
	const code = params.code;
	const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${code}`;
	const res = await fetch(apiUrl);
	const data: { items: { volumeInfo: GoogleBooksVolume}[] } = await res.json();
	const books: GoogleBooksVolume[] = data.items.map(item => item.volumeInfo);

	return { books, code };
};
