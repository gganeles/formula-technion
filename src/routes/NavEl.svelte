<script>
    import { slide } from "svelte/transition";

    export let text = "";
    export let href = "";
    export let scrolled = false;
    export let smallScreen = false;
    let hovered = false;
</script>

<li
    class="h-full flex items-center navitem text-md p-4 max-md:p-2 max-sm:text-lg lg:text-xl {hovered &&
        scrolled &&
        'this hover:cursor-pointer'}
        {smallScreen && 'p-custom'}"
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    on:click={() => {
        if (scrolled) window.location = href;
    }}
>
    <a {href}>
        {text}
    </a>
</li>

<style>
    .this {
        background-color: #065786;
    }

    .navitem {
        transition: all 0.1s ease-in;
    }

    .p-custom {
        padding: 30px;
    }
</style>
