--- 
layout: "/layout/experience.njk"
title: "Experience"
description: "Learn more about my previous experience including volunteering."
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio"},
        {label: "Experience", link: "/experience", isActive: true},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "My Experience"
    image: 
        src: "/images/hero/watering-can.svg"
        altText: "Illustration of a cat next to a vase"
    strapline: ""
    theme: "experience"
    backgroundColour: "secondary"
resume: 
    title: "Resume"
    filters: [
        {label: "Experience", link: "experience"},
        {label: "Education", link: "education"}, 
        {label: "Skills", link: "skills"},
        {label: "Volunteering", link: "volunteering"}
    ]
    experience: 
        title: "Experience"
        experiences: [
        {
            role: "Founder & Director",
            company: "MyEirene Ltd", 
            startYear: 2021,
            endYear: 2024,
            city: "Guildford",
            country: "United Kingdom",
            description: "Established a mindfulness and wellbeing business where I wrote a wellbeing blog and developed my own programs for customers to help alleviate the toll of poor mental health that arose due to the pandemic."
        }, 
        {
            role: "Illustrator",
            company: "Sandancer EP",
            startYear: 2018,
            endYear: 2019,
            city: "London", 
            country: "United Kingdom",
            description: "Designed hand-drawn album artwork that was digitally edited for an album's digital launch that went across all of the client's - a local musician - social media pages as well as on all of the music platforms their album could be streamed on."
        },
        {
            role: "Interior designer",
            company: "Re/Max Lambeth",
            startYear: 2018, 
            endYear: 2019,
            city: "London",
            country: "United Kingdom",
            description: "Designed an office refresh for a Re/Max franchise in south London. Created visuals using Photoshop and 3D models in SketchUp. Sourced furniture and fixtures and liaised with suppliers to negotiate pricing and deliveries."
        },
        {
            role: "Interior designer",
            company: "Futurebrand; Visa Europe",
            startYear: 2017,
            endYear: 2018,
            city: "London", 
            country: "United Kingdom", 
            description: "Responsible for composing all technical drawings and CAD models, generating visuals and presentation documents as well as sourcing furniture/fixtures, creating inventory and liaising with suppliers."
        }
    ]
    education: 
        title: "Education"
        items: [
            {
                title: "BA (HONS) Interior Design",
                startYear: 2014,
                endYear: 2017,
                school: "Regent's University, London"
            },
            {
                title: "MSC Digital Marketing",
                startYear: 2019,
                endYear: 2020, 
                school: "Henley Business School, University of Reading"
            }
        ]
    skills: 
        title: "Skills"
        items: [
            {
                title: "Technical",
                group: [
                    "Adobe CC",
                    "Figma",
                    "Webflow",
                    "G Suites"
                ]
            },
            {
                title: "Soft",
                group: [
                    "Copywriting",
                    "Research", 
                    "Drawing",
                    "Strategizing"
                ]
            }
        ]
    volunteering: 
        title: "Volunteering"
        items: [
            {
                organisation: "Debra",
                description: "Charity Shop",
                startYear: "2024",
                endYear: "2025",
                address: "94 Stoke Road, Guildford"
            },
            {
                organisation: "Parkrun",                
                description: "Weekly Community Event",
                startYear: "2024",
                endYear: "2025",
                address: "Stoke Park, Guildford"
            }, 
            {
                organisation: "Solar Sisters",
                description: "Cafe & Zero Waste Shop",
                startYear: "2024",
                endYear: "2025",
                address: "86 North Street, Guildford"
            }
        ]
    sectionButton: 
        label: "Download my CV"
        link: "#"
featuredProjects: 
    title: "Check Out My Projects"
    projects: ["Those Darjeeling Days", "MyEirene Ltd", "Sandancer EP"]
    backgroundColour: "secondary"
    cardTheme: "secondary"
footer: 
    footerLogo: 
        src: "/images/Footer_logo.svg"
        altText: "Footer Logo"
    copyright: ""
    footerLinks: [
        {label: "FAQs", link: "/faqs"},
        {label: "Privacy Policy", link: "/privacy-policy"},
        {label: "Terms", link: "/terms-and-conditions"}
    ]
   
---



