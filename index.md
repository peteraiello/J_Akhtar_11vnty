--- 
layout: "/layout/home.njk"
title: "Home"
description: "Welcome to my portfolio! I'm an Ottawa based designer specializing in branding and graphics, with a background in interior design"
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio"},
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "Design Studio"
    backgroundImage: 
        src: "/images/hero/creative-juice.svg"
    strapline: "Branding | Graphics | Illustration"
    backgroundColour: "white"
    theme: "home"
imageText: 
    backgroundColour: "secondary"
    image: 
        src: "/images/jamila-portrait.jpg"
        altText: "Jamila portrait"
        orientation: "portrait"
    title: "Hello there!"
    blurb: "<p>I'm Jamila, an Ottawa-based designer who specializes in branding, graphics and illustration, where I focus on balancing form and function. I work closely with colour to produce striking, identifiable pieces of art.</p>"
    graphic: true
    button: 
        text: "Discover more"
        link: "/about"
    leftToRight: true
quickLinks: 
    title: ""
    cards: [{
        title: "Portfolio",
        blurb: "<p>A carefully curated treasure trove of my creations.</p>",
        icon: "drink-up",
        button: 
            {
                text: "Click here",
                link: "/portfolio"
            }
    },
    {
        title: "Experience",
        blurb: "<p>A list of my credentials and my accomplishments.</p>",
        icon: "watering-plant",
        button: 
            {
                text: "Click here",
                link: "/experience"
            }
    }]
footer: 
    footerLogo: 
        src: "/images/Footer_logo.svg"
        altText: "Footer Logo"
    copyright: "Jamila Y Akhtar 2026 All Rights Reserved"
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



