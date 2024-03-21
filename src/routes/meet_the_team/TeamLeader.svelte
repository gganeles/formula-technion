<!-- TeamLeader.svelte -->
<script>
    export let name;
    export let picture_url;
    export let role;

    import Image from "$lib/Image.svelte"

    const hoverClass="hover:z-10 hover:scale-[1.5] transition-all hover:bg-black hover:bg-opacity-80 p-2 hover:rounded-xl"
</script>

<div
    class="team-leader m-1 lg:m-2"
>
    <div class='w-[250px] h-[250px] max-md:w-[166.7px] max-md:h-[166.7px] overflow-hidden'>
        <Image
            src={picture_url}
            alt={name}
            class0="h-[350px] max-md:h-[250.6px] object-cover -translate-y-[26.7px] max-md:-translate-y-[40px]"
            style="object-position:75% 70%;"
        />
    </div>
    <h3 class="text-xl text-center pt-2.5">{name}</h3>
    <p class='text-center pb-.5'>{role}</p>
</div>

