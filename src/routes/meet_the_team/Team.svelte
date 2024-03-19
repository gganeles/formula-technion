<script>
    import TeamMember from './TeamMember.svelte';
    import TeamLeader from './TeamLeader.svelte';


    export let teamLeaders=[];
    export let teamMembers=[];
</script>

<div class='team-container flex flex-row max-md:flex-col max-md:items-center w-full'>
    {#if teamLeaders && teamLeaders.length != 0}
        <div class="team-leaders md:w-[350px] z-10">
            {#each teamLeaders as leader}
                <TeamLeader name={leader.name} picture_url={leader.picture_url} role={leader.role} />
            {/each}
        </div>
    {/if}
    {#if teamMembers && teamMembers.length != 0}
    <div class='w-full max-md:justify-center'>
        <div class="team-members flex flex-row max-md:justify-center flex-wrap ">
            {#each teamMembers as member}
                <TeamMember name={member.name} picture_url={member.picture_url} role={member.role} />
            {/each}
        </div>
    </div>

    {/if}
</div>

<style>
    .team-container {
    }
    .team-leaders {

    }
    .team-members {
        
    }
  </style>