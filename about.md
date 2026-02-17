--- 
layout: "/layout/about.njk"
title: "About"
description: "I'm a designer with an obsession for colour with a background in interior design."
header: 
    logo: 
        src: "/images/logo.svg"
        altText: "header logo"
    nav: [
        {label: "Portfolio", link: "/portfolio"},
        {label: "Experience", link: "/experience"},
        {label: "About", link: "/about", isActive: true},
        {label: "Contact", link: "/contact"}
    ]
hero: 
    title: "About Me"
    theme: "about"
    image: 
        src: "/images/hero/flower-pot.svg"
        altText: "Illustration of a cat next to a vase"
    backgroundColour: "secondary"
imageText: 
    image: 
        src: "/images/about-jamila.jpg"
        altText: "Jamila portrait"
    title: "I'm Jamila!"
    blurb: "<p>A designer with a slight obsession for colour and deep fascination for transitional/liminal spaces (probably due to my Third Culture Kid upbringing and my Interior Design background). My work concentrates on crafting beautiful pieces of art by blending structure with purpose; I merge strategy with visual direction to infuse design with meaning.</p>
    <p>My life story takes me on adventures through the U.A.E. and the UK, but now I am back in my home country of Canada where it all began.</p>
    <p>Beyond design, I can be found with my nose deep in a book, doing sudoku, getting lost in some type of arts or crafts, dancing the day away, baking delicious sweet treats or being outdoors where I will either be wandering on a hike, submerged in the ocean or galivanting through a botanical garden.</p>
    "
    buttons: [
        {text: "My Experience", link: "/experience", backgroundColour: "primary", border: true},
        {text: "My Portfolio",  link: "/portfolio",  backgroundColour: "primary", border: true}
    ]
    leftToRight: false    
quickLinks: 
    title: "Work"
    cards: [{
        title: "Portfolio",
        image: 
            {
                src: "/images/portfolio_thumb.jpg",
                altText: "Illustration of window and picture frames"
            },
        button: 
            {
                text: "Click here",
                link: "/portfolio"
            }
    },
    {
        title: "Experience",
        image: 
            {
                src: "/images/experience_thumb.jpg",
                altText: "Illustration of cat with certificate"
            },
        button: 
            {
                text: "Click here",
                link: "/experience"
            }
    }]
    posts: [{title: "post one"}, 
            {title: "post two"}]
form: 
    backgroundColour: "secondary"
    title: "Keen to work with me? <span>Then please get in touch!</span>"
    graphic: 
        src: "/images/form/cherry-punnet.svg"
        altText: "Cherry Punnet"
footer: 
    footerLogo: 
        src: "/images/Footer_logo.svg"
        altText: "Footer Logo"
    copyright: ""
    footerLinks: [
        {label: "FAQs", link: "/faqs", target: "_self"},        
        {label: "Privacy Policy", link: "https://www.iubenda.com/privacy-policy/49373695", target: "_blank"},
        {label: "Cookie Policy", link: "https://www.iubenda.com/privacy-policy/49373695/cookie-policy", target: "_blank"}
    ]
   
---



