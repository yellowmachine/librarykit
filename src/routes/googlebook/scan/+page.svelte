<script lang="ts">
    import Scan from '$lib/components/Scan.svelte';
    import { goto } from '$app/navigation';

    function onCode(code: string){
        goto(`/googlebook/search?code=${code}`);
    }

</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
</style>

<main>
    <Scan onCode={onCode} />
</main>
