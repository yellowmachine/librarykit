<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import BookCard from '$lib/components/BookCard.svelte';

	const exampleBook = {
		title: 'Una teoría del socialismo y el capitalismo',
		authors: ['Hans-Hermann Hoppe'],
		publishDate: '2020-03-01',
		pageCount: 301,
    language: 'es',
    categories: [],
    publisher: 'INNISFREE',
		description:
			'En 1989, cuando Hans publicó A Theory of Socialism and Capitalism, todos los libros de texto de comparativa de sistemas económicos estaban obsoletos a causa de los acontecimientos que rodearon la caída del comunismo. Por el contrario, el libro de Hans no solo fue oportuno, sino que se ha mostrado intemporal, ya que, treinta años después, continúa siendo tan relevante como siempre y un tratado clásico sobre la materia.',
		coverUrl:
			'http://books.google.com/books/content?id=AwNqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
	};

	const { Story } = defineMeta({
		title: 'Library/Book',
		component: BookCard,
		decorators: [
			/* ... */
		],
		parameters: {
			/* ... */
		}
	});
</script>

<Story name="Primary" args={{ book: exampleBook }} />
