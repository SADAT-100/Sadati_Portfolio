/* ==========================================================================
   PORTFOLIO DATA  ·  the only file you need to edit for everyday updates
   --------------------------------------------------------------------------
   Every section of the site is rendered from this object. To add a project,
   document, certificate, activity or role, copy an existing entry, paste it
   below and change the values. No HTML editing needed.

   Conventions used throughout:
   - status:   "live" | "completed" | "in-progress" | "coming-soon" | "placeholder"
   - file:     a path inside the site folder, e.g. "x.pdf" (all files sit in one folder).
               Leave it as null until the file really exists. Entries without
               a file never show a Download button.
   - links:    leave a URL as "" (empty) and the button is simply not shown.
   - placeholder: true  marks an entry as editable sample content. It is
               visibly labelled on the site so visitors are never misled.
   ========================================================================== */

window.PORTFOLIO = {
  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: "Sadati Fred Mwasongwe",
    firstName: "Sadati",
    monogram: "SFM",
    role: "Biomedical Engineer · E-commerce Manager & Reports Specialist",
    location: "Open to roles worldwide · remote or on-site",
    // Replace this image file (profile.jpg) to change your portrait (square, at least 800×800).
    // If the file is missing, an animated monogram is shown instead.
    portrait: "profile-portrait.jpg",
    portraitAlt: "Portrait of Sadati Fred Mwasongwe",
    // Availability badge is OFF by default. Set show: true only when it is true.
    availability: { show: true, label: "Open to biomedical and e-commerce roles" },
    statement:
      "A biomedical engineer and e-commerce specialist open to biomedical roles and to e-commerce roles in channel and account management, reporting and data entry, remote or on-site.",
  },

  /* ----------------------------------------------------------------- RESUME */
  // The downloadable PDF and the web resume (resume.html) are independent:
  // replace the PDF without touching the site, or edit the web version below.
  resume: {
    file: "resume.pdf",
    fileName: "Sadati_Mwasongwe_Resume.pdf",
    size: "184 KB",
    version: "October 2026",
    webVersion: "resume.html",
    // Image of page 1 shown in the resume panel. Regenerate it when you replace the PDF (see README).
    preview: "resume-preview.jpg",
    // Summary used at the top of the web resume (resume.html).
    summary:
      "Biomedical Engineering graduate (CGPA 4.28/5.0) with hands-on hospital experience in preventive and corrective maintenance, electrical safety testing and calibration of critical care equipment, plus exposure to radiotherapy systems (LINAC and brachytherapy). Trained at King Abdulaziz University Hospital and currently E-commerce Manager & Reports Specialist at Inhouse & Back Comfort. Registered Graduate Engineer with ERB Tanzania. Open to biomedical engineering roles and to e-commerce roles in channel and account management, reporting and data entry, remote or on-site. Detail-oriented, quick to learn and comfortable with procurement, ERP systems and AI-assisted reporting.",
  },

  /* ------------------------------------------------------------------- HERO */
  hero: {
    eyebrow: "Portfolio · Biomedical & E-commerce",
    title: "Biomedical engineer and e-commerce specialist, ready to be hired.",
    intro:
      "I'm Sadati Fred Mwasongwe, a biomedical engineering graduate from King Abdulaziz University with hospital training in clinical equipment. Today I work as E-commerce Manager & Reports Specialist at Inhouse & Back Comfort, where I also build the websites and reporting tools our team uses. I'm open to biomedical engineering roles and to e-commerce roles in channel and account management, reporting and data entry.",
    // Chips under "What I work on" on the home page.
    focus: ["Clinical engineering", "Medical equipment maintenance", "Healthcare technology", "E-commerce management", "Channel & account management", "Sales & operations reporting", "Data entry", "Websites & dashboards", "AI-assisted automation"],
    // "What I bring to a team" checklist on the home page.
    strengths: [
      "Hands-on hospital training in PPM, calibration and electrical safety testing of critical care equipment.",
      "Daily experience running online sales channels, pricing, procurement and CRM.",
      "Clear weekly reports and dashboards that turn sales and operations data into decisions.",
      "I build my own tools: careers portal, reporting portals and learning sites.",
    ],
    // Status card shown beside the photo and at the bottom of the menu.
    spotlight: {
      k: "Open to work",
      label: "Biomedical & e-commerce roles",
      line: "Ready to be hired",
      roles: ["Biomedical engineering", "Channel & account management", "Reporting", "Data entry"],
    },
  },

  /* ---------------------------------------------------------------- CONTACT */
  contact: {
    email: "sadatimalk50@gmail.com",
    location: "Open to roles worldwide · remote or on-site",
    // Phone is hidden by default for privacy. Set show: true to display it.
    phone: { value: "+966 50 259 6568", show: false },
    // Paste the Google Apps Script web app URL (ends in /exec) here and the
    // form emails you directly. Empty = the form opens the visitor's email
    // app instead. Setup steps: README, "Contact form".
    formEndpoint: "https://script.google.com/macros/s/AKfycbwQXaO_uWnxBIjcckJsg9IErAe09ze8cemYtFVMGjL4PItSFGXJZESBcsWjeylTE0pSOQ/exec",
  },

  social: [
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/sadati50" },
    { label: "GitHub", icon: "github", url: "https://github.com/SADAT-100" },
    { label: "Email", icon: "mail", url: "mailto:sadatimalk50@gmail.com" },
  ],

  /* ------------------------------------------------------------------ ABOUT */
  about: {
    lead:
      "I'm a biomedical engineer with hospital training at King Abdulaziz University Hospital, and I'm open to both biomedical engineering roles and e-commerce roles, including channel and account management, reporting and data entry, remote or on-site. My degree focused on medical instrumentation, clinical engineering and healthcare technology management. Today I work as E-commerce Manager & Reports Specialist at Inhouse & Back Comfort, which keeps me close to pricing, procurement, CRM and the reports behind a commercial operation.",
    facets: [
      {
        icon: "pulse",
        title: "Clinical engineering",
        text:
          "BSc in Biomedical Engineering (CGPA 4.28/5.0) from King Abdulaziz University. Hospital experience in preventive and corrective maintenance, calibration and electrical safety testing of critical care equipment, and ready for a biomedical or clinical engineering role.",
      },
      {
        icon: "cart",
        title: "E-commerce & marketplace",
        text:
          "Managing online sales channels, pricing and operational issues, and supporting procurement, inventory, warehouse, factory and customer-support workflows, including work in ERPNext and spreadsheets.",
      },
      {
        icon: "bot",
        title: "Technology & automation",
        text:
          "Building AI-assisted dashboards to track marketplace performance and bottlenecks, setting up workflow automation, and a growing interest in cybersecurity.",
      },
      {
        icon: "spark",
        title: "Problem-solving philosophy",
        text:
          "Measure first, then fix. Whether it is a ventilator on a PPM schedule or a sales channel losing margin, I look for the data, find the bottleneck and make the process repeatable.",
      },
      {
        icon: "compass",
        title: "Where I'm heading",
        text:
          "Open to biomedical engineering roles (clinical engineering, radiotherapy systems, medical procurement) and to e-commerce roles in channel and account management, reporting and data entry. Remote or on-site, in any country.",
      },
    ],
  },

  languages: [
    { name: "Swahili", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Arabic", level: "Intermediate, conversational" },
  ],

  education: [
    {
      degree: "Bachelor of Science in Electrical Engineering (Biomedical)",
      school: "King Abdulaziz University",
      location: "Jeddah",
      dates: "Jan 2019 – Apr 2025",
      detail: "CGPA 4.28 / 5.0 (Very Good) · Medical Instrumentation, Clinical Engineering, Healthcare Technology Management. Recognised in Tanzania by TCU.",
    },
  ],

  /* "Explore My Journey" timeline. Add milestones in date order. */
  journey: [
    { date: "2019", title: "Began BSc at King Abdulaziz University", text: "Electrical Engineering (Biomedical)." },
    { date: "2024 – now", title: "E-commerce & reporting role", text: "E-commerce Manager & Reports Specialist at Inhouse & Back Comfort (current)." },
    { date: "Jan 2025", title: "Hospital engineering training", text: "Biomedical Engineering Trainee at King Abdulaziz University Hospital." },
    { date: "2025", title: "Graduated", text: "BSc Electrical Engineering (Biomedical), CGPA 4.28 / 5.0." },
    { date: "Sep 2025", title: "Degree recognised in Tanzania", text: "TCU recognition of award for the BSc Electrical Engineering (Biomedical)." },
    { date: "Feb 2026", title: "Registered Graduate Engineer", text: "Engineers Registration Board (ERB) Tanzania, Electrical Engineering (Biomedical)." },
    { date: "Today", title: "Ready to be hired", text: "Open to biomedical engineering roles and e-commerce roles: channel and account management, reporting and data entry." },
  ],

  /* ------------------------------------------------------------- EXPERIENCE */
  experienceCategories: [
    "All",
    "E-commerce & Marketplace",
    "B2B & Commercial",
    "Biomedical Engineering",
    "Technical & Automation",
  ],

  experience: [
    {
      title: "E-commerce Manager & Reports Specialist",
      org: "Inhouse & Back Comfort",
      unit: "Commercial Operations",
      location: "",
      dates: "2024 – Present",
      current: true,
      type: "Part-time / Contract",
      categories: ["E-commerce & Marketplace", "B2B & Commercial", "Technical & Automation"],
      icon: "cart",
      summary: "Manages the online sales channels and produces the sales and operations reports the business runs on.",
      responsibilities: [
        "Managed online sales channels, pricing strategies and operational issues to support profitability and growth.",
        "Assisted with procurement and inventory management for a smooth, reliable supply chain.",
        "Developed automated dashboards using AI tools to track marketplace performance, sales reports and operational bottlenecks.",
        "Managed CRM systems and built strong working relationships with vendors and partners.",
      ],
      achievements: [],
      tools: ["Marketplace platforms", "CRM", "AI tools", "Dashboards"],
      logo: "",
      documents: [],
    },
    {
      title: "Biomedical Engineering Trainee",
      org: "King Abdulaziz University Hospital (KAUH)",
      unit: "Biomedical Engineering",
      location: "Jeddah",
      dates: "Jan 2025 – Mar 2025",
      type: "Training",
      categories: ["Biomedical Engineering"],
      icon: "pulse",
      summary: "Hospital-based training across clinical equipment, radiotherapy and utility systems.",
      responsibilities: [
        "Attended specialised sessions in the Radiotherapy Department with senior engineers, focusing on LINAC (linear accelerator) and brachytherapy systems.",
        "Assisted in preventive and corrective maintenance (PPM/CM) for ventilators, patient monitors, infusion pumps and ICU monitoring systems.",
        "Gained hands-on experience with hospital utility systems, including RO water treatment plants and operating-room devices.",
        "Performed electrical safety testing and calibration using Fluke electrical-safety analysers to support regulatory compliance.",
        "Rotated through ICUs, Radiology, Laboratory, CSSD, Outpatient clinics, Operating Rooms, Dialysis and medical gas systems, documented in a 41-page training report.",
      ],
      achievements: ["Awarded the KAUH Certificate of Completion in Clinical Engineering Training (19 Jan – 19 Mar 2025)."],
      tools: ["PPM / CM", "Calibration", "Fluke safety analysers", "LINAC", "Brachytherapy"],
      logo: "",
      documents: [],
    },
  ],

  /* ----------------------------------------------------------------- SKILLS */
  // level labels used: "Professional use", "Hands-on training", "Academic",
  // "Working knowledge", "Basics", "Learning". No percentages on purpose.
  skills: [
    {
      group: "Biomedical Engineering",
      icon: "pulse",
      blurb: "Clinical equipment care learned on hospital floors and in the lab.",
      items: [
        { name: "Preventive maintenance (PPM)", level: "Hands-on training" },
        { name: "Corrective maintenance (CM)", level: "Hands-on training" },
        { name: "Calibration & electrical safety testing", level: "Hands-on training" },
        { name: "Radiotherapy equipment (LINAC, brachytherapy)", level: "Hands-on training" },
        { name: "ICU & critical care equipment", level: "Hands-on training" },
        { name: "Clinical engineering", level: "Hands-on training" },
        { name: "Medical procurement basics", level: "Basics" },
      ],
    },
    {
      group: "E-commerce & Marketplace Operations",
      icon: "cart",
      blurb: "Keeping online channels priced, stocked and moving.",
      items: [
        { name: "Online marketplace management", level: "Professional use" },
        { name: "Pricing strategy", level: "Professional use" },
        { name: "Channel issue resolution", level: "Professional use" },
        { name: "Marketplace management systems", level: "Professional use" },
      ],
    },
    {
      group: "Business Operations",
      icon: "box",
      blurb: "The supply side: vendors, stock and the systems that track them.",
      items: [
        { name: "Procurement & inventory", level: "Professional use" },
        { name: "CRM systems", level: "Professional use" },
        { name: "ERPNext", level: "Working knowledge" },
        { name: "ClickUp", level: "Working knowledge" },
        { name: "Vendor & partner relations", level: "Professional use" },
      ],
    },
    {
      group: "Data Analysis & Reporting",
      icon: "chart",
      blurb: "Turning sales and operations data into decisions.",
      items: [
        { name: "Microsoft Excel (advanced)", level: "Professional use" },
        { name: "Google Sheets", level: "Working knowledge" },
        { name: "Dashboards & reporting", level: "Professional use" },
        { name: "Microsoft Project", level: "Working knowledge" },
        { name: "MATLAB", level: "Academic" },
      ],
    },
    {
      group: "Web Development & Programming",
      icon: "code",
      blurb: "Enough code to build tools, prototypes and this site.",
      items: [
        { name: "HTML & CSS", level: "Working knowledge" },
        { name: "JavaScript", level: "Working knowledge" },
        { name: "Python", level: "Basics" },
        { name: "C++ (Arduino / microcontrollers)", level: "Academic" },
      ],
    },
    {
      group: "AI-assisted Development & Automation",
      icon: "bot",
      blurb: "Using AI to move faster on technical and operational work.",
      items: [
        { name: "AI tools for technical problem-solving", level: "Professional use" },
        { name: "AI-built dashboards", level: "Professional use" },
        { name: "Workflow automation", level: "Working knowledge" },
        { name: "Advanced email automation", level: "Professional use" },
        { name: "AI & machine learning foundations", level: "Learning" },
      ],
    },
    {
      group: "Professional Communication",
      icon: "chat",
      blurb: "Working across teams, vendors and cultures.",
      items: [
        { name: "Team leadership", level: "Professional use" },
        { name: "Relationship building", level: "Professional use" },
        { name: "Cross-cultural collaboration", level: "Professional use" },
        { name: "Professional correspondence", level: "Professional use" },
        { name: "Reporting & dashboards", level: "Professional use" },
        { name: "Detail-oriented & fast learner", level: "Professional use" },
      ],
    },
  ],

  // Scrolling tool strip under the skills grid.
  toolbox: [
    "ERPNext", "Microsoft Excel", "Google Sheets", "ClickUp", "CRM",
    "MATLAB", "Python", "Arduino / C++", "HTML", "CSS", "JavaScript",
    "Fluke Safety Analysers", "AI Assistants",
  ],

  /* --------------------------------------------------------------- PROJECTS */
  projectCategories: [
    "All",
    "E-commerce & Operations",
    "Dashboards & Data Analytics",
    "Automation & Web Development",
    "Biomedical Engineering",
    "Electrical & Communications",
    "Research & Learning",
  ],

  projects: [
    {
      id: "stair-ramp",
      title: "Stair/Ramp Converter",
      category: "Biomedical Engineering",
      status: "completed",
      statusLabel: "Invention",
      cover: "stair-ramp.svg",
      overview: "An invention that converts stairs into a ramp, making steps passable for wheelchair users.",
      problem: "Stairs are a barrier for wheelchair users and people with limited mobility.",
      contribution: "Developed the Stair/Ramp Converter concept.",
      tools: ["Mechanical design", "Assistive technology"],
      gallery: [],
      links: { demo: "", repo: "" },
      documents: [],
    },
    {
      id: "smart-cane",
      title: "Smart Walking Stick",
      category: "Biomedical Engineering",
      status: "completed",
      statusLabel: "Academic project",
      cover: "smart-cane.svg",
      overview: "An assistive cane with ultrasonic sensors and haptic feedback for people with visual impairments.",
      problem: "Detecting obstacles early enough to move safely without sight.",
      contribution: "Developed the cane: ultrasonic obstacle sensing paired with haptic feedback to the user's hand.",
      tools: ["Ultrasonic sensors", "Haptic feedback"],
      gallery: [],
      links: { demo: "", repo: "" },
      documents: [],
    },
    {
      id: "health-monitor",
      title: "Integrated Health Monitoring System",
      category: "Biomedical Engineering",
      status: "completed",
      statusLabel: "Senior design project",
      cover: "health-monitor.svg",
      overview: "A chest-worn wearable that non-invasively monitors blood pressure, body temperature and blood glucose trends, and sends the readings to a mobile app. EE 499 senior design project, King Abdulaziz University, 2024.",
      problem: "Continuous monitoring of several vital signs usually needs separate, often invasive devices. The goal was one comfortable, low-cost wearable.",
      contribution: "Project leader, responsible for the circuit design and connections. Blood pressure was measured within ±7 mmHg and temperature within ±1 °C; glucose trends were estimated from breath acetone; battery life exceeded 48 hours, at a parts cost of 487 SAR.",
      tools: ["ESP32", "Arduino", "MAX30102 (PPG)", "AD8232 (ECG)", "DS18B20", "BME688", "Bluetooth", "Mobile app"],
      gallery: [{ src: "health-monitor-poster.jpg", caption: "Final project poster (Team 14), with Bland-Altman validation for male and female participants" }],
      links: { demo: "", repo: "" },
      documents: [{ title: "Project poster (PDF)", file: "health-monitor-poster.pdf", fileName: "Integrated_Health_Monitoring_System_Poster.pdf" }],
    },
    {
      id: "wifi",
      title: "Low-Cost Long-Range Wi-Fi System",
      category: "Electrical & Communications",
      status: "completed",
      statusLabel: "Engineering design project",
      cover: "wifi-antenna.jpg",
      overview: "An affordable outdoor system that carries Wi-Fi over long distances using a 24 dBi square-grid parabolic antenna, a Wi-Fi extender and low-cost RF parts. Introduction to Engineering Design II (IE 202), King Abdulaziz University, Fall 2023.",
      problem: "Outdoor and underserved areas often have no affordable way to get a strong, long-range Wi-Fi signal. The aim was a cheap system that people with little technical knowledge can set up.",
      contribution: "Member of a five-person team. We designed square-grid parabolic and Yagi antennas in SolidWorks, then built the system from a 24 dBi grid antenna, a Wi-Fi extender, N-type to SMA coaxial cable and a USB adapter. In speed and signal-strength tests, the laptop picked up many more networks after the system was connected, and download speed reached about 20 MB/s.",
      tools: ["Antenna design", "SolidWorks", "24 dBi parabolic antenna", "Yagi antenna", "Wi-Fi extender", "RF cabling", "Speed testing"],
      gallery: [{ src: "wifi-poster.jpg", caption: "Project poster, Fall 2023 (student ID numbers removed)" }],
      links: { demo: "", repo: "" },
      documents: [{ title: "Project poster (PDF)", file: "wifi-system-poster.pdf", fileName: "Low_Cost_Long_Range_WiFi_Poster.pdf" }],
    },
    {
      id: "fecpa",
      title: "FECPA — Full E-commerce Channels Performance Audit",
      category: "E-commerce & Operations",
      status: "completed",
      statusLabel: "Professional work",
      cover: "fecpa.svg",
      overview: "A structured audit framework for reviewing the performance of every online sales channel side by side.",
      problem: "Channel performance is scattered across marketplaces, making it hard to see where margin and volume are lost.",
      contribution: "Built the audit to compare each sales channel on performance and pinpoint where margin and volume were being lost.",
      tools: ["Spreadsheets", "Marketplace data", "Reporting"],
      gallery: [],
      links: { demo: "", repo: "" },
      documents: [],
    },
    {
      id: "ecom-dashboard",
      title: "E-commerce Performance Dashboard",
      category: "Dashboards & Data Analytics",
      status: "completed",
      statusLabel: "Professional work",
      cover: "dashboard.svg",
      overview: "AI-assisted dashboards tracking marketplace performance, sales reports and operational bottlenecks.",
      problem: "Sales and operations data lived in separate reports, so bottlenecks surfaced late.",
      contribution: "Developed automated dashboards with AI tools to track marketplace performance, sales reports and operational bottlenecks.",
      tools: ["AI tools", "Dashboards"],
      gallery: [],
      links: { demo: "", repo: "" },
      documents: [],
    },
  ],

  /* --------------------------------------------------------------- WEBSITES */
  // Websites I designed and built. `site` is the public link, `code` the
  // GitHub repository. Tools that hold company data are listed without a
  // public link (access: "internal") and are shown on request only.
  websites: [
    {
      id: "biomed-hub",
      title: "Biomedical Instrumentation Hub",
      kind: "Knowledge hub",
      icon: "pulse",
      summary: "A complete reference for medical equipment, organised by hospital department, for biomedical engineers from beginners to experts, in Tanzania and worldwide.",
      features: [
        "Every hospital department, with the medical devices used in each",
        "For each device: background, working principle, clinical uses, maintenance and major brands",
        "Clear images and labelled parts for every device",
        "Video demonstrations of operation, maintenance and medical parts",
        "Study materials for students, written to be referenced and cited",
      ],
      tech: ["Departments", "Devices", "Maintenance", "Videos", "Study notes"],
      access: "soon",
      links: { site: "", code: "" },
    },
    {
      id: "careers",
      title: "In-House Careers",
      kind: "Recruitment portal",
      thumb: "careers.jpg",
      summary: "Careers site where candidates apply to join the In-House & Back Comfort online channels team.",
      features: [
        "Welcome, About us, The role, Hiring process and FAQ pages",
        "Six-step application: details, experience, rated skills, written answers, CV upload, review",
        "Progress is saved on the device so applicants can finish later",
        "English and Arabic (right-to-left), light and dark mode",
      ],
      tech: ["HTML/CSS/JS", "Arabic RTL", "Google Apps Script"],
      access: "internal",
      links: { site: "", code: "" },
    },
    {
      id: "ielts",
      title: "IELTS 7+ Study Pack",
      kind: "Learning site",
      thumb: "ielts.jpg",
      summary: "Self-study site for reaching IELTS band 7+, built from the University of Queensland IELTS course on edX.",
      features: [
        "Listening module: 3 units and 23 lessons",
        "Quick self-check quizzes and marked multiple-choice practice",
        "Audio clips with spoken transcripts",
        "Progress tracking saved in the browser",
      ],
      tech: ["HTML/CSS/JS", "Audio", "Progress tracking"],
      access: "public",
      links: { site: "https://claude.ai/artifact/4F6sHkuHt8EHhecNQCEJHs", code: "" },
    },
    {
      id: "fecpa",
      title: "FECPA Audit Control Center",
      kind: "Audit tool",
      thumb: "",
      icon: "layers",
      summary: "Full E-commerce Channels Performance Audit: checks each marketplace channel manager's period report across 10 channels.",
      features: [
        "Checklist of 14 categories ranked Critical, Important and Supporting",
        "Completeness rings and a ready-for-final-review gate",
        "Financial inputs with automatic risk flags and a category margin table",
        "Issue log, meeting brief and a printable executive report",
      ],
      tech: ["HTML/CSS/JS", "Saved in browser", "Print report"],
      access: "internal",
      links: { site: "", code: "" },
    },
    {
      id: "extra",
      title: "Extra Channel Portal",
      kind: "Reporting portal",
      thumb: "",
      icon: "chart",
      summary: "Reporting portal for the In House store on the eXtra marketplace: sales, orders, payouts, fees, profit and loss, returns and delivery.",
      features: [
        "KPI overview and a waterfall from gross sales to gross profit",
        "Product and category tables with date-range filters",
        "Payout timeline, cash check and an editable P&L",
        "Upload new marketplace exports (.xlsx / .csv) to refresh it",
      ],
      tech: ["Chart.js", "SheetJS", "Light & dark"],
      access: "internal",
      links: { site: "", code: "" },
    },
    {
      id: "noon",
      title: "Noon Reports Portals",
      kind: "Reporting portal",
      thumb: "",
      icon: "chart",
      summary: "Noon KSA reporting for the In House Bulky and Courier accounts, as one combined portal and one portal per account.",
      features: [
        "Account picker for Bulky and Courier",
        "Sales, orders, products, categories, payments, fees, ads, returns and delivery",
        "Global search and month filter",
      ],
      tech: ["Chart.js", "Large embedded data", "Light & dark"],
      access: "internal",
      links: { site: "", code: "" },
    },
    {
      id: "hub",
      title: "Inhouse Marketplace Hub",
      kind: "Internal launcher",
      thumb: "",
      icon: "box",
      summary: "Central launcher for the team's internal portals: channel reports, daily report tracker, 2026 planner, operational issues and quarterly report submission.",
      features: [
        "One home for every marketplace report and task portal",
        "Daily report tracker and operational issues portal",
        "Quarterly (Q1–Q4) report submission",
      ],
      tech: ["Multi-page HTML", "Chart.js", "Arabic & English"],
      access: "internal",
      links: { site: "", code: "" },
    },
    {
      id: "whiskers",
      title: "Whiskers Media Team Hub",
      kind: "Team guide",
      thumb: "",
      icon: "users",
      summary: "One-page guide for an influencer and brand outreach team: who does what, the deal pipeline and the tools used.",
      features: [
        "Roles and responsibilities at a glance",
        "Five-step deal pipeline from finding leads to closing",
        "Shared sheets and inbox label rules",
      ],
      tech: ["Single HTML page"],
      access: "internal",
      links: { site: "", code: "" },
    },
  ],

  /* -------------------------------------------------------------- DOCUMENTS */
  documentCategories: [
    "All",
    "CV & Resume",
    "Academic Documents",
    "Certificates",
    "Engineering Reports",
    "Project Documentation",
    "Portfolio Case Studies",
    "Presentations",
    "Licences & Qualifications",
    "Other",
  ],

  // Only entries with a real `file` get Preview/Download. Private documents
  // (transcripts, IDs) should never be placed in the public site folder.
  documents: [
    {
      title: "Curriculum Vitae — Biomedical & E-commerce",
      description: "Two-page CV: education, hospital training, commercial operations, skills and achievements.",
      category: "CV & Resume",
      type: "PDF",
      file: "resume.pdf",
      size: "184 KB",
      version: "October 2026",
      link: "",
      featured: true,
    },
    {
      title: "Web Resume",
      description: "The same CV as a web page, formatted for reading on screen and printing.",
      category: "CV & Resume",
      type: "HTML",
      file: "resume.html",
      version: "Live",
    },
    {
      title: "Clinical Engineering Training Report",
      description: "41-page report from my training at King Abdulaziz University Hospital: ICUs, Radiology, Laboratory, CSSD, OPD, OR, Dialysis and medical gases, with equipment, maintenance and testing procedures.",
      category: "Engineering Reports",
      type: "PDF",
      file: "kauh-training-report.pdf",
      size: "2.5 MB",
      version: "2025",
    },
    {
      title: "ERB Certificate of Registration",
      description: "Graduate Engineer, Electrical Engineering (Biomedical), Engineers Registration Board Tanzania.",
      category: "Licences & Qualifications",
      type: "PDF",
      file: "erb-registration-certificate.pdf",
      size: "1 MB",
      version: "2026",
    },
    {
      title: "TCU Recognition of Award",
      description: "Tanzania Commission for Universities recognition of the BSc Electrical Engineering (Biomedical).",
      category: "Licences & Qualifications",
      type: "PDF",
      file: "tcu-recognition-certificate.pdf",
      size: "284 KB",
      version: "2025",
    },
    {
      title: "KAUH Training Certificate",
      description: "Certificate of Completion, Clinical Engineering Training, King Abdulaziz University Hospital.",
      category: "Certificates",
      type: "PDF",
      file: "kauh-training-certificate.pdf",
      size: "62 KB",
      version: "2025",
    },
    {
      title: "KAU Graduation Certificate",
      description: "Bachelor of Science in Electrical Engineering (Biomedical). Personal ID numbers are hidden in this copy.",
      category: "Academic Documents",
      type: "JPG",
      file: "kau-graduation-certificate.jpg",
      size: "250 KB",
      version: "2025",
    },
    {
      title: "Senior Design Poster · Integrated Health Monitoring System",
      description: "A0 poster for the EE 499 senior design project: design, sensors, calculations and Bland-Altman validation.",
      category: "Project Documentation",
      type: "PDF",
      file: "health-monitor-poster.pdf",
      size: "1.6 MB",
      version: "2024",
    },
    {
      title: "Project Poster · Low-Cost Long-Range Wi-Fi System",
      description: "A1 poster for the IE 202 engineering design project: antennas, build, test results and future improvements. Student ID numbers removed.",
      category: "Project Documentation",
      type: "PDF",
      file: "wifi-system-poster.pdf",
      size: "1.3 MB",
      version: "Fall 2023",
    },
  ],

  /* ----------------------------------------------------------- CERTIFICATES */
  certificateCategories: ["All", "Awards", "Academic", "Training", "Online Courses", "Licences & Qualifications"],

  certificates: [
    {
      title: "Certificates of Excellence (×3)",
      issuer: "Academic excellence · BSc Biomedical Engineering",
      date: "",
      category: "Academic",
      icon: "award",
      description: "Three certificates for outstanding academic performance, with consecutive semester GPA above 4.5 / 5.0.",
      image: "",
      verifyUrl: "",
    },
    {
      title: "Certificate of Registration · Graduate Engineer",
      issuer: "Engineers Registration Board (ERB), Tanzania",
      date: "Registered Feb 2026 · valid to Feb 2029",
      category: "Licences & Qualifications",
      icon: "award",
      description: "Registered as a Graduate Engineer (Trainee Engineer) in Electrical Engineering (Biomedical).",
      image: "erb-registration-certificate.jpg",
      file: "erb-registration-certificate.pdf",
    },
    {
      title: "Recognition of Award",
      issuer: "Tanzania Commission for Universities (TCU)",
      date: "September 2025",
      category: "Licences & Qualifications",
      icon: "award",
      description: "Recognises the KAU degree in Tanzania as a Bachelor of Science in Electrical Engineering (Biomedical), GPA 4.28 / 5.00.",
      image: "tcu-recognition-certificate.jpg",
      file: "tcu-recognition-certificate.pdf",
    },
    {
      title: "Graduation Certificate · BSc",
      issuer: "King Abdulaziz University",
      date: "2025",
      category: "Academic",
      icon: "cap",
      description: "Bachelor of Science, Faculty of Engineering, in Electrical Engineering (Biomedical), GPA 4.28, Very Good. ID numbers are hidden in this copy.",
      image: "kau-graduation-certificate.jpg",
      file: "",
    },
    {
      title: "Clinical Engineering Training",
      issuer: "King Abdulaziz University Hospital (KAUH)",
      date: "19 Jan – 19 Mar 2025",
      category: "Training",
      icon: "pulse",
      description: "Certificate of Completion: three months of hands-on work with clinical equipment, maintenance procedures and safety protocols across hospital departments.",
      image: "kauh-training-certificate.jpg",
      file: "kauh-training-certificate.pdf",
    },
    {
      title: "Python Basics",
      issuer: "University of Michigan · Coursera",
      date: "December 2024",
      category: "Online Courses",
      icon: "code",
      description: "Online course certificate covering Python fundamentals. Coursera has confirmed the learner's identity and participation.",
      image: "python-basics-certificate.jpg",
      file: "python-basics-certificate.pdf",
      verifyUrl: "https://coursera.org/verify/DUCAQOUT65DE",
    },
  ],

  /* ------------------------------------------------------------- ACTIVITIES */
  activityTypes: ["All", "Reporting", "B2B & CRM", "Exhibitions", "Learning", "Programs", "Research", "Projects"],

  activities: [
    {
      type: "Reporting",
      title: "Multi-channel reporting & data analysis",
      org: "Inhouse & Back Comfort",
      date: "",
      status: "in-progress",
      statusLabel: "Ongoing",
      text: "I collect the raw data from every sales channel (eXtra, noon, Trendyol, Amazon and others), turn it into spreadsheet dashboards and web-page dashboards, and make sure each channel reports daily. Reporting and data analysis are the part of the job I enjoy most.",
      link: "",
    },
    {
      type: "B2B & CRM",
      title: "Alibaba B2B account management",
      org: "Inhouse & Back Comfort",
      date: "",
      status: "completed",
      statusLabel: "Account manager",
      text: "Managed the company's Alibaba.com B2B account. No deals were closed, but handling buyer contacts and follow-ups gave me hands-on B2B CRM experience.",
      link: "",
    },
    {
      type: "Exhibitions",
      title: "The Big 5 exhibition & Saudi trade mission, South Africa",
      org: "Inhouse & Back Comfort",
      date: "",
      status: "completed",
      statusLabel: "Company representative",
      text: "Represented the company at The Big 5 exhibition and on the Saudi trade mission in South Africa: meeting new people, presenting our brands, promoting franchise opportunities and making cold outreach to companies for partnerships. It strengthened my CRM and business development skills.",
      link: "",
    },
    {
      type: "Learning",
      title: "AI Data Science modules",
      org: "KAUST",
      date: "",
      status: "completed",
      statusLabel: "Initial modules completed",
      text: "Introductory modules covering AI applications and machine learning.",
      link: "",
    },
    {
      type: "Programs",
      title: "CEIES programs",
      org: "CEIES",
      date: "",
      status: "completed",
      statusLabel: "Participant",
      text: "Programs focused on artificial intelligence engineering systems.",
      link: "",
    },
    {
      type: "Research",
      title: "Cybersecurity",
      org: "Area of interest",
      date: "",
      status: "in-progress",
      statusLabel: "Growing interest",
      text: "Interested in cybersecurity and how to keep business systems and data safe.",
      link: "",
    },
    {
      type: "Research",
      title: "Radiotherapy systems & medical procurement",
      org: "Research interest",
      date: "",
      status: "in-progress",
      statusLabel: "Ongoing interest",
      text: "Following LINAC and brachytherapy technology and how hospitals procure and maintain it.",
      link: "",
    },
    {
      type: "Projects",
      title: "Personal portfolio website",
      org: "Personal project",
      date: "2026",
      status: "live",
      statusLabel: "Live",
      text: "Building and maintaining this site as a home for my work and documents.",
      link: "",
    },
  ],
};
