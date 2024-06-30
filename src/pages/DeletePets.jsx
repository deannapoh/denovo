import React, { useContext, useState } from "react";
import { PetsContext } from "../components/PetsContext";
import NavAnimalShelter from "../components/NavAnimalShelter";
import Footer from "../sections/Footer";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from "../components/firebase/firebase";

const DeletePets = () => {
  const { pets, setPets } = useContext(PetsContext);
  const [deleteMode, setDeleteMode] = useState(false);
  const [searchName, setSearchName] = useState(""); // State for search input
  const [animalShelterFilter, setAnimalShelterFilter] = useState(""); // State for animal shelter filter
  const [animalFilter, setAnimalFilter] = useState(""); // State for animal filter

  const handleDelete = async (petId) => {
    try {
      await deleteDoc(doc(db, 'pets', petId));
      setPets((prevPets) => prevPets.filter(pet => pet.PetID !== petId));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const toggleDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  const filteredPets = pets.filter((pet) => {
    return (
      (searchName ? pet.Name.toLowerCase().includes(searchName.toLowerCase()) : true) &&
      (animalShelterFilter ? pet.AnimalShelter.toLowerCase() === animalShelterFilter.toLowerCase() : true) &&
      (animalFilter ? pet.Animal.toLowerCase() === animalFilter.toLowerCase() : true)
    );
  });

  const uniqueAnimalShelters = [...new Set(pets.map((pet) => pet.AnimalShelter))];
  const uniqueAnimals = [...new Set(pets.map((pet) => pet.Animal))];

  return (
    <>
      <section className='pb-5'> <NavAnimalShelter /> </section>
      <section className='padding'>
        <div className='flex justify-center mt-4'>
          <input
            type='text'
            placeholder='Search by name...'
            className='form-input'
            style={{ border: '1px solid slategray', padding: '8px', borderRadius: '4px' }}
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        <div className='filters flex gap-20 leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 mt-3 mb-3 ml-8'>
          <select className='form-select' value={animalShelterFilter} onChange={(e) => setAnimalShelterFilter(e.target.value)}>
            <option value=''>All Animal Shelters</option>
            {uniqueAnimalShelters.map((shelter) => (
              <option key={shelter} value={shelter}>
                {shelter}
              </option>
            ))}
          </select>

          <select className='form-select' value={animalFilter} onChange={(e) => setAnimalFilter(e.target.value)}>
            <option value=''>All Animals</option>
            {uniqueAnimals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </div>

        <button className='toggle-delete-btn ml-10' onClick={toggleDeleteMode}>
          {deleteMode ? 'Done' : 'Delete Pet'}
        </button>

        <div className='pet-container'>
          {filteredPets.length === 0 && <div className='pt-10 flex justify-center'>No pets found.</div>}
          {filteredPets.map((pet) => (
            <div className='pet-card rounded-md' key={pet.PetID}>
              <div className='pet-img'>
                <img src={pet.Img} alt="not found" />
              </div>
              <div className='mt-2 text-2xl leading-normal font-bold font-palanquin text-purple-900'>
                {pet.Name}
              </div>
              <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'>
                <span className="font-semibold">Age: </span>
                {pet.Age}
              </div>
              <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'>
                <span className="font-semibold">Gender: </span>
                {pet.Gender}
              </div>
              <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'>
                <span className="font-semibold">Animal: </span>
                {pet.Animal}
              </div>
              <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal'>
                <span className="font-semibold">Breed: </span>
                {pet.Breed}
              </div>
              <div className='mt-2 font-montserrat font-normal font-xl text-[15px] leading-normal text-left mb-2'>
                <span className="font-semibold">Animal Shelter: </span>
                {pet.AnimalShelter}
              </div>
              {deleteMode && (
                <button className='delete-btn' onClick={() => handleDelete(pet.PetID)}>➖</button>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </div>
    </>
  );
}

export default DeletePets;
