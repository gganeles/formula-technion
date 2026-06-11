<script>
    import TeamLeader from "./TeamLeader.svelte";
    import TeamMember from "./TeamMember.svelte";

    export let teamLeaders = [];
    export let teamMembers = [];
</script>

<div class="team-layout">
    {#if teamLeaders?.length}
        <div class="leaders-grid">
            {#each teamLeaders as leader}
                <TeamLeader
                    name={leader.name}
                    role={leader.role}
                    picture_url={leader.picture_url}
                    image_position={leader.image_position}
                    linkedin_url={leader.linkedin_url}
                />
            {/each}
        </div>
    {/if}

    {#if teamMembers?.length}
        <div class="members-grid">
            {#each teamMembers as member}
                <TeamMember
                    name={member.name}
                    role={member.role}
                    picture_url={member.picture_url}
                    image_position={member.image_position}
                    linkedin_url={member.linkedin_url}
                />
            {/each}
        </div>
    {/if}
</div>

<style>
    .team-layout {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .leaders-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 330px));
        justify-content: center;
        align-items: start;
        gap: 3rem;
        margin-bottom: 4rem;
    }

    .members-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 190px));
        justify-content: center;
        align-items: start;
        gap: 3rem 2rem;
    }

    @media (max-width: 640px) {
        .leaders-grid {
            grid-template-columns: minmax(250px, 300px);
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .members-grid {
            grid-template-columns: repeat(auto-fit, minmax(135px, 150px));
            gap: 2rem 1.2rem;
        }
    }
</style>
