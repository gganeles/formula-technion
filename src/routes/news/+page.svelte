<script>
    const newsDir = "/images/News/";
    const news = [
        "1.png",
        "3-2.png",
        "4.png",
        "5-2.png",
        "6.png",
        "8.png",
        "9.png",
        "10.png",
    ];
    let image=''
</script>

<div class="pt-20 columns-2 p-10 max-sm:p-2 max-sm:pt-20 w-full justify-center gap-0">
    {#each news as url, ind (ind)}
        <div class='w-full flex p-4 max-sm:p-1 flex-rol justify-center'>
            <img src={newsDir + url} on:click={()=>image=newsDir+url} alt={"news" + ind} class='hover:cursor-pointer'/>
        </div>
    {/each}
</div>
{#if image}
    <div class='fixed w-screen h-screen flex justify-center items-center bg-black bg-opacity-70' on:click={()=>image=""}>
        <div>
            <img src={image} alt="big news" class='min-size'>
        </div>
    </div>
{/if}

<style>

    .min-size {
        min-width: 50vw;
    }
</style>