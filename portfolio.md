--- 
layout: "/layout/portfolio.njk"
title: "Portfolio"
description: "Check out so of my work in branding, graphics and illustration."
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
        src: "/images/hero/portfolio-soda-can.svg"
        altText: "Illustration of a cat next to a vase"
    backgroundColour: "secondary"
    theme: "portfolio"
projectsWrapper: 
    title: ""
    filterButtons: [
        {label: "All", id: "/all"}, 
        {label: "Branding", id: "/branding"},
        {label: "Graphics", id: "/graphics"},
        {label: "Illustration", id: "/illustration"},
]
form: 
    title: "Keen to work with me? <span>Then please get in touch!</span>"
    backgroundColour: "secondary"
    theme: "portfolio"
    graphic: true
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
    footerSocial: [
        {label: "twitter", link: "#"},
        {label: "instagram", link: "#"},
        {label: "youtube", link: "#"},
        {label: "linkedin", link: "#"}
    ]
---
