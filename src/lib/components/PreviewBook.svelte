<script lang="ts">
	import {Book} from '@src/entities/Book.entity';
  import BookCard from './BookCard.svelte';

	const { book } = $props<{
		book: Omit<Book, 'id'>;
	}>();
</script>

<div>
	<BookCard {book} />
</div>
