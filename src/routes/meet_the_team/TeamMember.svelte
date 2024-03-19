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
      
      class='h-[250px] max-md:h-[166.6px] object-cover -translate-y-[45px]'
      style="object-position:75% 70%;"
      alt={name}
    />
  </div>
  <h4 class="text-sm max-md:text-xs p-2 max-md:pt-2 max-md:p-0">{name}</h4>
  {#if role}
    <p class="text-xs">{role}</p>
  {/if}
</div>

<style>
  .team-member {
  }
</style>
