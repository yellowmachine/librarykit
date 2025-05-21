<script lang="ts">
  import { trpc } from "$lib/trpc";
  const query = trpc.greeting.query();
  
</script>

{#if $query?.isSuccess}
  <p>{$query.data}</p>
{:else if $query?.isError}
  <p>Error: {$query.error.message}</p>
{:else}
  <p>Loading...</p>
{/if}
