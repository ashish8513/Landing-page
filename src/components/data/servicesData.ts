import { ServiceList } from 'types/types';
import { AI, App, Backend, Design, Frontend, Marketing, Software, Stack, WordPress } from '../common/Icons';
export const servicesData = {
    title: "JOIN WAITLIST",
    description: "We offer a comprehensive range of digital services to help your business thrive in the modern digital landscape.",
    mainService: {
        title: "Software Development",
        description: "We specialize in designing and developing custom software solutions tailored to your business goals — from initial concept to full-scale deployment. Our team combines technical expertise with strategic thinking to deliver solutions that are scalable, secure, and high-performing, ensuring they grow alongside your business.",
        subDescription: "Our focus is on creating intelligent, user-friendly software that improves workflows, enhances productivity, and drives measurable results."
    },
    features: [
        {
            title: "Custom Solutions",
            description: "Every product is built to match our growth requirements, not genetic templates."
        },
        {
            title: "Scalable Architecture",
            description: "Designed to evolve seamlessly as your business grows."
        },
        {
            title: "High Performance",
            description: "Optimised for speed, reliability, and improvements."
        },
        {
            title: "Clean Ready",
            description: "Full support for AWS, Azure, and Google Cloud deployments."
        },
        {
            title: "Cross-Platform Support",
            description: "Web, desktop, and mobile compatibility for broader reach."
        },
        {
            title: "Maintenance & Support",
            description: "Creating scalable, performance monitoring, and basic resolution."
        },
        {
            title: "Data Insights",
            description: "Build multiple in a multi-stage and drive better decisions."
        },
        {
            title: "Security-First Approach",
            description: "Advanced encryption, authentication, and compliance with industry standards."
        },
        {
            title: "API & Integration",
            description: "Seamless integration with your existing tools, CBMs, and their party applications."
        }
    ]
};

export const projectsData = {
  title: "JOIN WAITLIST",
  description: "A showcase of our recent projects demonstrating our expertise, innovation, and commitment to delivering high-quality digital solutions.",
 
};


export const servicesList: ServiceList[] = [
    {
        name: "Software Development",
        icon: Software
    },
    {
        name: "U/UX Design",
        icon: Design
    },
    {
        name: "Frontend Development",
        icon: Frontend
    },
    {
        name: "Backend Development",
        icon: Backend
    },
    {
        name: "Full Stack Development",
        icon: Stack
    },
    {
        name: "App Development",
        icon: App
    },
    {
        name: "WordPress Development",
        icon: WordPress
    },
    {
        name: "Artificial Intelligence (AI)",
        icon: AI
    },
    {
        name: "Digital Marketing",
        icon: Marketing
    }
];

export const categories = [
    "All Work",
    "Software",
    "UI/UX Design",
    "App Development",
    "Websites",
    "AI",
    "Marketing",
];


export const portfolioItems = [
    {
        id: 1,
        title: "Website Design",
        img: "/images/Ai.png",
        category: "Websites",
    },
    {
        id: 2,
        title: "UI/UX Projects",
        img: "/images/UI-UX.png",
        category: "UI/UX Design",
    },
    {
        id: 3,
        title: "CRM Dashboard",
        img: "/images/CRM-Dashboard.jpg",
        category: "CRM Dashboard",
    },
    {
        id: 4,
        title: "AI Tool Design",
        img: "/images/Dashboard.jpg",
        category: "AI",
    },
    {
        id: 5,
        title: "Marketing Templates",
        img: "/images/Internal-Project.jpg",
        category: "Marketing",
    },
    {
        id: 6,
        title: "WordPress Development",
        img: "/images/Wordpress.jpeg",
        category: "Software",
    },
];

export const products = [
    {
        title: "Mytechlance - Enterprise",
        slug: "mytechlance-enterprise",
        img: "/images/png/product1.png",
        img1: "/images/png/threescreen.png",
        version: " v1.1.1 Latest Release",
        price: "$499",
        shortDesc: "Complete enterprise suite: CRM, Billing, Workforce.",
        longDesc:
            "Built for larger teams with role-based access, SLA reporting, and advanced integrations.",
        fullDesc: "Professional workflow automation for modern teams. Mytechlance - Enterprise revolutionizes how teams collaborate and automate workflows. With intelligent automation, seamless integration, and enterprise-grade security, our platform empowers organizations to achieve more with less effort.",
        // ================== PLANS ATTACHED TO PRODUCT ===================
        plans: {
            monthly: [
                {
                    name: "Basic",
                    price: "0",
                    period: "/month",
                    button: "Get Started",
                    isPopular: false,
                    features: [
                        { text: "Up to 5 users", available: true },
                        { text: "Basic automation workflows", available: true },
                        { text: "5 GB storage", available: true },
                        { text: "Standard support", available: true },
                        { text: "Advanced analytics", available: false },
                        { text: "Custom integrations", available: false },
                        { text: "Priority support", available: false },
                    ],
                },
                {
                    name: "Professional",
                    price: "24",
                    period: "per/user month",
                    button: "Start Free Trial",
                    isPopular: true,                     // For "Most Popular" label
                    features: [
                        { text: "Up to 50 users", available: true },
                        { text: "Advanced automation workflows", available: true },
                        { text: "100 GB storage", available: true },
                        { text: "Priority support", available: true },
                        { text: "Advanced analytics", available: true },
                        { text: "Custom integrations", available: true },
                        { text: "Dedicated account manager", available: false },
                    ],
                },
                {
                    name: "Enterprise",
                    price: "49",
                    period: "per/user month",
                    button: "Contact Sales",
                    isPopular: false,
                    features: [
                        { text: "Unlimited users", available: true },
                        { text: "Enterprise-grade automation", available: true },
                        { text: "Unlimited storage", available: true },
                        { text: "24/7 premium support", available: true },
                        { text: "Advanced analytics & reporting", available: true },
                        { text: "Custom integrations & API access", available: true },
                        { text: "Dedicated account manager", available: true },
                    ],
                },
            ],

            yearly: [
                {
                    name: "Basic",
                    price: "0",
                    period: "/year",
                    button: "Get Started",
                    isPopular: false,
                    features: [
                        { text: "Up to 5 users", available: true },
                        { text: "Basic automation workflows", available: true },
                    ],
                },
                {
                    name: "Professional",
                    price: "240",
                    period: "/year",
                    button: "Start Free Trial",
                    isPopular: true,
                    features: [
                        { text: "Up to 50 users", available: true },
                        { text: "Advanced automation workflows", available: true },
                    ],
                },
                {
                    name: "Enterprise",
                    price: "490",
                    period: "/year",
                    button: "Contact Sales",
                    isPopular: false,
                    features: [
                        { text: "Unlimited users", available: true },
                        { text: "Custom integrations & API access", available: true },
                    ],
                },
            ]
        },

        features: [
            {
                title: "Intelligent Automation",
                desc: "Automate repetitive tasks with AI-powered workflow engine that adapts to team patterns.",
            },
            {
                title: "Enterprise Security",
                desc: "Bank-level encryption, MFA, and industry-standard compliance.",
            },
            {
                title: "Seamless Integration",
                desc: "Connect with Slack, Salesforce, Google Workspace, Microsoft 365 and more.",
            },
            {
                title: "Advanced Analytics",
                desc: "Custom dashboards, reporting & insight into team performance.",
            },
            {
                title: "Cross-Platform Support",
                desc: "Windows, macOS, Linux, iOS, Android product sync.",
            },
            {
                title: "Team Collaboration",
                desc: "Real-time chat, workspaces & shared project tools.",
            },
        ],
        systemRequirements: {
            windows: [
                "Windows 10 or later (64-bit)",
                "Intel Core i5 or equivalent processor",
                "8 GB RAM (16 GB recommended)",
                "2 GB available storage space",
                "Internet connection required",
            ],
            mac: [
                "macOS 11.0 (Big Sur) or later",
                "Intel Core i5 or Apple M1 chip",
                "8 GB RAM (16 GB recommended)",
                "2 GB available storage space",
                "Internet connection required",
            ],
        },

    },
    {
        title: "CRM Dashboard",
        slug: "crm-dashboard",
        img: "/images/png/product1.png",
        price: "$499",
        shortDesc: "Complete enterprise suite: CRM, Billing, Workforce.",
        longDesc:
            "Built for larger teams with role-based access, SLA reporting, and advanced integrations.",
    },
    {
        title: "Team Performance Tool",
        img: "/images/png/product1.png",
        price: "$299",
        shortDesc: "Track team KPIs and productivity.",
        longDesc: "Real-time monitoring with automated insights and charts.",
    },
];
