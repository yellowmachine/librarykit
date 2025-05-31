
<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import PreviewBook from '$lib/components/PreviewBook.svelte';
  import { mapGoogleBookToBook } from '@src/services/googleBook';
	import type { GoogleBooksVolume } from '@src/types/googleBook';

  const { data } = $props();
  const { code, books } = data;
  
</script>

{#snippet Preview(book: GoogleBooksVolume)}
    <PreviewBook book={mapGoogleBookToBook({nick: 'miguel', email: 'miguel@me.com', id: '1' }, book)} />
{/snippet}

<h2>Vista para ISBN: {code}</h2>
 
<Grid items={books} View={Preview} />

<a class="mt-4 block underline text-center text-blue-600" href="/scan">Scan again</a>
