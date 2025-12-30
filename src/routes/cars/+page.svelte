<script>
    import Car from "./Car.svelte";
    import Chevrondoubleleft from "./Chevrondoubleleft.svelte";
    import Chevrondoubleright from "./Chevrondoubleright.svelte";
    import { onMount } from "svelte";
    const default_src = "";
    const carDir = "/images/cars/";
    const cars = [
        {
            title: "Batrice/FT22-23E",
            description:
                "Batrice is the first Formula Technion Autonomous combined Electric Vehicle",
            achievements: [
                "2nd place in Business event at FSPT",
            ],
            specs: {
                Weight: "260 [Kg]",
                Power: "81 [Hp]",
                Motor: "Emrax 228",
                Accumulator: "450 [V], 180 [A]",
                Downforce: "1000 [N] at 80 [Km/h]",
                Drag: "400 [N] at 80 [Km/h]",
                "Chassis Torsion": "2000 [Nm/deg]",
                "Center of Mass Height": "300 [mm]",
            },
            img_src: carDir + "ft23.jpg",
        },
        {
            title: "Abbie/FT21-22E",
            description:
                "Abbie is the first Formula Technion Electric vehicle. The car competed in Formula Student Spain.",
            specs: {
                Weight: "220 [Kg]",
                Power: "81 [Hp]",
                Motor: "Emrax 228",
                Accumulator: "350 [V], 200 [A]",
                Downforce: "1200 [N] at 80 [Km/h]",
                Drag: "450 [N] at 80 [Km/h]",
                "Chassis Torsion": "2000 [Nm/deg]",
                "Center of Mass Height": "300 [mm]",
            },
            img_src: carDir + "ft22.jpg",
        },
        {
            title: "FT19C",
            description: `The FT19C is Formula Technion's seventh car. The car competed in Formula Student Austria, Formula Student Germany and Formula Student Czech Republic. This is the first time that Formula Technion participated in 3 competitions.`,
            achievements: [
                "First place skidpad @ FS Czech - first dynamic event win in team history",
                "Lightest winged car in Formula Student history (132kg)",
                "6th place Cost Report - Formula Student Austria",
            ],
            specs: {
                Weight: "132 [Kg]",
                Power: "60 [Hp]",
                Engine: "450CC KTM SX-F",
                Downforce: "1150 [N] at 80 [Km/h]",
            },
            features: [
                "Drexler Limited Slip Differential",
                "Titanium-welded uprights and differential mounts",
                "Electric gear shifting",
                "Rear wing drag reduction system",
                "Hydraulic anti-roll system",
            ],
            img_src: carDir + "ft19.jpg",
        },
        {
            title: "FT18C",
            description: `The FT18C is Formula Technion's sixth car. The car competed in Formula Student Austria and Formula Student Germany.`,
            achievements: [
                "Lightest winged car Formula Student Germany History (139kg)",
                "10th place Design Formula Student Austria",
                "12th place Autocross Formula Student Austria",
                "5th place Business Formula Student Germany",
            ],
            specs: {
                Weight: "139 [Kg]",
                Power: "60 [Hp]",
                Engine: "450CC Modified KTM EXC-F",
                Downforce: "1100 [N] at 80 [Km/h]",
            },
            features: [
                "Drexler Limited Slip Differential",
                "Titanium-welded uprights and differential mounts",
                "Mono-brake",
            ],
            img_src: carDir + "ft18.jpg",
        },
        {
            title: "FT2017",
            description: `The 2017 Formula car is a dramatic upgrade of Technion’s car that competed in Europe in 2016. Amongst other improvements, the pneumatic transmission system was replaced with an electric one, the weight of the car dropped from 255 kg to 175 kg, and the engine was replaced by a single-cylinder KTM engine.`,
            achievements: ["FS Austria: 8th place"],
            specs: {
                Weight: "175 [Kg]",
                Engine: "Single-Cylinder KTM",
            },
            features: [
                "Active Suspension System",
                "Pnuematic Transmission System",
            ],
            img_src: carDir + "ft17.jpg",
        },
        {
            title: "FT2016",
            description: ``,
            achievements: [],
            specs: {
                Weight: "255 [Kg]",
                Power: "80 [Hp]",
                Engine: "Suzuki GSX-R600 4-Cylinder",
            },
            features: [
                "3D Printed Instrument Panel",
                "Electro-Pnuematic Gear Shifting System",
                "Adjustible Anti-roll bar",
                "Custom Carbon-Fibre Seat",
            ],
            img_src: carDir + "ft16.png",
        },
        {
            title: "FT2015",
            description: ``,
            achievements: [],
            specs: {
                Weight: "255 [Kg]",
                Power: "80 [Hp]",
                Engine: "Suzuki GSX-R600 4-Cylinder",
            },
            features: [
                "Zm21-F Magnesium A-arms",
                "Electro-Pnuematic Gear Shifting System",
                "Drexler Limited Slip Differentiall",
                "Custom Carbon-Fibre Seat",
            ],
            img_src: carDir + "ft15.jpg",
        },
        {
            title: "FT2014",
            description: ``,
            achievements: [],
            specs: {
                Weight: "255 [Kg]",
                Power: "80 [Hp]",
                Engine: "Suzuki GSX-R600 4-Cylinder",
            },
            features: [],
            img_src: carDir + "ft14.jpg",
        },
        {
            title: "FT2013",
            description: ``,
            achievements: [],
            specs: {
                Weight: "255 [Kg]",
                Power: "80 [Hp]",
                Engine: "Suzuki GSX-R600 4-Cylinder",
            },
            features: [],
            img_src: carDir + "ft13.jpg",
        },
    ];
    //let carousel;
    let scroller;
    let scrollWidth;
    let x;
    function navto(index) {
        const screen_size = scrollWidth / cars.length;
        scroller.scroll({ left: index * screen_size, behavior: "smooth" });
    }
    function parseScroll() {
        x = scroller.scrollLeft;
        scrollWidth = scroller.scrollWidth;
    }
    onMount(() => parseScroll());
</script>

<svelte:head>
    <title>Cars</title>
</svelte:head>
<div class="h-screen w-screen relative flex justify-center">
    <div
        class="overflow-x-scroll overflow-y-hidden overflow-scroll flex flex-row scroll-snap snap-x snap-mandatory hidescroll"
        bind:this={scroller}
        on:scroll={parseScroll}
    >
        {#each cars as car}
            <div class="snap-center snap-always">
                <Car data={car} />
            </div>
        {/each}
    </div>
    <div class="h-screen flex items-center justify-center absolute left-0 z-10">
        <button
            class="w-fit hover:cursor-pointer p-0"
            on:click={() => {
                const ind =
                    x < 10
                        ? cars.length - 1
                        : (x * cars.length) / scrollWidth - 1;
                navto(ind);
            }}
        >
            <Chevrondoubleleft />
        </button>
    </div>
    <div class="flex items-center justify-center absolute h-screen right-0">
        <button
            class="hover:cursor-pointer p-0"
            on:click={() => {
                const ind =
                    x + scrollWidth / cars.length > scrollWidth - 10
                        ? 0
                        : (x * cars.length) / scrollWidth + 1;
                navto(ind);
            }}
        >
            <Chevrondoubleright />
        </button>
    </div>
    <div
        class="z-10 absolute opacity-50 bottom-3.5 custom-dots z-20 flex flex-row opacity-70 gap-0.5 items-center rounded-full overflow-hidden"
    >
        <div
            class="bg-white w-8 h-2 scrollbar absolute"
            style="--scrolled:{(272 * x) / scrollWidth}px"
        ></div>
        {#each [...Array(cars.length).keys()] as index}
            <button
                class="bg-black"
                on:click={() => {
                    navto(index);
                }}
            >
                <div class="w-8 h-2"></div>
            </button>
        {/each}
    </div>
</div>

<style>
    .scrollbar {
        transform: translateX(var(--scrolled));
    }
    .hidescroll::-webkit-scrollbar {
        display: none;
    }
</style>
