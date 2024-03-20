<script>
    import FormulaLeader from "./FormulaLeader.svelte";
    import Team from "./Team.svelte";

    let y = 0; // This will hold the scroll position

    const default_url = "/images/formula.png";

    const teamDir = "/images/meet_the_team/";
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
                    picture_url: teamDir + "YahavBahalker.JPG", // Replace with actual URL of Yahav Bahalker's picture if available
                },
                {
                    name: "Daniel Pearson",
                    picture_url: teamDir + "DanielPearson.JPG", // Replace with actual URL of Daniel Pearson's picture if available
                },
                {
                    name: "Bader Abu Hjoul",
                    picture_url: teamDir + "BaderAbuHjoul.JPG", // Replace with actual URL of Bader Abu Hjoul's picture if available
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
                    picture_url: teamDir + "BrochaSilverman.JPG",
                },
            ],
            teamMembers: [
                {
                    name: "Tomer Ganz",
                    picture_url: teamDir + "TomerGanz.JPG",
                },
                {
                    name: "Yonatan Kennedy",
                    picture_url: teamDir + "YonatanKennedy",
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
                    picture_url: teamDir + "CharlieShrem.JPG",
                },
            ],
            teamMembers: [
                {
                    name: "Ahmed Ganaim",
                    picture_url: teamDir + "AhmedGanaim.JPG",
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
                    picture_url: teamDir + "IliaFridburg.JPG",
                },
            ],
            teamMembers: [
                {
                    name: "Gabriel Ganeles",
                    role: "PCB Design",
                    picture_url: teamDir + "GabeGaneles.JPG",
                },
                {
                    name: "Yahli Sofer",
                    role: "Communication Protocols",
                    picture_url: default_url,
                },
                {
                    name: "Itay Mal",
                    role: "Communication Protocols",
                    picture_url: teamDir + "ItayMal",
                },
            ],
        },
        {
            title: "Suspension",
            teamLeaders: [
                {
                    name: "Haim Chocron",
                    role: "Team Leader",
                    picture_url: teamDir + "HaimChocron.JPG",
                },
            ],
            teamMembers: [
                {
                    name: "Sharbel Roshrosh",
                    picture_url: teamDir + "SharbelRoshRosh.JPG",
                },
                {
                    name: "Noam Hannoun",
                    picture_url: teamDir + "NoamHannoun.JPG",
                },
            ],
        },
        {
            title: "Driver Interface",
            teamLeaders: [
                {
                    name: "Ayham Badarneh",
                    role: "Team Leader",
                    picture_url: teamDir + "AyhamBadarneh.JPG",
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
                    picture_url: teamDir + "JawadSoliman.JPG",
                },
            ],
            teamMembers: [
                {
                    name: "Jad Shbita",
                    picture_url: teamDir + "JadShbita.JPG",
                },
                {
                    name: "Marwa Lahwani",
                    picture_url: teamDir + "MarwaLahwani.JPG"
                },
            ],
        },
        {
            title: "Powertrain",
            teamLeaders: [
                {
                    name: "Alessio Moscati",
                    role: "Team Leader",
                    picture_url: teamDir + "AlessioMoscati.JPG",
                },
            ],
            teamMembers: [
                {
                    name: "Yousef Bawaqni",
                    picture_url: teamDir + "YousefBawaqni.JPG",
                },
                {
                    name: "Aseel Ayoub",
                    picture_url: teamDir + "AseelAyuob",
                },
                {
                    name: "Daniel Engelberg",
                    picture_url: teamDir + "DanielEngelberg.JPG",
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
                    picture_url: teamDir + "BenLevin.JPG",
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
                    picture_url: teamDir + "RandMahmoud.JPG",
                },
                {
                    name: "Ofek Shechter",
                    picture_url: teamDir + "OfekShechter.JPG",
                },
            ],
        },
        {
            title: "Media & Marketing",
            teamLeaders: [
                {
                    name: "Hodi Sackstein",
                    role: "Team Leader",
                    picture_url: teamDir + "HodiSackstein.JPG",
                },
            ],
            teamMembers: [
                {
                    name: "Ryan Fodi",
                    role: "Media & Marketing",
                    picture_url: teamDir + "RyanFodi.JPG",
                },
                {
                    name: "Raquel Goldsztejn",
                    role: "Event Manager",
                    picture_url: teamDir + "RaquelGoldzstejn.JPG",
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
            picture_url: teamDir + "CharlieShrem.JPG",
        },
        {
            name: "Masaad Ayoub",
            role: "Mechanical Chief Engineer",
            picture_url: teamDir+"Masaadchul.JPG",
        },
        {
            name: "Bracha Silverman",
            role: "Electronics Chief Engineer",
            picture_url: teamDir + "BrochaSilverman.JPG",
        },
        {
            name: "Ilia Fridburg",
            role: "Control Chief Engineer",
            picture_url: teamDir + "IliaFridburg.JPG",
        },
        {
            name: "Karina Shcherbachov",
            role: "PR Manager",
            picture_url: teamDir + "Karina.JPG",
        },
    ];

    // A reactive statement that calculates blur value based on scroll position
    $: blurValue = Math.min(y / 30, 20); // Adjust the division to control the rate of blurring. Cap at 4px of blur.
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
    <title>Meet the Team!</title>
    <meta name="the team page" content="list of team members" />
</svelte:head>

<div class="relative flex flex-col items-center justify-center">
    <div
        class="fixed blur top-0 w-screen h-screen bg-image"
        style="--blur:{blurValue}px"
    ></div>
    <div class="text-3xl flex flex-col items-center drop-shadow-xl mt-96 mb-60">
        <div class="text-8xl max-md:text-5xl">Meet the Team</div>
        <div>that made it all possible</div>
    </div>
    <div class="z-1 flex flex-row justify-center">
        <div class="flex flex-col p-4 max-md:p-0 w-custom">
            <div class="flex flex-col pb-16">
                <h1 class="text-6xl py-8 mb-8">Management and Operations</h1>
                <div class="flex flex-row justify-evenly mb-10">
                    <FormulaLeader
                        name={"Ali Hazboun"}
                        role={"Team Leader"}
                        picture_url={teamDir + "AliHazboun.JPG"}
                    />
                    <FormulaLeader
                        name={"Majd Jaraysi"}
                        role={""}
                        picture_url={teamDir+ "MajdJaraysi.JPG"}
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
            {#each teamList as team}
                <div class="flex flex-col items-center w-full">
                    <h1 class="p-12 text-4xl">
                        {team.title}
                    </h1>
                    <Team
                        teamLeaders={team.teamLeaders}
                        teamMembers={team.teamMembers}
                    />
                </div>
            {/each}
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
</style>
