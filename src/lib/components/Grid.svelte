<script lang="ts" generics="T extends { id: string }">
  import type { Snippet } from 'svelte';
  
  interface Props {
    items: T[];
    View: Snippet<[T]>;
  }
  const { items, View }: Props = $props();
  
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  {#each items as item(item.id)}
    {@render View(item)}
  {/each}
</div>
