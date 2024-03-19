<!-- TeamMember.svelte -->
<script>
  export let name;
  export let picture_url;
  export let role;
</script>

<div
  class="team-member m-2 md:m-2 hover:z-10 hover:scale-[1.5] transition-all hover:bg-black hover:bg-opacity-80 hover:p-2 hover:rounded-xl"
>
  <div class='w-36 h-36 max-md:w-24 max-md:h-24 overflow-hidden'>
    <img
      src={picture_url}
      
      class='h-[15rem] max-md:h-[10rem] object-cover -translate-y-[45px] max-md:-translate-y-[28px]'
      style="object-position:75% 70%;"
      alt={name}
    />
  </div>
  <h4 class="text-sm max-md:text-xs text-center">{name}</h4>
  {#if role}
    <p class="text-xs text-center">{role}</p>
  {/if}
</div>
