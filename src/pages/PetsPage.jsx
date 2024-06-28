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
     <h1 className='pt-10 flex justify-center font-palanquin text-4xl capitalize font-bold'>  
      <span className='text-purple-900'>Pets </span>
      </h1>
      }
    <div className = 'pet-container'>
      {pets.length == 0 && <div className = 'pt-10'> No pets in need of a home for now! All of our pets have found forever homes :D </div>}
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
          <div className="card-back">
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