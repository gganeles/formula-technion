export const DEFAULT_MEMBER_IMAGE = "/images/formula.png";

const teamDir = "/images/meet_the_team/webp/";

const photoFile = (fileName) => `${teamDir}${fileName}`;
const autoPhoto = (name) => `${teamDir}${name.replace(/[^A-Za-z0-9']/g, "")}.webp`;

// Add only exceptions here: names whose photo file does not exactly match NameWithoutSpaces.JPG.
const photoOverrides = {
    "Noor Kina'an": photoFile("NoorKina'an.webp"),
    "Gabriel Trostianecky": photoFile("GabrielTrostianecky.webp"),
    "Yara Abu Raiya": photoFile("YaraAbuRaya.webp"),
    "Mohammad Mrissat": photoFile("MohammadMrissat.webp"),
    "Abdalla Kananah": photoFile("Abdallakananah.webp"),
    "Faheem Knani": photoFile("Faheemknani.webp"),
};

const imagePositionOverrides = {
    "Jawad Soliman": "52% 50%",
    "Rama Khier": "37% 50%",
    "Ryan Fuda": "42% 50%",
    "Dima Farah": "51% 50%",
    "Hala Abd Halem": "30% 50%",
    "Noor Abd Elhamed": "42% 50%",
    "Mohammad Mrissat": "30% 50%",
    "Amjad Sadi": "52% 50%",
    "Shaurya Singh": "46% 50%",
    "Alisa Natapov": "45% 50%",
    "Eran Buhbut": "38% 50%",
    "Anthony Malshy": "36% 50%",
    "Nir Ashkenazi": "52% 50%",
    "Massad Ayoub": "49% 50%",
    "Daniel Veselov": "42% 50%",
    "Maxim Lyakhovitsky": "47% 50%",
    "Tal Zohar": "41% 50%",
    "Karam Qasim": "32% 50%",
    "Mansour Abu Khadra": "42% 50%",
    "Mika Tsukrel": "41% 50%",
    "Yahli Mendler": "38% 50%",
    "Abdalla Kananah": "50% 50%",
    "Daniel Arshavsky": "46% 50%",
    "Ahmad Kanjo": "48% 50%",
    "Noor Kina'an": "45% 50%",
    "Ori Gavish": "42% 50%",
    "Tomer Tsekhman": "47% 50%",
    "Daniel Tarasenko": "33% 50%",
    "Adi Atrash": "38% 50%",
    "Nicolas Galagovsky": "45% 50%",
    "Abrar Msarwe": "47% 50%",
    "Raghad Waked": "49% 50%",
    "Omri Haquin Gerade": "39% 50%",
    "Roaya Egbaria": "48% 50%",
    "Gabriel Trostianecky": "49% 50%",
    "Salih Bishara": "38% 50%",
    "Yara Abu Raiya": "47% 50%",
    "Paz Shpilman": "59% 50%",
    "Aseel Attaria": "50% 50%",
    "Rand Mahmoud": "41% 50%",
    "Layan Abu Elhija": "56% 50%",
    "Valerii Asonov": "47% 50%",
    "Maria Kruglov": "34% 50%",
    "Rahaf Abu Raiya": "29% 50%",
    "Shay Neuhaus": "43% 50%",
    "Seba Hamed": "20% 50%",
    "Xintong Chen": "34% 50%",
    "Faheem Knani": "49% 50%",
    "Shay Amsterdamer": "38% 50%",
    "Bishara Hakim": "38% 50%",
    "Gabriel Ganeles": "40% 50%",
    "Yehonatan Reuvene": "39% 50%",
    "Fady Mattar": "36% 50%",
    "Noam Yair Perlman": "52% 50%",
    "Oren Ghelerter": "48% 50%",
    "Eva Trope": "36% 50%",
    "Aleen Nijim": "38% 50%",
    "Yogev Kach": "36% 50%",
    "Malahi Grady": "38% 50%",
    "Ran Turgeman": "43% 50%",
    "Zijian Liu": "39% 50%",
};

const linkedinOverrides = {
    // Add LinkedIn links here only when available.
    // Example:
     "Mohammad Mrissat": "https://www.linkedin.com/in/mohammad-mrissat-ba5a6b315/",
     "Fady Mattar": "https://www.linkedin.com/in/fady-mattar/"


     
};

const member = (name, role = "Team Member", extra = {}) => ({
    name,
    role,
    picture_url: photoOverrides[name] ?? autoPhoto(name),
    linkedin_url: linkedinOverrides[name] ?? "",
    // This controls the crop/focus point of the image.
    // First value = horizontal focus. Smaller moves the photo right visually; larger moves it left visually.
    // Example values: "30% 50%", "50% 50%", "65% 50%".
    image_position: imagePositionOverrides[name] ?? "50% 50%",
    ...extra,
});

export const formulaLeader = member("Jawad Soliman", "Team Leader");

export const teamList = [
    {
        title: "Logistics, Operations & Marketing",
        description: "Sponsorship, logistics, operations, media, and website support.",
        teamLeaders: [
            member("Rama Khier", "Sponsorship & Marketing Leader"),
            member("Ryan Fuda", "Logistics Co-Leader"),
            member("Dima Farah", "Logistics Co-Leader"),
        ],
        teamMembers: [
            member("Hala Abd Halem", "Logistics"),
            member("Roba Fadool", "Logistics"),
            member("Orjwan Gamal", "Logistics"),
            member("Haneen Hanany", "Logistics"),
            member("Noor Abd Elhamed", "Media"),
            member("Mohammad Mrissat", "Website Developer"),
        ],
    },
    {
        title: "Mechanical",
        description: "Mechanical systems and vehicle structure.",
        teamLeaders: [member("Omry Tziperfal", "Mechanical Leader")],
        teamMembers: [
            member("Amjad Sadi", "Mechanical"),
            member("Rama Yassin", "Mechanical"),
        ],
    },
    {
        title: "Chassis",
        description: "Chassis and monocoque structure.",
        teamLeaders: [member("Shaurya Singh", "Chassis Team Leader")],
        teamMembers: [
            member("Alisa Natapov", "Chassis"),
            member("Salwa Hathout", "Chassis"),
            member("Eran Buhbut", "Monocoque"),
        ],
    },
    {
        title: "Suspension",
        description: "Suspension design and vehicle dynamics.",
        teamLeaders: [member("Anthony Malshy", "Suspension Team Leader")],
        teamMembers: [member("Nir Ashkenazi", "Suspension")],
    },
    {
        title: "Driver Interface",
        description: "Cockpit, driver controls, and interface systems.",
        teamLeaders: [member("Massad Ayoub", "Driver Interface / Mechanisms Leader")],
        teamMembers: [
            member("Yoel Goldberg", "Driver Interface"),
            member("Yarin Aunallah", "Driver Interface"),
            member("Daniel Veselov", "Driver Interface"),
            member("Maxim Lyakhovitsky", "Driver Interface"),
            member("Tal Zohar", "Mechanisms"),
        ],
    },
    {
        title: "Drivetrain, Accumulator & Cooling",
        description: "Powertrain, energy storage, and thermal systems.",
        teamLeaders: [],
        teamMembers: [
            member("Karam Qasim", "Drivetrain"),
            member("Mansour Abu Khadra", "Drivetrain"),
            member("Mika Tsukrel", "Accumulator"),
            member("Yahli Mendler", "Accumulator"),
            member("Abdalla Kananah", "Accumulator"),
            member("Daniel Arshavsky", "Cooling"),
            member("Ahmad Kanjo", "Cooling"),
        ],
    },
    {
        title: "Aerodynamics",
        description: "Aero package, wings, undertray, and CFD work.",
        teamLeaders: [
            member("Noor Kina'an", "Aerodynamics / Undertray Lead"),
            member("Rani Bassal", "Aerodynamics / Front Wing Lead"),
        ],
        teamMembers: [
            member("Ori Gavish", "Aerodynamics"),
            member("Tomer Tsekhman", "Aerodynamics"),
            member("Daniel Tarasenko", "Aerodynamics"),
            member("Adi Atrash", "Aerodynamics"),
            member("Nour Nasrallah", "Aerodynamics"),
            member("Nicolas Galagovsky", "Undertray"),
            member("Abrar Msarwe", "Aerodynamics"),
            member("Raghad Waked", "Aerodynamics"),
            member("Omri Haquin Gerade", "Aerodynamics"),
            member("Roaya Egbaria", "Aerodynamics"),
            member("Gabriel Trostianecky", "Aerodynamics"),
            member("Milan Gershkovitch", "Aerodynamics"),
            member("David Turgeman", "Aerodynamics"),
        ],
    },
    {
        title: "Electrical",
        description: "Electronics, low voltage, high voltage, control, and communication.",
        teamLeaders: [
            member("Salih Bishara", "Electrical Control Leader"),
            member("Yara Abu Raiya", "Low Voltage Leader"),
            member("Paz Shpilman", "High Voltage Team Leader"),
        ],
        teamMembers: [
            member("Aseel Attaria", "Electronics"),
            member("Rand Mahmoud", "Electronics"),
            member("Layan Abu Elhija", "Electronics"),
            member("Raghad Khaleel", "Electrical"),
            member("Valerii Asonov", "High Voltage"),
            member("Maria Kruglov", "High Voltage"),
            member("Rahaf Abu Raiya", "High Voltage"),
            member("Shay Neuhaus", "Control"),
            member("Seba Hamed", "Control"),
            member("Xintong Chen", "Control"),
            member("Faheem Knani", "Control & Communication"),
            member("Shay Amsterdamer", "Control"),
        ],
    },
    {
        title: "Autonomous",
        description: "Autonomous software, perception, planning, control, and vehicle integration.",
        teamLeaders: [
            member("Bishara Hakim", "Autonomous Co-Leader"),
            member("Gabriel Ganeles", "Autonomous Co-Leader"),
        ],
        teamMembers: [
            member("Yehonatan Reuvene", "Autonomous"),
            member("Fady Mattar", "perception"),
            member("Mohammad Mrissat", "Autonomous Framework Integration"),
            member("Noam Yair Perlman", "Autonomous"),
            member("Oren Ghelerter", "Autonomous"),
            member("Eva Trope", "Autonomous"),
            member("Aleen Nijim", "Autonomous Framework Integration"),
            member("Yogev Kach", "Integration"),
            member("Malahi Grady", "Integration"),
        ],
    },
    {
        title: "General / Unassigned",
        description: "Members listed in the file without a clear team assignment.",
        teamLeaders: [],
        teamMembers: [
            member("Ran Turgeman"),
            member("Zijian Liu"),
        ],
    },
];
