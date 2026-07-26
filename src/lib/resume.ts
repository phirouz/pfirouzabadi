export const profile = {
  name: "Seyed-Parsa Firouzabadi",
  role: "Electrical Engineering Student & AI Developer",
  email: "seyed-parsa.firouzabadi@gmail.com",
  linkedin: "https://linkedin.com/in/seyed-parsa-firouzabadi",
  location: "Toronto, Canada",
};

export const aboutMe = `I'm a third-year Electrical Engineering student at York University's Lassonde School of Engineering, currently on a 16-month co-op placement at Aecon Group as an AI Developer, where I build agents and automation tools using Microsoft Copilot Studio, Azure AI Foundry, and Python.

My background spans both hardware and software. I've worked on embedded systems and PCB design as a Research Assistant on York's Robot Tutor Project, and I've built full-stack applications integrating AI APIs for tasks like automated job search and enterprise AI adoption tracking. My coursework and personal projects cover signal processing, power systems analysis, and digital logic design, alongside practical experience in Python, MATLAB, and FastAPI.

Outside of technical work, I serve as Finance at Large for the Lassonde Engineering Society, managing budget allocation and proposal review for York's engineering clubs.

I'm graduating in 2028 and looking to keep building at the intersection of electrical engineering and applied AI.`;

export const education = [
  {
    school: "York University, Lassonde School of Engineering",
    degree: "BEng in Electrical Engineering",
    period: "Sep 2023 – Present",
    detail: "Expected graduation: 2028",
    coursework: [
      "Electronic Circuits and Devices",
      "Digital Logic Design",
      "Signals and Systems",
      "Introduction to Machine Learning",
      "Introduction to Power Systems",
      "Power Systems Analysis Laboratory",
      "Introduction to Embedded Systems",
      "Linear Control Systems",
    ],
  },
];

export const experience: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  tools?: string[];
}[] = [
  {
    role: "AI Solutions Developer (Co-op)",
    org: "Aecon Group",
    period: "16-month co-op placement",
    bullets: [
      "Design, build, and deploy AI agents and automation solutions for internal teams across the company, translating department-specific requests into working tools.",
      "Delivered custom Retrieval-Augmented Generation (RAG) based agents for internal stakeholders, including the nuclear section, to support automated information retrieval and workflow needs.",
      "Built and shipped solutions end-to-end, from requirements gathering to deployment, using Microsoft Copilot Studio, Azure AI Foundry, and Python.",
    ],
    tools: ["Microsoft Copilot Studio", "Azure AI Foundry", "Python"],
  },
  {
    role: "Finance at Large",
    org: "York University Engineering Society (LES)",
    period: "Sep 2024 – Present",
    bullets: [
      "Developed and maintained budget tracking systems in Microsoft Excel and Google Sheets, supporting allocation decisions on over $1,000 per week across York's engineering clubs and organizations.",
      "Prepared approximately 18 formal budget proposals over 2 semesters, reviewed and voted on in weekly executive meetings attended by up to 20 board members.",
      "Facilitated structured weekly meetings with 4+ members to assess financial standing, evaluate funding requests, and contribute to executive-level decisions.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Robot Tutor Project, York University",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Integrated hardware components and fabricated PCB layouts for a 7-member team, interfacing a Raspberry Pi and Arduino Nano on a custom board for a social tutoring robot.",
      "Established Ethernet connectivity for the Raspberry Pi to ensure stable communication between the robot's onboard software and the host system, resolving reliability issues encountered with wireless networking.",
      "Documented project records across 10 pages of structured hardware revision documentation, ensuring research continuity across development cycles.",
      "Engineered capacitive touch sensor integration achieving a response time under 1.5 seconds, validated across 30 user test sessions with 30 participants.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Technical",
    skills: [
      "Python",
      "MATLAB",
      "SQL",
      "Git",
      "FastAPI",
      "JavaScript",
      "C",
      "Java",
      "C#",
      "Verilog",
      "Embedded Systems",
      "Embedded Linux",
      "Arduino",
      "AutoCAD",
      "Altium Designer",
      "LTspice",
      "PSpice",
    ],
  },
  {
    label: "AI & Automation",
    skills: [
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "LLM API Integration",
      "OpenAI API",
      "Microsoft Copilot Studio",
      "Azure AI Foundry",
    ],
  },
  {
    label: "Microsoft & Enterprise Tools",
    skills: ["Microsoft 365", "Power BI", "Advanced Excel"],
  },
  {
    label: "Data & Reporting",
    skills: ["Data Analysis", "Data Visualization", "Process Analysis"],
  },
];

export type Project = {
  title: string;
  date: string;
  description: string;
  bullets: string[];
  tags: string[];
  kind?: "award";
};

export const projects: Project[] = [
  {
    title: "AI-Powered Job Search Application",
    date: "2026",
    description:
      "A full-stack local web app that automates job discovery, normalization, and cover letter generation across enterprise ATS platforms.",
    bullets: [
      "Built a full-stack local web application integrating the OpenAI API to automate job discovery, normalization, and cover letter generation across enterprise ATS platforms including Greenhouse, Lever, and Workday.",
      "Implemented a modular connector pipeline in Python (FastAPI) with per-connector rate limiting, retry logic, failure classification, and health monitoring, enabling reliable multi-source job ingestion.",
      "Developed a resume recommendation scoring layer that matches job requirements to candidate profiles and generates human-readable recommendation reasons, displayed in a Next.js dashboard.",
      "Built a LaTeX-based cover letter export pipeline with editable prompt and style settings, structured field mapping, and optional PDF compilation, backed by a SQLite persistence layer.",
    ],
    tags: ["Python", "FastAPI", "OpenAI API", "Next.js", "SQLite", "LaTeX"],
  },
  {
    title: "AI Copilot Adoption & Governance Dashboard",
    date: "2026",
    description:
      "An AI-enabled dashboard tracking enterprise AI tool adoption, usage trends, and governance across departments.",
    bullets: [
      "Built an AI-enabled dashboard to track, analyze, and visualize enterprise AI tool adoption using Microsoft Graph API, covering usage metrics, feature engagement, and user feedback signals across departments.",
      "Developed Python data pipelines to process and structure usage logs, enabling trend analysis and anomaly detection to identify low-engagement teams and underutilized features.",
      "Integrated OpenAI API to generate automated weekly adoption reports in plain English, delivering actionable recommendations for non-technical stakeholders.",
      "Designed a governance tracking system to support access reviews, policy alignment, and feature rollout documentation.",
    ],
    tags: ["Python", "OpenAI API", "Microsoft Graph API", "Data Pipelines"],
  },
  {
    title: "Distribution Network Design & Power Flow Analysis",
    date: "Apr 2026",
    description:
      "A 5-bus electrical distribution network with Newton-Raphson load flow and three-phase fault analysis, automated in MATLAB.",
    bullets: [
      "Designed a 5-bus electrical distribution network and implemented Newton-Raphson load flow analysis, computing bus voltages, power losses, and line flows across all nodes.",
      "Performed three-phase fault analysis at multiple buses, calculating fault currents and voltage deviations to assess system stability and protection requirements.",
      "Automated Ybus formation and iterative convergence using MATLAB scripts, reducing analysis time by 60%.",
    ],
    tags: ["MATLAB", "Power Systems", "Load Flow Analysis", "Fault Analysis"],
  },
  {
    title: "Power System Protection & Equipment Sizing for Industrial Facility",
    date: "Apr 2026",
    description:
      "Electrical distribution system design for an industrial facility, including protection device selection and short-circuit analysis.",
    bullets: [
      "Designed electrical distribution system for an industrial facility, including transformer sizing, cable selection, and load allocation across multiple buses.",
      "Calculated short-circuit currents at key system nodes and selected protective devices (breakers/fuses) to ensure safe fault interruption.",
      "Produced detailed single-line diagram and engineering calculations reflecting real-world system constraints and safety requirements.",
    ],
    tags: ["MATLAB", "Power System Protection", "Short-Circuit Analysis"],
  },
  {
    title: "Digital Signal Processing Project",
    date: "Dec 2025",
    description:
      "A 20-tap FIR bandpass filter and cascaded IIR notch filters designed to remove tonal noise from audio signals.",
    bullets: [
      "Designed a 20-tap bandpass FIR filter (1500–2000 Hz passband) using the Parks-McClellan equiripple method, meeting stopband attenuation limits of 0.01 and 0.001.",
      "Performed magnitude, phase, and spectral analysis across a 4096-point FFT grid to verify linear-phase behavior and ripple constraints across all 3 frequency bands.",
      "Removed 2 tonal noise components at 1102.5 Hz and 2756.3 Hz using cascaded IIR notch filters (Q=35) and FFT bin zeroing (±40 Hz), producing 2 cleaned audio outputs.",
    ],
    tags: ["MATLAB", "Digital Signal Processing", "FIR/IIR Filters", "FFT"],
  },
  {
    title: "FPGA-Based Password Lock System",
    date: "Apr 2025",
    description:
      "A 4-digit Verilog password lock system with FSM architecture, simulated and deployed on FPGA hardware.",
    bullets: [
      "Implemented a 4-digit Verilog-based password lock using FSM architecture with 3 modes: login, change-password, and lockout.",
      "Interfaced 5 switches, 2 push-buttons, 2 LEDs, and 6 seven-segment displays with FPGA I/O pins.",
      "Simulated all modes in ModelSim and deployed on FPGA board, verifying correct input/output behavior.",
    ],
    tags: ["Verilog", "FPGA", "ModelSim", "FSM Design"],
  },
  {
    title: "Winner — York Engineering Competition (YEC), Senior Design",
    date: "Oct 2025",
    description:
      "Control system for a real-world air conditioner prototype, ported from ESP32 to STM32 for enhanced performance.",
    bullets: [
      "Engineered the control system for a real-world air conditioner prototype using ESP32, custom circuits, thermoelectric cooler and Arduino firmware, later porting the firmware to STM32 for enhanced performance.",
    ],
    tags: ["ESP32", "STM32", "Arduino", "Embedded Systems"],
    kind: "award",
  },
  {
    title: "Winner — York Engineering Competition (YEC), Programming",
    date: "Oct 2024",
    description:
      "A data-driven web application to analyze and optimize traffic flow using real-time input and automated data processing.",
    bullets: [
      "Built a data-driven web application to analyze and optimize traffic flow using real-time user input, automated data processing, and an interactive dashboard interface.",
    ],
    tags: ["Data Analysis", "Web Application", "Dashboard"],
    kind: "award",
  },
];
