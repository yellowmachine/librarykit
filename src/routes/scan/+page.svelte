<script lang="ts">
    import { Html5Qrcode, type Html5QrcodeResult } from 'html5-qrcode'
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation';

    let scanning = false

    let html5Qrcode: Html5Qrcode

    onMount(init)

    function init() {
        html5Qrcode = new Html5Qrcode('reader')
    }

    function start() {
        html5Qrcode.start(
            { facingMode: 'environment' },
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            },
            onScanSuccess,
            onScanFailure
        )
        scanning = true
    }

    async function stop() {
        await html5Qrcode.stop()
        scanning = false
    }

    async function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
        //alert(`Code matched = ${decodedText}`)
        console.log(decodedResult)
        await stop();
        goto(`/book/${decodedText}/view`);
    }

    function onScanFailure(error: string) {
        console.warn(`Code scan error = ${error}`)
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
    reader {
        width: 100%;
        min-height: 500px;
        background-color: black;
    }
</style>

<main>
    <reader id="reader"></reader>
    {#if scanning}
        <button on:click={stop}>stop</button>
    {:else}
        <button on:click={start}>start</button>
    {/if}
</main>