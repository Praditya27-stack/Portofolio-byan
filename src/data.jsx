import { Database, Shield, Smartphone } from 'lucide-react';

export const PROJECTS = [
  {
    id: 1,
    title: "Radiant! Costume Manager",
    description: "Mobile application for managing and storing costume inventory data. Built with Flutter and Dart.",
    fullDescription: "Radiant! is a dedicated mobile application designed to streamline the management of costume inventory. It features a clean, intuitive UI that allows users to seamlessly add new costume entries (including photos, category, size, and material), search through their collection in real-time, and view detailed specifications. Currently hosted on GitHub, this project demonstrates strong capabilities in mobile UI/UX design and state management using Flutter.",
    image: "/costume_management.png",
    tags: ["Flutter", "Dart", "Mobile App", "UI/UX", "State Management"],
    link: "#",
    github: "https://github.com",
    features: [
      "Intuitive Home Dashboard displaying featured costumes",
      "Comprehensive Add Costume form with image upload capabilities",
      "Real-time Search functionality to quickly find specific costumes",
      "Detailed view showcasing costume specifications, materials, and pricing",
      "Modern, clean UI design with smooth navigation between screens"
    ],
    // screenshots: [
    //   "/costume_home.png",
    //   "/costume_add.png",
    //   "/costume_search.png",
    //   "/costume_detail.png"
    // ]
  },
  {
    id: 2,
    title: "aisin-recruitment-system.exe",
    description: "Enterprise-grade recruitment platform for PT AISIN featuring comprehensive applicant tracking, automated HR pipelines, and candidate management.",
    fullDescription: "The PT AISIN Recruitment System is a massive enterprise web platform built to handle high-volume hiring workflows. It serves as a complete Applicant Tracking System (ATS) that streamlines the entire recruitment process from job posting on the career portal to automated interview scheduling and candidate tracking via an interactive HR dashboard. It also features real-time remote proctoring for technical assessments and automated email notifications. To ensure system integrity, advanced security layers such as a Zero-Trust architecture, Wazuh SIEM monitoring, and ClamAV/YARA file scanning were integrated as robust add-ons.",
    image: "/homepage_aisin.png",
    tags: ["Laravel", "MySQL", "Microservices", "HR Tech", "Docker", "Security"],
    link: "#",
    github: "#",
    features: [
      "End-to-end Candidate Pipeline (ATS) with automated HR workflows",
      "Interactive HR Dashboard for tracking applicants and scheduling interviews",
      "Automated email notifications via Brevo SMTP for recruitment stage updates",
      "Real-time applicant proctoring using MediaPipe for remote technical tests",
      "Role-Based Access Control (RBAC) via UUIDs for HRD, Applicants, and Admins",
      "Microservices architecture separating Auth, Career Portal, and HR modules",
      "Advanced Security Add-ons: Wazuh SIEM, ClamAV & YARA malware scanning, and RSA/JWT Auth"
    ],
    screenshots: [
      "/homepage_aisin.png",
      "/hr_dashboard_aisin.png",
      "/signup_aisin.png"
    ]
  }
];

export const SKILLS = [
  {
    category: "Full-Stack & Mobile",
    icon: <Smartphone className="w-6 h-6 text-neon-green" />,
    items: ["Laravel", "PHP", "React", "Flutter", "Dart"]
  },
  {
    category: "Database & DevOps",
    icon: <Database className="w-6 h-6 text-neon-purple" />,
    items: ["MySQL", "Docker", "Microservices", "API Gateway", "SQLite"]
  },
  {
    category: "Cybersecurity & SIEM",
    icon: <Shield className="w-6 h-6 text-red-500" />,
    items: ["Wazuh SIEM", "Zero Trust Architecture", "ClamAV & YARA", "RSA Encryption", "JWT Auth"]
  }
];
