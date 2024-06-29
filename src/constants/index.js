import { facebook, instagram, volunteer, donate, educate, twitter } from "../assets/icons";
import { dog, cat, rabbit, customer1, customer2, dog2, dog3, cat2, guineapig } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#pets", label: "Pets" },
    { href: "#help-us", label: "Volunteer/Donate" },
    { href: "#contact-us", label: "Contact Us" },
];


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

export const petsforadoption = [
    {
        imgURL: dog2,
        name: "Coco",
        animal: "Dog",
        breed: "Chihuahua",
        age: "5 months",
    },
    {
        imgURL: dog3,
        name: "Mochi",
        animal: "Dog",
        breed: "Maltese",
        age: "3 months",
    },
    {
        imgURL: cat2,
        name: "Luna",
        animal: "Cat",
        breed: "American Shorthair",
        age: "2 months",
    },
    {
        imgURL: guineapig,
        name: "Mocha",
        animal: "Guinea Pig",
        breed: "American Guinea Pig",
        age: "2 years",
    },
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
        href: "/help-us"
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
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