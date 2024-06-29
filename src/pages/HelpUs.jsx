import React, { useContext } from "react";
import { VolunteerContext } from "../components/VolunteerContext";
import Nav2 from "../components/Nav2";
import Footer from "../sections/Footer";



const HelpUs = () => {
  const {volunteers} = useContext(VolunteerContext);
  console.log(volunteers);
  
  return (
    <>
    <section className = 'pb-5'> <Nav2/> </section>
    <section className = 'padding'> 
    {volunteers.length !== 0 
    &&
    <div className='flex flex-col items-center'>
      <h2 className='text-4xl font-palanquin font-bold text-center mt-4'>
        Want to <span className='text-purple-900'> Help? </span> 
      </h2>
      <div className =  'flex justify-center'> 
      <p className='lg:max-w-5xl mt-4 font-montserrat text-slate-gray'>
      Your support means the world to us! Whether you volunteer your time, donate to our cause, or spread awareness, every action makes a difference in the lives of our furry friends. 
        <br/>
        <br/>
        Join us in our mission to provide loving homes and care for animals in need. Together, we can make a lasting impact and create a brighter future for everyone.
      </p>
      </div>
    </div>
      }
    <div className = 'volunteers-container'>
      {volunteers.length == 0 && <div className = 'pt-10 flex justify-center'> No help needed at the moment! Thanks for your concern :D </div>}
      {volunteers.map(volunteer => (
        <div className = 'volunteer-card rounded-md' key = {volunteer.VolunteerID} >
          <div className='mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Date: </span> 
            {volunteer.Date}
          </div>
          <div className='mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Time: </span> 
            {volunteer.Time}
          </div>
          <div className='mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Duration: </span> 
            {volunteer.Duration}
          </div>
          <div className='mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Animal Shelter: </span> 
            {volunteer.AnimalShelter}
          </div>
          <div className='mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Prerequisites: </span> 
            {volunteer.Prereq}
          </div>
          <div className='mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal text-left mb-2'> 
            <span className = "font-semibold">Description: </span> 
            {volunteer.Description}
          </div>
          <button className = 'adopt-btn font-palanquin text-[16px] rounded-md '> Volunteer!</button>
        
        </div>
        
      ))}
    </div>
    </section>
    <div className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </div>
    
    
    </>
  )
}

export default HelpUs