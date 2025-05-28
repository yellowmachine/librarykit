<script lang="ts">
  import BookCard from './BookCard.svelte';
  import type { Book } from '$generated/prisma';

  interface Props {
    book: Omit<Book, 'id'>
  }
  const {book}: Props = $props();
</script>

<div class="w-full">
  <BookCard {book} />
</div>
