import {petsforadoption} from '../constants';
import { PetsContext } from "../components/PetsContext";
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import React, { useContext } from "react";

const Pets = () => {
  const {pets} = useContext(PetsContext);
  console.log(pets);

  return (
    <section id='pets' className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>
        Animals Looking For Forever <span className='text-purple-900'> Homes </span> 
      </h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray ml-10'>
        Each one of these furry friends have a unique story and a heart brimming with unconditional love. Adopt a companion and help us give them the second chance they deserve!
      </p>
    </div>

    <div className = 'pet-container'>
      {pets.length == 0 && <div className = 'pt-10'> No pets in need of a home for now! All of our pets have found forever homes :D </div>}
      
      {pets.slice(0,4).map(pet => ( // Show only the first 4 pets
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
   
    
    <div className = 'ml-10'> 
    <a href = '/pets' className = 'no-underline' > 
    <Button label='More' iconURL={arrowRight}/>
    </a>
    </div>
  </section>
);
};

export default Pets