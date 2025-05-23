<script lang="ts">
  //import type { Book } from '@prisma/client';

  interface Book {
    title: string;
    author: string;
    // ...otros campos
  }

  const {book} = $props<{ book: Book }>();

  // Haz una copia local editable
  let editableBook = { ...book };
</script>

<form>
  <input bind:value={editableBook.title} placeholder="Título" />
  <input bind:value={editableBook.author} placeholder="Autor" />
  <!-- Otros campos -->
  <button type="submit">Guardar</button>
</form>