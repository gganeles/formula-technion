<script>
    import SponsorGroup from "./SponsorGroup.svelte";

    const sponsorsDir = "/images/Sponsors/";
    const golds = [
        {
            name: "Multipress",
            url: sponsorsDir + "multipress-1_orig.png",
        },
        {
            name: "Rosman Funds",
            url: sponsorsDir + "rosman-funds-1_orig.png",
        },
        {
            name: "Ford Israel Research Center",
            url: sponsorsDir + "ford-1_orig.png",
        },
    ];
    const silvers = [
        {
            name: "Grand Technion Energy Program",
            url: sponsorsDir + "grand-technion-energy-program-1_orig.png",
        }
    ];
    const bronze = [
        {
            name: "Technion faculty of mechanical engineering",
            url: sponsorsDir + "logo-me-1_orig.png",
        },
        {
            name: "Dan Karting",
            url: sponsorsDir + "dan-karting-1_orig.png",
        },
        {
            name: "Solutions Mobile Technologies",
            url: sponsorsDir + "solution-1.jpg",
        },
        {
            name: "Technion Faculty of Aerospace Engineering",
            url: sponsorsDir + "aero-heb-eng-logo-cyan_orig.png",
        },
    ];
    const contributors = [
        {
            name: "Kenesto",
            url: sponsorsDir + "kenestologo_orig.png",
        },
        {
            name: "Ansys",
            url: sponsorsDir + "ansys-logo.png",
        },
        {
            name: "Solidworks",
            url: sponsorsDir + "solidworks-logo-1.png",
        },
        {
            name: "Altair",
            url: sponsorsDir + "altair-1_orig.png",
        },
        {
            name: "Altium",
            url: sponsorsDir + "altium-logo-blk-01-1_orig.jpg",
        },
        {
            name: "Technion faculty of electrical and computer engineering",
            url:
                sponsorsDir +
                "electrical-computer-engineering-faculty-1_orig.png",
        },
        {
            name: "Bender",
            url: sponsorsDir + "bender-logo_orig.png",
        },
        {
            name: "Comet",
            url: sponsorsDir + "comet-1_orig.png",
        },
        {
            name: "Andrei Niroste",
            url: sponsorsDir + "andrei_niruste.jpeg",
        },
        {
            name: "Green Coat Yalgat",
            url: sponsorsDir + "green_coat_yalgat.jpeg",
        },
        {
            name: "TE connectivity",
            url: sponsorsDir + "te-connectivity-logo_orig.jpg",
        },
    ];

    const silvers23 = [
        silvers.find((i) => i.name === "Grand Technion Energy Program"),
        bronze.find((i) => i.name === "Dan Karting"),
        {
            name: "NadineTech",
            url: sponsorsDir + "nadinetech_1.png",
        },
        {
            name: "Rafael",
            url: sponsorsDir + "2560px-rafael-2-svg_1.png",
        },
    ];
</script>

<svelte:head>
    <title>Sponsors</title>
</svelte:head>

<div class="relative overflow-hidden h-custom">
    <div class="absolute picture w-full h-full"></div>
    <div class="absolute w-full h-full bg-black bg-opacity-40"></div>
    <div class="absolute w-full bottom-14 flex flex-row justify-center">
        <div class="text-7xl max-sm:text-5xl">Sponsors 2024</div>
    </div>
</div>
<div class="flex flex-col w-full bg-white px-20 max-sm:px-4  pb-40 text-black">
    <SponsorGroup group={golds} groupName="Gold Sponsors"/>
    <SponsorGroup
        group={silvers}
        groupName="Silver Sponsors"
        gridCols={2}
        textColor={"text-slate-400"}
    />
    <SponsorGroup
        group={bronze}
        groupName="Bronze Sponsors"
        gridCols={4}
        textColor={"text-yellow-800"}
    />
    <SponsorGroup
        group={contributors}
        groupName="Contributors"
        gridCols={4}
        textColor="text-black"
    />
  <!--  <div>    THESE ARE SOME OF THE OLD SPONSORS, ONLY ADD THEM IF NECESSARY
        <div class="text-center text-6xl py-20 border-b">Sponsors 2023</div>
        <SponsorGroup
            group={[golds.find((i) => i.name === "Rosman Funds")]}
            groupName="Platinum Sponsors"
            gridCols={1}
            textColor="text-slate-600"
        />
        <SponsorGroup
            group={golds.filter((i) => i.name !== "Rosman Funds")}
            groupName="Gold Sponsors"
            gridCols={2}
        />
        <SponsorGroup group={silvers23} groupName="Silver Sponsors" gridCols={2}/>
    </div>
    -->
</div>

<style>
    .picture {
        background-image: url("/images/Sponsors/car.jpg");
        background-size: cover;
        background-position: 60% 40%;
    }
    .h-custom {
        height: 400px;
    }
</style>
