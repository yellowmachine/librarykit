import type { GoogleBooksVolume } from "@src/types/googleBook";
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, fetch }) => {
	const code = url.searchParams.get('code');
	let apiUrl: string;

	if(code){
		apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${code}`;
	}else{
    apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${url.searchParams.get('q')}`;
	}

	const res = await fetch(apiUrl);
	const data: { items: { volumeInfo: GoogleBooksVolume}[] } = await res.json();
	const books: GoogleBooksVolume[] = data.items.map(item => item.volumeInfo);

	return { books, code };
};
