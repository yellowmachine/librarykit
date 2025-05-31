<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import BookGrid from '$lib/components/BookGrid.svelte';

	const exampleBook = {
	  id: 'x-hoppe-1',
		title: 'Una teoría del socialismo y el capitalismo',
		authors: ['Hans-Hermann Hoppe'],
		publishDate: '2020-03-01',
		publisher: null,
		language: 'es',
		pageCount: 301,
		categories: [],
		description:
			'En 1989, cuando Hans publicó A Theory of Socialism and Capitalism, todos los libros de texto de comparativa de sistemas económicos estaban obsoletos a causa de los acontecimientos que rodearon la caída del comunismo. Por el contrario, el libro de Hans no solo fue oportuno, sino que se ha mostrado intemporal, ya que, treinta años después, continúa siendo tan relevante como siempre y un tratado clásico sobre la materia.',
		coverUrl:
			'http://books.google.com/books/content?id=AwNqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
	};

	const exampleBook2 = {
	  id: 'x-hoppe-2',
		title: 'Una teoría del socialismo y el capitalismo',
		authors: ['Hans-Hermann Hoppe'],
		publishDate: '2020-03-01',
		publisher: null,
		language: 'es',
		pageCount: 301,
		categories: [],
		description:
			'En 1989, cuando Hans publicó A Theory of Socialism and Capitalism, todos los libros de texto de comparativa de sistemas económicos estaban obsoletos a causa de los acontecimientos que rodearon la caída del comunismo. Por el contrario, el libro de Hans no solo fue oportuno, sino que se ha mostrado intemporal, ya que, treinta años después, continúa siendo tan relevante como siempre y un tratado clásico sobre la materia.',
		coverUrl:
			'http://books.google.com/books/content?id=AwNqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
	};



	const { Story } = defineMeta({
		title: 'Library/BookGrid',
		component: BookGrid,
		decorators: [
			/* ... */
		],
		parameters: {
			/* ... */
		}
	});
</script>

<Story name="Primary" args={{ books: [exampleBook, exampleBook2] }} />
