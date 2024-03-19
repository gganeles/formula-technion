<script>
    export let name;
    export let role;
    export let picture_url;
</script>


<div class="flex flex-col items-center p-2">
    <img src={picture_url} alt={name} />
    <h3 class='text-2xl max-md:text-base'>{name}</h3>
    <p class='text-wrap max-md:text-xs '>{role}</p>
</div>