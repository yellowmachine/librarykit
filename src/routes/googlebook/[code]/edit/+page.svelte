<script lang="ts">
	import EditableBook from '$lib/components/EditableBook.svelte';

  const { data } = $props();
  const { code, book } = data;
  
</script>

<h2>Vista previa para ISBN: {code}</h2>
{#if book}
  <EditableBook book={book} />
{:else}
  <p>No se encontró información para este ISBN.</p>
{/if}