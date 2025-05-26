<script lang="ts">
	import type { Book } from '$generated/prisma';

	const { book } = $props<{
		book: Omit<Book, 'id'>;
	}>();
</script>

<article class="mx-auto flex max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
	{#if book.coverUrl}
		<img
			src={book.coverUrl}
			alt="Portada de {book.title}"
			class="mb-4 h-48 w-32 rounded object-cover shadow"
		/>
	{/if}

	<h2 class="mb-1 text-center text-xl font-bold">{book.title}</h2>
	<p class="mb-2 text-center text-gray-700">
		Autor: <span class="font-medium">{book.author}</span>
	</p>

	{#if book.publishDate}
		<p class="mb-2 text-center text-sm text-gray-500">
			Publicado: {book.publishDate}
		</p>
	{/if}ro

	{#if book.description}
		<p class="mt-2 text-center text-sm text-gray-600">{book.description}</p>
	{/if}
</article>
