<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Book from '$lib/components/Book.svelte';

  const { Story } = defineMeta({
    title: 'Library/Book',
    component: Book,
    decorators: [
      /* ... */
    ],
    parameters: {
      /* ... */
    },
  });
</script>

<Story name="Primary" args={{ primary: true }} />
