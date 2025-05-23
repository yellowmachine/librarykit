<script lang="ts">
  const { book } = $props<{
    book: {
      title: string;
      author: string;
      publishDate?: string;
      coverUrl?: string;
      description?: string;
    };
  }>();
</script>

<article class="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto flex flex-col items-center">
  {#if book.coverUrl}
    <img
      src={book.coverUrl}
      alt="Portada de {book.title}"
      class="w-32 h-48 object-cover rounded mb-4 shadow"
    />
  {/if}

  <h2 class="text-xl font-bold mb-1 text-center">{book.title}</h2>
  <p class="text-gray-700 mb-2 text-center">
    Autor: <span class="font-medium">{book.author}</span>
  </p>

  {#if book.publishDate}
    <p class="text-gray-500 text-sm mb-2 text-center">
      Publicado: {book.publishDate}
    </p>
  {/if}

  {#if book.description}
    <p class="text-gray-600 text-sm mt-2 text-center">{book.description}</p>
  {/if}
</article>
