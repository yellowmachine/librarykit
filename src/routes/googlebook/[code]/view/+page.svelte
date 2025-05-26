<script lang="ts">
	import Book from '$lib/components/Book.svelte';

  const { data } = $props();
  const { code, books } = data;
  
</script>

<h2>Vista para ISBN: {code}</h2>
{#each books as book(book.id)}
  <Book book={book} />
{/each}

<a class="mt-4 block underline text-center text-blue-600" href="/book/{code}/edit">Edit</a>
<a class="mt-4 block underline text-center text-blue-600" href="/scan">Scan</a>
