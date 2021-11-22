<script>
    import {onMount, onDestroy} from 'svelte';
    import {Circle3} from 'svelte-loading-spinners'
    import Link from './Link.svelte';

    export let url;
    let links = [];

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    onMount(async () => {
        await timeout(900);
        const response = await fetch(url);
        links = await response.json();
    });

    onDestroy(() => {
        links = []
    });
</script>

<section class="social">
    {#each links as link}
        <Link {...link}/>
    {:else}
        <div class="social-loading">
            <Circle3 size="60" unit="px" duration="2s"
                     ballTopLeft="#0000ff" ballTopRight="#cccccc" ballBottomLeft="#727272" ballBottomRight="#bee8ff"/>
        </div>
    {/each}
</section>

<style>
    section.social {
        padding-top: .75em;
    }

    .social-loading {
        margin-top: 1em;
        display: grid;
        align-items: center;
        justify-items: center;
    }
</style>
