<!-- TeamLeader.svelte -->
<script>
    export let name;
    export let picture_url;
    export let role;
</script>

<div
    class="team-leader hover:z-10 hover:scale-[1.5] transition-all hover:bg-black hover:bg-opacity-80 hover:p-2 hover:rounded-xl"
>
    <div class='w-[250px] h-[250px] max-md:w-[166.7px] max-md:h-[166.7px] overflow-hidden'>
        <img
            src={picture_url}
            alt={name}
            class="h-[350px] max-md:h-[250.6px] object-cover -translate-y-[26.7px] max-md:-translate-y-[40px]"
            style="object-position:75% 70%;"
        />
    </div>
    <h3 class="text-xl text-center">{name}</h3>
    <p class='text-center'>{role}</p>
</div>

