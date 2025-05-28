<script lang="ts">
  import type { Book } from '$generated/prisma';
  import BookGridItem from './BookGridItem.svelte';

  interface Props {
    books: Book[];
  }
  const { books }: Props = $props();
  
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  {#each books as book(book.id)}
    <BookGridItem {book} />
  {/each}
</div>
