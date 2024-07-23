import React from 'react'
import NavSignin from '../components/NavSignin';
import { volunteer,dog4,dogpaw } from "../assets/images";
import Footer from '../sections/Footer';

const About = () => {
  return (
    <main> 
      <section className = 'pb-5'> <NavSignin/> </section>
    
      <section className='pt-10 w-full min-h-screen'>
        <h1 className='pt-10 flex justify-center font-palanquin text-4xl capitalize font-bold'>  
      <span className='text-purple-900'>Overview </span>
      </h1>
      
      <section className = 'flex justify-center max-lg:flex-col w-full max-container'> 
      <div className = "mt-10 flex flex-1 flex-col justify-center pl-28 py-5">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-purple-900'>Who </span> We Are
        </h2>
        <p className='mt-5 lg:max-w-lg info-text'>
        Denovo is a non-profit platform that serves as a centralized adoption hub, allowing individuals to easily discover and find information about various pets available for adoption all across Singapore.
        </p>
        <p className = "mt-6 lg:max-w-lg info-text">
        In addition to facilitating adoptions, our platform also offers a comprehensive directory of donation and volunteer opportunities across various animal shelters in Singapore. This feature allows passionate individuals to easily find opportunies to support animal welfare, allowing them to make a positive impact in their community.
        </p>
      </div>
      <div className = "flex-1 flex pt-9">
        <img 
        src = {volunteer}
        alt = "volunteer in animal shelter"
        width={600}
        height = {600}
        />
      </div>
      </section >
      
      <section className = 'bg-hero bg-cover mt-20 mb-20 padding max-container flex flex-wrap gap-9 '>
        <div className = "flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-20 bg-white">
        <h3 className = " font-palanquin text-[35px] leading-normal flex justify-center font-bold">Our <span className= 'text-purple-900'>&nbsp;Mission</span></h3>
        <p className = "mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray flex justify-center">Through streamlining the adoption and volunteering process, we aim to inspire Singaporeans to adopt not shop and encourage volunteerism and support for animal welfare. </p>
        <img 
        src = {dogpaw}
        alt = "volunteer in animal shelter"
        width={600}
        height = {300}
        className = "mt-10"/>
        </div>
        <div className = "flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-white">
        <h3 className = "mt-5 font-palanquin text-[35px] leading-normal font-bold flex justify-center">Our <span className= 'text-purple-900'>&nbsp;Vision</span></h3>
        <p className = "mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray flex justify-center">We hope there will come a time where animal shelters are empty and every animal is able to find a forever family that will shower them with the unconditional love and care that they most definitely deserve.</p>
        <img 
        src = {dog4}
        alt = "volunteer in animal shelter"
        width={600}
        height = {300}
        className = "mt-5"/>
        </div>
        </section>

      </section> 

      <div className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </div>
    
      </main>
   
  )
}

export default About
