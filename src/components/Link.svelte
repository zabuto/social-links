<script>
    import {fade} from 'svelte/transition';

    export let title, url, icon, position;

    function handleClick() {
        window.location = this.getAttribute('href');
    }
</script>

<a class="link-block" href="{url}" in:fade="{{ duration: 900 }}" out:fade
   on:click|preventDefault|stopPropagation={handleClick}>
    {#if icon && position === 'left' }<img class="left" src="images/{icon}" alt=""/>{/if}
    {title}
    {#if icon && position === 'right'}<img class="right" src="images/{icon}" alt=""/>{/if}
</a>

<style>
    a.link-block {
        display: block;
        cursor: pointer;
        margin: 0 0 1rem 0;
        padding: 1rem;
        background-color: #eeeeee;
        color: #000000;
        border: 1px solid #000000;
        border-radius: .3rem;
        font-size: 1.1rem;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    a.link-block:hover {
        color: #000;
        background-color: #bee8ff;
        border-color: #0000ff;
        text-decoration: none;
    }

    a.link-block img {
        display: inline-block;
        vertical-align: text-bottom;
        height: 20px;
        width: 20px;
        margin-left: 0;
        margin-right: 0;
    }

    a.link-block img.left {
        margin-right: .5em;
    }

    a.link-block img.right {
        margin-left: .5em;
    }
</style>
