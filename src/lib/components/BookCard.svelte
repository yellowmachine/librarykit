<script lang="ts">
  import { formatDate } from '$lib/utils/date';
	import type { Book } from '$generated/prisma';

  interface Props {
		book: Omit<Book, 'id'>
  }

	const { book }: Props = $props();
</script>

<article class="grid grid-cols-2 gap-4">
	<div class="flex justify-center items-start">
  {#if book.coverUrl}
		<img
			src={book.coverUrl}
			alt="Portada de {book.title}"
			class="mb-4 h-48 w-32 rounded object-cover shadow"
		/>
	{/if}
	</div>
	<div class="flex flex-col">
		<h2 class="mb-1 text-center text-xl font-bold">{book.title}</h2>
	  <p class="mb-2 text-gray-700">
	    {#if book.authors.length > 1}
	      Autores: <span class="font-medium">{book.authors.join(", ")}</span>
      {:else}
        Autor: <span class="font-medium">{book.authors[0]}</span>
      {/if}
	  </p>

    {#if book.publishDate || book.publisher}
      <span class="text-sm text-gray-500">
        Publicado <span class="italic">{formatDate(book.publishDate)}</span>
        {#if book.publisher}
          por <span class="italic">{book.publisher}</span>
        {/if}
      </span>
    {/if}


	  {#if book.description}
		  <p class="mt-2 text-sm text-gray-600">{book.description}</p>
	  {/if}
	</div>
</article>

