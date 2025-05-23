<script lang="ts">
	import Book from "$lib/components/Book.svelte";

  const { data } = $props();
  const { code, book } = data;
  
</script>

<h2>Vista para ISBN: {code}</h2>
{#if book}
  <Book book={book} />
{:else}
  <p>No se encontró información para este ISBN.</p>
{/if}

<a class="mt-4 block underline text-center text-blue-600" href="/book/{code}/edit">Edit</a>
<a class="mt-4 block underline text-center text-blue-600" href="/scan">Scan</a>
