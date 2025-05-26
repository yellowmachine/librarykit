<script lang="ts">
  import { trpc } from "src/lib/trpc";

	const { data, children } = $props();

  trpc.hydrateFromServer(() => data.trpc);
</script>

{@render children?.()}
