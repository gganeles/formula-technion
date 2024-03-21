<!-- TeamMember.svelte -->
<script>
    import Image from "$lib/Image.svelte";

  export let name;
  export let picture_url;
  export let role;


  const hover = "hover:z-10 hover:scale-[1.5] transition-all hover:bg-black hover:bg-opacity-80 hover:rounded-xl"
</script>

<div
  class="team-member m-1 lg:m-2 flex flex-col items-center"
>
  <div class='w-36 h-36 max-md:w-24 max-md:h-24 overflow-hidden'>
    <Image
      src={picture_url}
      
      class0='h-[15rem] max-md:h-[10rem] object-cover -translate-y-[45px] max-md:-translate-y-[28px]'
      style="object-position:75% 70%;"
      alt={name}
    />
  </div>
  <h4 class="text-sm max-md:text-xs text-center pt-2.5">{name}</h4>
  {#if role}
    <p class="text-xs text-center">{role}</p>
  {/if}
</div>
