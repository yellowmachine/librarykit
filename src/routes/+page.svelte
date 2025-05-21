<script lang="ts">
  import { trpc } from '$lib/trpc/client';

  const query = trpc.greeting.query({ name: 'tRPC' });
</script>

{#if $query.isSuccess}
  <p>{$query.data.greeting}</p>
{:else if $query.isError}
  <p>{$query.error.message}</p>
{:else}
  <p>Loading...</p>
{/if}