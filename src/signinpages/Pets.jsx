import React, { useContext, useState, useEffect } from "react";
import { PetsContext } from "../components/PetsContext";
import NavSignin from "../components/NavSignin";
import Footer from "../sections/Footer";
import { AuthContext } from '../components/AppContext/AppContext';
import { db } from '../components/firebase/firebase';
import { arrayUnion, doc, updateDoc, getDoc } from 'firebase/firestore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Pets = () => {
  const { pets } = useContext(PetsContext);
  const [animalFilter, setAnimalFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [breedFilter, setBreedFilter] = useState("");
  const [likedPets, setLikedPets] = useState([]);
  const { user } = useContext(AuthContext);
  const userDocRef = doc(db, 'users', `${user?.email}`);

  // Fetch liked pets from database on component load
  useEffect(() => {
    const fetchLikedPets = async () => {
      if (user?.email) {
        const userDoc = await getDoc(userDocRef);
        setLikedPets(userDoc.data()?.likedPets || []);
      }
    };

    fetchLikedPets();
  }, [user, userDocRef]);

  const uniqueValues = (key) => {
    return [...new Set(pets.map(pet => pet[key]))];
  };

  const filteredPets = pets.filter(pet => {
    return (
      (animalFilter ? pet.Animal.toLowerCase() === animalFilter.toLowerCase() : true) &&
      (genderFilter ? pet.Gender.toLowerCase() === genderFilter.toLowerCase() : true) &&
      (breedFilter ? pet.Breed.toLowerCase() === breedFilter.toLowerCase() : true)
    );
  });

  const handleLike = async (pet) => {
    if (user?.email) {
      const isLiked = likedPets.some(likedPet => likedPet.PetID === pet.PetID);
      if (isLiked) {
        const updatedLikes = likedPets.filter(likedPet => likedPet.PetID !== pet.PetID);
        setLikedPets(updatedLikes);
        await updateDoc(userDocRef, { likedPets: updatedLikes });
      } else {
        const updatedLikes = [...likedPets, pet];
        setLikedPets(updatedLikes);
        await updateDoc(userDocRef, { likedPets: arrayUnion({
          PetID: pet.PetID,
          Age: pet.Age,
          Animal: pet.Animal,
          AnimalShelter: pet.AnimalShelter,
          Breed: pet.Breed,
          Description: pet.Description,
          Gender: pet.Gender,
          Img: pet.Img,
          Name: pet.Name
        }) });
      }
    } else {
      alert('Please log in to like a pet');
    }
  };

  return (
    <>
      <section className='pb-5'>
        <NavSignin />
      </section>
      <section className='padding'>
        {pets.length !== 0 &&
          <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-palanquin font-bold text-center mt-4'>
              Animals Looking For Forever <span className='text-purple-900'>Homes</span>
            </h2>
            <div className='flex justify-center'>
              <p className='lg:max-w-5xl mt-4 font-montserrat text-slate-gray'>
                Welcome to Denovo, where we believe that every single animal deserves a second chance at happiness. Each one of these furry friends has a unique story to tell and a heart brimming with unconditional love that they cannot wait to shower you with.
                <br />
                <br />
                Adopt a companion today and watch as they touch your hearts in ways no one else can, and change your life for the better.
              </p>
            </div>
          </div>
        }

        <div className='filters flex gap-20 leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 mt-3 mb-3 ml-8'>
          <select className="form-select" value={animalFilter} onChange={(e) => setAnimalFilter(e.target.value)}>
            <option value="">All Animals</option>
            {uniqueValues('Animal').map(animal => (
              <option key={animal} value={animal}>{animal}</option>
            ))}
          </select>

          <select className="form-select" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">All Genders</option>
            {pets.filter(pet => animalFilter === "" || pet.Animal.toLowerCase() === animalFilter.toLowerCase())
              .reduce((uniqueGenders, pet) => {
                if (!uniqueGenders.includes(pet.Gender)) {
                  uniqueGenders.push(pet.Gender);
                }
                return uniqueGenders;
              }, [])
              .map(gender => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
          </select>

          <select className="form-select" value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
            <option value="">All Breeds</option>
            {pets
              .filter(pet => animalFilter === "" || pet.Animal.toLowerCase() === animalFilter.toLowerCase())
              .reduce((uniqueBreeds, pet) => {
                if (!uniqueBreeds.includes(pet.Breed)) { uniqueBreeds.push(pet.Breed); }
                return uniqueBreeds;
              }, [])
              .map(breed => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
          </select>

        </div>

        <div className='pet-container'>
          {filteredPets.length === 0 && <div className='pt-10 flex justify-center'>No pets in need of a home for now! All of our pets have found forever homes :D</div>}
          {filteredPets.map(pet => (
            <div className='pet-card rounded-md' key={pet.PetID}>
              <div className="card-inner">
                <div className="card-front">
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
                </div>
                <div className="card-back text-start text-[15px] bg-hero">
                  <p>{pet.Description}</p>
                  <button className='adopt-btn font-palanquin text-[16px] rounded-md '>Adopt me!</button>
                  <button onClick={() => handleLike(pet)} className='like-btn pt-4'>
                    {likedPets.some(likedPet => likedPet.PetID === pet.PetID) ? (
                      <FaHeart className='text-red-500 text-2xl' />
                    ) : (
                      <FaRegHeart className='text-gray-300 text-2xl' />
                    )}
                  </button>
                </div>
              </div>
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

export default Pets;
