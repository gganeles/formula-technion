<script>
    import { onMount } from "svelte";
    import FormulaLeader from "./FormulaLeader.svelte";
    import Team from "./Team.svelte";
    import { formulaLeader, teamList } from "./teamData.js";

    let mounted = false;

    onMount(() => {
        mounted = true;
    });
</script>

<svelte:head>
    <title>Meet the Team!</title>
    <meta
        name="description"
        content="Meet the Formula Student team members, leaders, and subteams."
    />
</svelte:head>

<main class="min-h-screen bg-white text-[#082f49]">
    <!-- Hero: keeps the original big opening picture -->
    <section class="hero relative min-h-screen overflow-hidden text-white">
        <div class="absolute inset-0 bg-black/45"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/55"></div>

        <div
            class={`relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-28 text-center transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
            <p class="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 max-md:text-xs">
                Formula Student Technion
            </p>
            <h1 class="text-7xl font-bold tracking-tight drop-shadow-lg max-md:text-5xl">
                Meet the Team
            </h1>
            <p class="mt-4 text-3xl font-semibold text-white/90 drop-shadow max-md:text-xl">
                that made it all possible
            </p>
        </div>
    </section>

    <!-- Whole team leader: Jawad -->
    <section class="bg-white px-6 py-24 text-[#082f49] max-md:px-4 max-md:py-16">
        <div class="mx-auto max-w-7xl text-center">
            <p class="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#076093]/70">
                Team Leadership
            </p>
            <h2 class="mb-12 text-5xl font-bold tracking-tight max-md:text-3xl">
                Formula Team Leader
            </h2>

            <FormulaLeader
                name={formulaLeader.name}
                role={formulaLeader.role}
                picture_url={formulaLeader.picture_url}
                image_position={formulaLeader.image_position}
                linkedin_url={formulaLeader.linkedin_url}
            />
        </div>
    </section>

    {#each teamList as team, index}
        <section
            class={`team-section ${index % 2 === 0 ? "section-blue" : "section-white"}`}
        >
            <div class="mx-auto max-w-7xl px-6 py-24 max-md:px-4 max-md:py-16">
                <div class="mx-auto mb-14 max-w-3xl text-center">
                    <p class="mb-3 text-xs font-bold uppercase tracking-[0.3em] opacity-70">
                        Subteam {index + 1}
                    </p>
                    <h2 class="text-5xl font-bold tracking-tight max-md:text-3xl">
                        {team.title}
                    </h2>
                    {#if team.description}
                        <p class="mt-4 text-lg leading-8 opacity-80 max-md:text-base">
                            {team.description}
                        </p>
                    {/if}
                </div>

                <Team
                    teamLeaders={team.teamLeaders ?? []}
                    teamMembers={team.teamMembers ?? []}
                />
            </div>
        </section>
    {/each}
</main>

<style>
    .hero {
        background-image: url("/images/img_7843.webp");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .team-section {
        transition:
            background-color 180ms ease,
            color 180ms ease;
    }

    .section-white {
        background: #ffffff;
        color: #082f49;
    }

    .section-blue {
        background: #076093;
        color: #ffffff;
    }
</style>
