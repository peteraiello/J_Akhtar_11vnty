---
layout: "/layout/project.njk"
permalink: "/portfolio/darjeeling/"
title: "Those Darjeeling Days"
tags: project
img: 
    src: "/images/projects/darjeeling.png"
    altText: "Branding for darjeeling days"
excerpt: "A branding and graphic project for a brand new creative blog that has recently been set up."
date: 2025-01-15
endDate: 2025-03-15
location: "Ottawa, Canada"
brandSwatches: [
    '#8ACCFF',
    '#00625E',
    '#DAAAFF',
    '#8B0057',
    '#F7B6F4',
    '#8FDBD3',
    '#F7F5F5'
]
flexibleLayout: [
    {
        name: "image-text",
        title: "Image Text One",
        image: {
            src: "/images/projects/darjeeling/bear-illustration.jpg",
            altText: "Illustration of bear"
        },
        text: 
            <p>Paragraph One</p>

            <p>Paragraph Two</p>
    },
    {
        name: "image-text",
        title: "Image Text Two",
        image: {
            src: "/images/placeholder.png",
            altText: "Placeholder image"
        },
        text: 
            <p>Paragraph One</p>

            <p>Paragraph Two</p>
    },
    {
        name: "text-block", 
        title: "Logo Design",
        content: 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis mi et sapien luctus pharetra. Sed et diam in sem tempus viverra non vel enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quis vulputate diam. Suspendisse potenti. Aliquam rhoncus purus eget ipsum venenatis, eget venenatis nulla aliquam. Vivamus finibus, metus non pellentesque ornare, turpis urna eleifend mi, a suscipit sem massa et ligula. Suspendisse sit amet libero at urna blandit molestie at sit amet risus.</p>
    },
    {
        name: "full-width-image",
        img: {
            src: "/images/projects/darjeeling/darjeeling-brand.png",
            altText: "Darjeeling brand"
        }
    },
    {
        name: "full-width-image",
        img: {
            src: "/images/projects/darjeeling/swatches.jpg",
            altText: "Darjeeling swatches"
        }
    },
    {
        name: "text-block", 
        title: "Colourways",
        content: 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis mi et sapien luctus pharetra. Sed et diam in sem tempus viverra non vel enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quis vulputate diam. </p>
            
            <p>Suspendisse potenti. Aliquam rhoncus purus eget ipsum venenatis, eget venenatis nulla aliquam. Vivamus finibus, metus non pellentesque ornare, turpis urna eleifend mi, a suscipit sem massa et ligula. Suspendisse sit amet libero at urna blandit molestie at sit amet risus.</p>
    },
]
button: 
    text: "Click Here"
    link: "/portfolio/darjeeling"
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