<svelte:head>
	<title>FORMULA STUDENT COMPETITION</title>
</svelte:head>

<div class="p-16 pt-40 max-sm:p-4 max-sm:pt-20 picture">
    <div class='w-full h-full bg-black bg-opacity-60 p-6 rounded-xl'>
        <div class="text-3xl bigtitle">THE FORMULA STUDENT COMPETITION</div>
        <div class="smalltitle">WHAT IS IT?</div>
        <div>
            <p class="">
                When you ask an engineering student "What have you done
                throughout the 4 years of your studies," most will answer
                "Equations." This results in a scenario where even the most
                accomplished students felt clueless and inexperienced upon
                entering the competitive job market. In the beginning of the
                1980's the SAE (Society of Automotive Engineers) devised a
                solution. Groups of Mechanical\Automotive Engineering students
                from all over the world will DESIGN, BUILD and RACE a formula
                style (open wheel) vehicle.
            </p>
            <p>
                With a history spanning over 35 years, the competition has
                expanded significantly. Currently, there are over 600 ranked
                teams globally, and competitions take place on every continent:
                9 in Europe, 4 in North America, as well as in Japan, China,
                India, Brazil, and even in Australia down under.
            </p>
            <p class="">
                The competition challenges the teams in building a powerful,
                stable, reliable, safe and cost effective open wheel 'Formula'
                style race-car. The students are required to justify and explain
                their design to judges from all over the Automotive and
                Aerospace industry.
            </p>
        </div>
        <div class="smalltitle">HOW IS IT SCORED?</div>
        <div>
            <ul>
                Preliminary Safety Testing:
                <li>Technical & Safety Inspection</li>
                <li>Tilt Test</li>
                <li>Brake & Noise Test</li>
            </ul>
            <ul>
                Static events:
                <li>
                    Design (150 points) - Teams are required to justify their
                    design decisions to judges.
                </li>
                <li>
                    Cost (100 points) - A cost report must be generated to show
                    the cost effectiveness of the vehicle.
                </li>
                <li>
                    Presentation (75 points) -Teams are required to deliver a
                    business plan and convince potential investors to invest in
                    a fictional startup car manufacturing company.
                </li>
            </ul>
            <ul>
                Dynamic Events:
                <li>75 m Acceleration (100 points)</li>
                <li>Skid Pad (75 points)</li>
                <li>Autocross (125 points)</li>
                <li>22 km Endurance & Fuel Economy (275 + 100 points)</li>
            </ul>
        </div>
    </div>
</div>

<style>
    li {
        padding-left: 10px;
        list-style: disc inside;
    }
    p {
        padding-top: 20px;
    }
    p:first-child {
        padding-top:0
    }
    .smalltitle {
        font-size: 20px;
        padding: 20px;
    }
    ul {
        padding-bottom: 20px;
    }
    .picture {
        background-image: url("../src/lib/images/cars/competition-bg.jpg");
        background-size: cover;
        background-position: center;
    }
</style>
