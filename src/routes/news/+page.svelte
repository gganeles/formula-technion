<script>
  import { linear } from "svelte/easing";

    const newsDir = "/images/News/";
    const news = [
        {img:"1.png",clickable: true,link: "https://www.jpost.com/business-and-innovation/article-712202?utm_source=chatgpt.com"},
        {img:"3-2.png", clickable: false},
        {img:"4.png", clickable: false},
        {img:"5-2.png",clickable: true,link: "https://www.gear.co.il/2013_07_02_N01_%D7%9E%D7%9B%D7%95%D7%A0%D7%99%D7%AA_%D7%9E%D7%A8%D7%95%D7%A5_%D7%98%D7%9B%D7%A0%D7%99%D7%95%D7%9F"},
        {img:"6.png",clickable: true,link: "https://autonews.co.il/%d7%a4%d7%95%d7%a8%d7%9e%d7%95%d7%9c%d7%94-%d7%a1%d7%98%d7%95%d7%93%d7%a0%d7%98-2017-%d7%9e%d7%a7%d7%95%d7%9d-%d7%a9%d7%9e%d7%99%d7%a0%d7%99-%d7%9c%d7%a0%d7%91%d7%97%d7%a8%d7%aa-%d7%94%d7%98%d7%9b/"},
        {img:"8.png",clickable: true,link: "https://www.queenoftheroad.co.il/%D7%92%D7%90%D7%95%D7%95%D7%94-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%AA-%D7%A6%D7%95%D7%95%D7%AA-%D7%A4%D7%95%D7%A8%D7%9E%D7%95%D7%9C%D7%94-%D7%98%D7%9B%D7%A0%D7%99%D7%95%D7%9F-%D7%99%D7%AA/"},
        {img:"9.png",clickable: true,link: "https://megafon-news.co.il/asys/archives/259727"},
        {img:"10.png",clickable: true,link: "https://www.technion.ac.il/blog/2022/07/%D7%9C%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%94-%D7%A8%D7%9B%D7%91-%D7%97%D7%A9%D7%9E%D7%9C%D7%99-%D7%90%D7%95%D7%98%D7%95%D7%A0%D7%95%D7%9E%D7%99-%D7%9C%D7%A7%D7%91%D7%95%D7%A6%D7%AA-%D7%A4%D7%95%D7%A8/"},
    ];
    let image=''//Here i can put a source to a big news image and image that would appear in the screen when ever i get to the page and when clicking on it it would disappear
</script>

<div class="pt-20 columns-2 p-10 max-sm:p-2 max-sm:pt-20 w-full justify-center gap-0">
    {#each news as item}
    <div class="p-4">

        {#if item.clickable}
        <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={newsDir + item.img} class="hover:cursor-pointer" alt="news" />
        </a>
        {:else}
            <img src={newsDir + item.img} class="cursor-default" alt="news" />
        {/if}

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