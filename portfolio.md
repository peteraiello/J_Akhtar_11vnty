--- 
layout: "/layout/portfolio.njk"
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio", isActive: true},
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "My Portfolio"
    image: 
        src: "/images/hero/portfolio-soda-can.png"
        altText: "Illustration of a cat next to a vase"
    backgroundColour: "primary"
    theme: "portfolio"
projectsWrapper: 
    filterButtons: [
        {label: "All", id: "/all"}, 
        {label: "Branding", id: "/branding"},
        {label: "Graphics", id: "/graphics"},
        {label: "Illustration", id: "/illustration"},
]
footer: 
    footerLogo: 
        src: "/images/Footer_logo.svg"
        altText: "Footer Logo"
    copyright: "Jamila Y Akhtar 2025 All Rights Reserved"
    footerLinks: [
        {label: "FAQs", link: "/faqs"},
        {label: "Privacy Policy", link: "/privacy-policy"},
        {label: "Terms", link: "/terms-and-conditions"}
    ]
    footerSocial: [
        {label: "twitter", link: "#"},
        {label: "instagram", link: "#"},
        {label: "youtube", link: "#"},
        {label: "linkedin", link: "#"}
    ]
---
