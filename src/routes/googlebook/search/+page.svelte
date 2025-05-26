
<script lang="ts">
	import PreviewBook from '$lib/components/PreviewBook.svelte';
  import { mapGoogleBookToPrismaBook } from '@src/services/bookService.js';
  
  const { data } = $props();
  const { code, books } = data;
  
</script>

<h2>Vista para ISBN: {code}</h2>
{#each books as book(book.id)}
  <PreviewBook book={mapGoogleBookToPrismaBook(book)} />
{/each}

<a class="mt-4 block underline text-center text-blue-600" href="/scan">Scan</a>
