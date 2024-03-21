<script>
    import { onMount } from "svelte";
    import FormulaLeader from "./FormulaLeader.svelte";
    import Team from "./Team.svelte";
    import Saos from "saos";
    const pictures = import.meta.glob(
        "/images/meet_the_team/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}",
        {
            query: {
                enhanced: true,
            },
        },
    );
    let y = 0; // This will hold the scroll position

    const default_url = "/images/formula.png";

    const teamDir = "/images/meet_the_team/lowerRes/";
    let teamList = [
        {
            title: "Aerodynamics",
            teamLeaders: [
                {
                    name: "Roi Baruch",
                    picture_url: default_url, // Replace with actual URL of Roi Baruch's picture if available
                    role: "Team Leader",
                },
            ],
            teamMembers: [
                {
                    name: "Yahav Bahalker",
                    picture_url: teamDir + "YahavBahalker.webp", // Replace with actual URL of Yahav Bahalker's picture if available
                },
                {
                    name: "Daniel Pearson",
                    picture_url: teamDir + "DanielPearson.webp", // Replace with actual URL of Daniel Pearson's picture if available
                },
                {
                    name: "Bader Abu Hjoul",
                    picture_url: teamDir + "BaderAbuHjoul.webp", // Replace with actual URL of Bader Abu Hjoul's picture if available
                },
                {
                    name: "Lior Zehavi",
                    picture_url: default_url, // Replace with actual URL of Lior Zehavi's picture if available
                },
                {
                    name: "Tzlil Oren",
                    picture_url: default_url, // Replace with actual URL of Tzlil Oren's picture if available
                },
                {
                    name: "Dan Hunter",
                    picture_url: default_url, // Replace with actual URL of Dan Hunter's picture if available
                },
                {
                    name: "Gadban Gadban",
                    picture_url: default_url, // Replace with actual URL of Gadban Gadban's picture if available
                },
                {
                    name: "Michal Amar",
                    picture_url: default_url, // Replace with actual URL of Michal Amar's picture if available
                },
            ],
        },
        {
            title: "Rear-Wing",
            teamLeaders: [
                {
                    name: "Tal Segal",
                    role: "",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Abd Yassin",
                    picture_url: default_url,
                },
                {
                    name: "Amjad Saadi",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Electronics",
            teamLeaders: [
                {
                    name: "Bracha Silverman",
                    role: "Team Leader",
                    picture_url: teamDir + "BrochaSilverman.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Tomer Ganz",
                    picture_url: teamDir + "TomerGanz.webp",
                },
                {
                    name: "Yonatan Kennedy",
                    picture_url: teamDir + "YonatanKennedy.webp",
                },
                {
                    name: "Neave Menahem",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "High Voltage",
            teamLeaders: [
                {
                    name: "Charlie Shrem",
                    role: "Team Leader",
                    picture_url: teamDir + "CharlieShrem.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Ahmed Ganaim",
                    picture_url: teamDir + "AhmedGanaim.webp",
                },
                {
                    name: "Taufeeq Saed",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Control & Communication",
            teamLeaders: [
                {
                    name: "Ilia Fridburg",
                    role: "Team Leader",
                    picture_url: teamDir + "IliaFridburg.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Gabriel Ganeles",
                    role: "PCB Design",
                    picture_url: teamDir + "GabeGaneles.webp",
                },
                {
                    name: "Yahli Sofer",
                    role: "Communication Protocols",
                    picture_url: default_url,
                },
                {
                    name: "Itay Mal",
                    role: "Communication Protocols",
                    picture_url: teamDir + "ItayMal.webp",
                },
            ],
        },
        {
            title: "Suspension",
            teamLeaders: [
                {
                    name: "Haim Chocron",
                    role: "Team Leader",
                    picture_url: teamDir + "HaimChochron.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Sharbel Roshrosh",
                    picture_url: teamDir + "SharbelRoshRosh.webp",
                },
                {
                    name: "Noam Hannoun",
                    picture_url: teamDir + "NoamHannoun.webp",
                },
            ],
        },
        {
            title: "Driver Interface",
            teamLeaders: [
                {
                    name: "Ayham Badarneh",
                    role: "Team Leader",
                    picture_url: teamDir + "AyhamBadarneh.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Hala Zoabi",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Monocoque R&D",
            teamLeaders: [
                {
                    name: "Dimitri Tribli",
                    role: "",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Yotam Maor",
                    picture_url: default_url,
                },
                {
                    name: "Barr Korchia",
                    picture_url: default_url,
                },
                {
                    name: "Salma Lahwani",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Chassis",
            teamLeaders: [
                {
                    name: "Jawad Soliman",
                    role: "Team Leader",
                    picture_url: teamDir + "JawadSoliman.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Jad Shbita",
                    picture_url: teamDir + "JadShbita.webp",
                },
                {
                    name: "Marwa Lahwani",
                    picture_url: teamDir + "MarwaLahwani.webp",
                },
            ],
        },
        {
            title: "Powertrain",
            teamLeaders: [
                {
                    name: "Alessio Moscati",
                    role: "Team Leader",
                    picture_url: teamDir + "AlessioMoscati.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Yousef Bawaqni",
                    picture_url: teamDir + "YousefBawaqni.webp",
                },
                {
                    name: "Aseel Ayoub",
                    picture_url: teamDir + "AseelAyuob.webp",
                },
                {
                    name: "Daniel Engelberg",
                    picture_url: teamDir + "DanielEngelberg.webp",
                },
                {
                    name: "Karem Qasim",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Mechanisms",
            teamLeaders: [
                {
                    name: "Benjamin Levin",
                    role: "Team Leader",
                    picture_url: teamDir + "BenLevin.webp",
                },
            ],
        },
        {
            title: "Integration",
            teamLeaders: [
                {
                    name: "Rozan Araidy",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Rand Mahmoud",
                    picture_url: teamDir + "RandMahmoud.webp",
                },
                {
                    name: "Ofek Shechter",
                    picture_url: teamDir + "OfekShechter.webp",
                },
            ],
        },
        {
            title: "Media & Marketing",
            teamLeaders: [
                {
                    name: "Hodi Sackstein",
                    role: "Team Leader",
                    picture_url: teamDir + "HodiSackstein.webp",
                },
            ],
            teamMembers: [
                {
                    name: "Ryan Fodi",
                    role: "Media & Marketing",
                    picture_url: teamDir + "RyanFodi.webp",
                },
                {
                    name: "Raquel Goldsztejn",
                    role: "Event Manager",
                    picture_url: teamDir + "RaquelGoldzstejn.webp",
                },
                {
                    name: "Gabriel Ganeles",
                    role: "Website Design",
                    picture_url: teamDir + "GabeGaneles.webp",
                },
            ],
        },
    ];

    const cheifs = [
        {
            name: "Roi Baruch",
            role: "Aerodynamics Chief Engineer",
            picture_url: default_url,
        },
        {
            name: "Charlie Shrem",
            role: "Electrical Chief Engineer",
            picture_url: teamDir + "CharlieShrem.webp",
        },
        {
            name: "Masaad Ayoub",
            role: "Mechanical Chief Engineer",
            picture_url: teamDir + "Masaadchuk.webp",
        },
        {
            name: "Bracha Silverman",
            role: "Electronics Chief Engineer",
            picture_url: teamDir + "BrochaSilverman.webp",
        },
        {
            name: "Ilia Fridburg",
            role: "Control Chief Engineer",
            picture_url: teamDir + "IliaFridburg.webp",
        },
        {
            name: "Karina Shcherbachov",
            role: "PR Manager",
            picture_url: teamDir + "Karina.webp",
        },
    ];

    let yTop = 0;
    let box;
    function parseScroll() {
        yTop = box.scrollTop;
    }

    onMount(() => parseScroll());

    // A reactive statement that calculates blur value based on scroll position
    $: blurValue = Math.min(yTop / 30, 20);
</script>

<svelte:head>
    <title>Meet the Team!</title>
    <meta name="the team page" content="list of team members" />
</svelte:head>

<div
    class="relative flex flex-col items-center scroll-snap snap-y h-screen snap-mandatory overflow-y-scroll"
    bind:this={box}
    on:scroll={parseScroll}
>
    <div
        class="fixed blur top-0 w-[calc(100vw-5px)] h-screen bg-image"
        style="--blur:{blurValue}px"
    ></div>
    <div
        class="snap-center text-3xl flex flex-col items-center drop-shadow-xl pt-96 pb-60 w-full"
    >
        <div class="text-8xl max-md:text-5xl">Meet the Team</div>
        <div>that made it all possible</div>
    </div>
    <div class="z-1 flex flex-row justify-center">
        <div class="flex flex-col pt-2 px-4 pb-20 max-md:px-0 w-custom">
            <div class="snap-center flex flex-col pb-16">
                <h1 class="text-6xl py-8 mb-8">Management and Operations</h1>
                <div class="flex flex-row justify-evenly mb-1">
                    <FormulaLeader
                        name={"Ali Hazboun"}
                        role={"Team Leader"}
                        picture_url={teamDir + "AliHazboun.webp"}
                    />
                    <FormulaLeader
                        name={"Majd Jaraysi"}
                        role={""}
                        picture_url={teamDir + "MajdJaraysi.webp"}
                    />
                </div>
                <div class="grid grid-cols-3 items-start">
                    {#each cheifs as cheif}
                        <FormulaLeader
                            name={cheif.name}
                            role={cheif.role}
                            picture_url={cheif.picture_url}
                        />
                    {/each}
                </div>
            </div>
            <div class="">
                {#each teamList as team}
                    <div class="snap-center">
                        <Saos
                            animation={"slide-in-top-blurred .4s cubic-bezier(.21,.91,.58,.99) both"}
                            top={300}
                            animation_out="slide-out-top-blurred .2s cubic-bezier(.45,0,.88,.33) both"
                        >
                            <div class="flex flex-col items-center w-full">
                                <h1 class="pt-12 pb-2 text-4xl">
                                    {team.title}
                                </h1>
                                <Team
                                    teamLeaders={team.teamLeaders}
                                    teamMembers={team.teamMembers}
                                />
                            </div>
                        </Saos>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .blur {
        filter: blur(var(--blur));
    }

    .w-custom {
        max-width: 1100px;
    }

    .bg-image {
        background-image: url("/images/img_7843.webp");
        background-size: cover;
        background-position: center;
    }

    .z-1 {
        z-index: 1;
    }

    @keyframes -global-slide-in-top-blurred {
        0% {
            transform: translateY(-200px);
            filter: blur(10px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            filter: blur(0px);
            opacity: 1;
        }
    }

    @keyframes -global-slide-out-top-blurred {
        0% {
            filter: blur(0px);
            opacity: 1;
        }
        100% {
            filter: blur(10px);
            opacity: 0;
        }
    }
</style>
