import { facebook, instagram, volunteer, donate, educate, twitter } from "../assets/icons";
import { dog, cat, rabbit, customer1, customer2, dog2, dog3, cat2, guineapig } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#pets", label: "Pets" },
    { href: "#help-us", label: "Volunteer/Donate" },
    { href: "#contact-us", label: "Contact Us" },
];

export const allowedEmails = ["spca@denovo.com", 
                            "sosd@denovo.com", 
                            "oscas@denovo.com", 
                            "guineapigrescuesg@denovo.com", 
                            "kittensanctuarysg@denovo.com", 
                            "all@denovo.com" ];


export const pets = [
    {
        thumbnail: dog,
        bigPet: dog,
    },
    {
        thumbnail: cat,
        bigPet: cat,
    },
    {
        thumbnail: rabbit,
        bigPet: rabbit,
    },
];

export const statistics = [
    { value: '1k+', label: 'Pets' },
    { value: '20+', label: 'Animal Shelters' },
    { value: '200+', label: 'Newfound families' },
];

export const services = [
    {
        imgURL: volunteer,
        label: "Volunteer",
        subtext: "Make a Difference Across Singapore: Click here to volunteer at an animal shelter near you!",
        href: "/help-us"
    },
    {
        imgURL: donate,
        label: "Donate/Sponsor",
        subtext: "Can't come down but still want to help? Click here to donate to any animal shelter in Singapore!",
        href: "/help-us"
    },
    {
        imgURL: educate,
        label: "Educational Resources",
        subtext: "Still unsure? Click here to learn more about the benefits of adopting an pet!",
        href: "/educational-resources"
    },
];

export const footerLinks = [
    {
        title: "Pets",
        links: [
            { name: "Dogs", link: "/" },
            { name: "Cats", link: "/" },
            { name: "Rabbits", link: "/" },
            { name: "Guinea Pigs", link: "/" },
            { name: "Birds", link: "/" },
            { name: "Hamsters", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@denovo.com", link: "mailto:customer@denovo.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];