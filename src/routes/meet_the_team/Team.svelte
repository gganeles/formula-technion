<script>
    import TeamMember from './TeamMember.svelte';
    import TeamLeader from './TeamLeader.svelte';


    export let teamLeaders=[];
    export let teamMembers=[];
</script>

<div class='team-container flex flex-row max-md:flex-col max-md:items-center md:p-12'>
    {#if teamLeaders && teamLeaders.length != 0}
        <div class="team-leaders z-10">
            {#each teamLeaders as leader}
                <TeamLeader name={leader.name} picture_url={leader.picture_url} role={leader.role} />
            {/each}
        </div>
    {/if}
    {#if teamMembers && teamMembers.length != 0}
    <div class='max-md:justify-center justify-end'>
        <div class="team-members flex flex-row max-md:justify-center flex-wrap">
            {#each teamMembers as member}
                <TeamMember name={member.name} picture_url={member.picture_url} role={member.role} />
            {/each}
        </div>
    </div>
    {/if}
</div>
