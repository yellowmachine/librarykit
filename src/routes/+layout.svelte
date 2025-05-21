<script lang="ts">
  import { trpc } from '$lib/trpc/client';

	const { data, children } = $props();

  trpc.hydrateFromServer(() => data.trpc);
</script>

{@render children?.()}