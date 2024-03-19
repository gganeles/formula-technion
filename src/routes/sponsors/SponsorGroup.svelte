<script>
    export let group;
    export let groupName;
    export let gridCols = 3;
    export let textColor = "text-yellow-600";
</script>

<div class='text-5xl max-sm:text-3xl text-center {textColor} pt-16 pb-8'>{groupName}</div>
<div class='grid grid-container border-b last:border-b-0 pb-10' style="--cols:{gridCols}">
    {#each group as spons}
        <div class="flex flex-row items-center justify-center p-2">
            <img src={spons.url} alt={spons.name} class="max-h-60" />
        </div>
    {/each}
</div>

<style>
    .grid-container {
        grid-template-columns: repeat(var(--cols),1fr);
    }
</style>