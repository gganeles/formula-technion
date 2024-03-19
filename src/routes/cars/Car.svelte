<script>
    export let data = {};
</script>

<div
    class="picture w-custom h-screen relative text-sm"
    style="--url:url({data['img_src']})"
>
    <div class="bg-black bg-opacity-30 h-screen w-screen">
        <div
            class="absolute bottom-10 left-10 bg-opacity-70 bg-black rounded-md w-96 max-sm:w-60 p-4"
        >
            <div class="text-3xl max-sm:text-xl pb-4">
                {"title" in data && data["title"]}
            </div>
            <div class='text-md max-sm:text-xs'>
                {data["description"].length ? data["description"] : ""}
            </div>
            <div>
                <div class='text-xl py-2 max-sm:text-sm max-sm:p-1'>Specs:</div>
                <ul class='list-disc list-inside'>
                    {#each Object.keys(data["specs"]) as spec}
                        <li class='max-sm:text-xs'>
                            {spec}: {data["specs"][spec]}
                        </li>
                    {/each}
                </ul>
            </div>
            {#if data["features"] !== undefined && data["features"].length}
                <div>
                    <div class='text-xl py-2 max-sm:text-sm max-sm:p-1'>Features:</div>
                    <ul class='list-disc list-inside'>
                        {#each data["features"] as feat}
                            <li class='max-sm:text-xs'>
                                {feat}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
            {#if data["achievements"] !== undefined && data["achievements"].length}
                <div>
                    <div class='text-xl py-2 max-sm:text-sm max-sm:p-1'>Achievements:</div>
                    <ul class='list-disc list-inside'>
                        {#each data["achievements"] as achvm}
                            <li class='max-sm:text-xs'>
                                {achvm}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .picture {
        background-image: var(--url);
        background-size: cover;
        background-position: center;
    }
    .w-custom {
        width: 100vw;
    }
</style>
