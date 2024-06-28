import React, { useContext } from "react";
import { PetsContext } from "../components/PetsContext";
import Nav2 from "../components/Nav2";



const PetsPage = () => {
 
  const {pets} = useContext(PetsContext);
  console.log(pets);
  
  return (
    //<div>Pets Page</div>
    <>
    <section className = 'pb-5'> <Nav2/> </section>
    {pets.length !== 0 
    &&
    <div className='flex flex-col justify-center mt-5'>
      <h2 className='text-4xl font-palanquin font-bold flex justify-center mt-4'>
        Animals Looking For Forever&nbsp; <span className='text-purple-900'> Homes </span> 
      </h2>
      <div className =  'flex justify-center'> 
      <p className='lg:max-w-5xl mt-4 font-montserrat text-slate-gray'>
        Welcome to Denovo, where we believe that every single animal deserves a second chance at happiness. Each one of these furry friends has a unique story to tell and a heart brimming with unconditional love that they cannot wait to shower you with. 
        <br/>
        <br/>
        Adopt a companion today and watch as they touch your hearts in ways no one else can, and change your life for the better.
      </p>
      </div>
    </div>
      }
    <div className = 'pet-container'>
      {pets.length == 0 && <div className = 'pt-10 flex justify-center'> No pets in need of a home for now! All of our pets have found forever homes :D </div>}
      {pets.map(pet => (
        <div className = 'pet-card rounded-md' key = {pet.PetID} >
          <div className="card-inner">
          <div className="card-front">
          <div className = 'pet-img '>
            <img src = {pet.Img} alt = "not found"/>
          </div>
          <div className = 'mt-2 text-2xl leading-normal font-bold font-palanquin text-purple-900'> 
            {pet.Name}
          </div>
          <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Age: </span> 
            {pet.Age}
          </div>
          <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Gender: </span> 
            {pet.Gender}
          </div>
          <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Animal: </span> 
            {pet.Animal}
          </div>
          <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'> 
            <span className = "font-semibold">Breed: </span> 
            {pet.Breed}
          </div>
          <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal text-left mb-2'> 
            <span className = "font-semibold">Animal Shelter: </span> 
            {pet.AnimalShelter}
          </div>
          
          </div>
          <div className="card-back text-start text-[15px] bg-hero">
            <p> {pet.Description}</p>

            <button className = 'adopt-btn font-palanquin text-[16px] rounded-md '> Adopt me!</button>
          </div>
        </div>
        </div>
        
      ))}
    </div>
    
    
    </>
  )
}

export default PetsPage