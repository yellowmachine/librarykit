<script lang="ts">
	import type { Book } from '$generated/prisma';
  import BookCard from './BookCard.svelte';

	const { book } = $props<{
		book: Omit<Book, 'id'>;
	}>();
</script>

<div>
	<BookCard {book} />
</div>
