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
            title: "Autonomous",
            teamLeaders: [
                {
                    name: "Bishara Hakim",
                    role: "Autonomous Team Co-Leader",
                    picture_url: default_url,

                },
                {
                    name: "Gabriel Ganeles",
                    role: "Autonomous Team Co-Leader",
                    picture_url: teamDir + "GabeGaneles.webp",
                }
            ],
            teamMembers: [
                {
                    name: "Mohammad Mrissat",
                    role: "Autonomous Framework Integration",
                    picture_url: default_url,
                },
                {
                    name: "Aleen Nijim",
                    role: "Autonomous Framework Integration",
                    picture_url: default_url,
                },
                {
                    name: "noam yair perlman",
                    role: "state estimation and mapping",
                    picture_url: default_url,
                },
                {
                    name: "Fady	Mattar",
                    role: "Perception",
                    picture_url: default_url,
                },
                {
                    name: "Oren Ghelerter",
                    role: "State Estimation & Mapping",
                    picture_url: default_url,
                },
                {
                    name: "Yehonatan Reuvenes",
                    role: "Planning",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Aerodynamics",
            teamLeaders: [
                {
                    name: "Adi Atrash",
                    picture_url: default_url, // Replace with actual URL of Adi Atrash's picture if available
                    role: "Team Leader",
                }, {
                    name: "Roaya Egbaria",
                    picture_url: default_url, // Replace with actual URL of Roaya Egbaria's picture if available
                    role: "Team Leader",
                },
            ],
            teamMembers: [
                {
                    name: "Nicolas Galagovsky",
                    picture_url: default_url, // Replace with actual URL of Nicolas Galagovsky's picture if available
                    role: "Undertray",
                },
                {
                    name: "Raghad Waked",
                    picture_url: default_url, // Replace with actual URL of Raghad Waked's picture if available
                    role: "Undertray",
                },
                {
                    name: "Abrar Msarwe",
                    picture_url: default_url, // Replace with actual URL of Abrar Msarwe's picture if available
                    role: "mechanical",
                },{
                    name: "Milan Gershkovitch",
                    picture_url: default_url, // Replace with actual URL of Milan Gershkovitch's picture if available
                    role: "mechanical",
                },{
                    name: "Noor Kina'an",
                    picture_url: default_url, // Replace with actual URL of Noor Kina'an's picture if available
                    role: "Undertray team leader",
                },{
                    name: "abed yassin",
                    picture_url: default_url, // Replace with actual URL of abed yassin's picture if available
                    role: "mechanical - suteam leader",
                },{
                    name: "Tomer Tsekhman",
                    picture_url: default_url, // Replace with actual URL of Tomer Tsekhman's picture if available
                    role: "Undertray",
                }
                
                
            ],
        },{
            title: "Front-Wing",
            teamLeaders: [
                {
                    name: "Rani Bassal",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Daniel Tarasenko",
                    role: "Front wing CFD ",
                    picture_url: default_url,
                },
                {
                    name: "David Turgeman",
                    picture_url: default_url,
                },
                {
                    name: "Yam Radecker",
                    picture_url: default_url,
                },
                
            ],
        },
        {
            title: "Rear-Wing",
            teamLeaders: [
                {
                    name: "Tal Segal",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Omri Haquin Gerade",
                    picture_url: default_url,
                },
                {
                    name: "Ori Gavish",
                    picture_url: default_url,
                },
                {
                    name: "Gabriel Trostianecki",
                    picture_url: default_url,
                },
                
            ],
        },
        {
            title: "High Voltage",
            teamLeaders: [
                {
                    name: "Paz Shpilman",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Paz Shpilman",
                    picture_url: default_url,
                },
                {
                    name: "Valerii Asonov",
                    picture_url: default_url,
                },
                {
                    name: "Rahaf Aburaya",
                    picture_url:default_url,
                },
                
            ],
        },
        {
            title: "Low Voltage",
            teamLeaders: [
                {
                    name: "Yara	Abu Raiya",
                    role: "Low voltage leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Rand Mahmoud",
                    picture_url: teamDir + "RandMahmoud.webp",
                },{
                    name: "Layan Abu Elhija",
                    picture_url: default_url,
                },{
                    name: "Aseel Attaria",
                    picture_url:  default_url,
                },
                
            ],
        },
        {
            title: "Control & Communication",
            teamLeaders: [
                {
                    name: "Bishara Hakim",
                    role: "Team Leader",
                    picture_url:  default_url,
                },
            ],
            teamMembers: [
                 {
                    name: "Faheem Knani",
                    picture_url: default_url,
                },
                {
                    name: "Shay Neuhaus",
                    picture_url: default_url,
                },
                {
                    name: "Seba Hamed",
                    picture_url: default_url,
                },
                {
                    name: "Xintong Chen",
                    picture_url: default_url,
                },
                {
                    name: "Salih Bishara",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Suspension",
            teamLeaders: [
                {
                    name: "Anthony Malshy",
                    role: "Team Leader",
                    picture_url: default_url,
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
                    name: "Massad Ayoub",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Yarin Aunallah",
                    picture_url: default_url,
                },
                  {
                    name: "Maxim Lyakhovitsky",
                    picture_url: default_url,
                },
                  {
                    name: "Daniel Veselov",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Chassis",
            teamLeaders: [
                {
                    name: "Shaurya Singh",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Salwa Hathout",
                    picture_url: default_url,
                },
                {
                    name: "Alisa Natapov",
                    picture_url: default_url,
                },
            ],
        },
        {
            title: "Mechanical",
            teamLeaders: [
                {
                    name: "Omry	Tziperfal",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Alisa Natapov",
                    role: "Chasis",
                    picture_url: default_url,
                },
                {
                    name: "Mansour Abu khadra",
                    role: "Drive Train",
                    picture_url: default_url,
                },
                {
                    name: "Ahmad Kanjo",
                    role: "Cooling",
                    picture_url: default_url,
                },{
                    name: "Karam Qasim",
                    role: "Drive Train",
                    picture_url: default_url,
                }, {
                    name: "Meir	Edry",
                    role: "",
                    picture_url: default_url,
                }, {
                    name: "Abdallah	Knana",
                    role: "Accumulator",
                    picture_url: default_url,
                }, {
                    name: "Mika	Tsukrel",
                    role: "Accumulator",
                    picture_url: default_url,
                }, {
                    name: "Shay	Amsterdamer",
                    role: "steering system",
                    picture_url: default_url,
                }, {
                    name: "Daniel Arshavsky ",
                    role: "Cooling",
                    picture_url: default_url,
                }, {
                    name: "Yonathan	Kupfer",
                    role: "Accumulator",
                    picture_url: default_url,
                }, {
                    name: "Zijian Liu",
                    role: "Accumulator",
                    picture_url: default_url,
                }, {
                    name: "Tal Blank",
                    role: "Cooling",
                    picture_url: default_url,
                }, {
                    name: "MalahiGrady",
                    role: "Integration",
                    picture_url: default_url,
                }, {
                    name: "May Chervinsky",
                    role: "Integration Team Leader",
                    picture_url: default_url,
                }
            ],
        },{
            title: "Media & Marketing",
            teamLeaders: [
                {
                    name: "Rama Khier",
                    role: "Sponsorship & Marketing leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Noor	Abd Elhamed",
                    role: "Media",
                    picture_url: default_url,
                },
               
                {
                    name: "Mohammad Mrissat",
                    role: "Website developer",
                    picture_url: default_url,
                },
            ],
        },
      {
            title: "Logistics",
            teamLeaders: [
                {
                    name: "",
                    role: "Team Leader",
                    picture_url: default_url,
                },
            ],
            teamMembers: [
                {
                    name: "Hala	Abd El-Haleem",
                    role: "Purchasing and Finance",
                    picture_url: default_url,
                },
                {
                    name: "Eden Abo Tafla",
                    picture_url: default_url,
                },
                {
                    name: "Noor	Abd Elhamed",
                    picture_url: default_url,
                },
                {
                    name: "Mattan Shamailov",
                    role: "Competition",
                    picture_url: default_url,
                },
                {
                    name: "Dima	Farah",
                    picture_url: default_url,
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
        <div class="flex flex-col pt-2 px-4 pb-20 max-md:px-1 w-custom">
            <div class="snap-center flex flex-col pb-2 md:w-[800px] mx-auto md:pt-8">
                <h1 class="text-5xl pt-8 pb-4">Management and Operations</h1>
                <div class="flex flex-row justify-evenly mb-1">
                    <FormulaLeader
                        name={"Jawad Soliman"}
                        role={"Team Leader"}
                        picture_url={teamDir + "JawadSoliman.webp"}
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
                            animation={"slide-in-top-blurred .2s cubic-bezier(.21,.91,.58,.99) both"}
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
            transform: translateY(-50px);
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
