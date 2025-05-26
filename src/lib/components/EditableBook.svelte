<script lang="ts">
	import type { Booka } from '$generated/prisma';

	const { book } = $props<{ book: Book }>();

	// Haz una copia local editable
	let editableBook = { ...book };
</script>

<form>
	<input bind:value={editableBook.title} placeholder="Título" />
	<input bind:value={editableBook.author} placeholder="Autor" />
	<!-- Otros campos -->
	<button type="submit">Guardar</button>
</form>
