import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AppContext/AppContext';
import NavSignin from '../components/NavSignin';
import Footer from '../sections/Footer';
import { Card } from "@material-tailwind/react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { doc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';
import { db } from '../components/firebase/firebase'; // Update with your actual path to the Firebase config

const MyAccount = () => {
  const { user, getSavedPets, getSavedVolunteers } = useContext(AuthContext);
  const [likedPets, setLikedPets] = useState([]);
  const [likedVolunteers, setLikedVolunteers] = useState([]);

  useEffect(() => {
    const fetchLikedPets = async () => {
      if (user?.email) {
        try {
          const pets = await getSavedPets();
          setLikedPets(pets);
        } catch (error) {
          console.error("Error fetching liked pets:", error);
        }
      }
    };

    fetchLikedPets();
  }, [user, getSavedPets]);

  useEffect(() => {
    const fetchLikedVolunteers = async () => {
      if (user?.email) {
        try {
          const volunteers = await getSavedVolunteers();
          setLikedVolunteers(volunteers);
        } catch (error) {
          console.error("Error fetching liked volunteers:", error);
        }
      }
    };

    fetchLikedVolunteers();
  }, [user, getSavedVolunteers]);

  const handleUnlike = async (pet) => {
    if (user?.email) {
      // Update local state
      const updatedPets = likedPets.filter(likedPet => likedPet.PetID !== pet.PetID);
      setLikedPets(updatedPets);

      // Update Firestore
      const userDocRef = doc(db, 'users', `${user.email}`);
      try {
        await updateDoc(userDocRef, {
          likedPets: arrayRemove({
            PetID: pet.PetID,
            Age: pet.Age,
            Animal: pet.Animal,
            AnimalShelter: pet.AnimalShelter,
            Breed: pet.Breed,
            Description: pet.Description,
            Gender: pet.Gender,
            Img: pet.Img,
            Name: pet.Name,
          })
        });
      } catch (error) {
        console.error("Error updating Firestore:", error);
      }
    } else {
      alert('Please log in to unlike a pet');
    }
  };

  const handleVolunteerLike = async (volunteer) => {
    if (user?.email) {
      const userDocRef = doc(db, 'users', `${user.email}`);
      const isLiked = likedVolunteers.some(likedVolunteer => likedVolunteer.VolunteerID === volunteer.VolunteerID);

      if (isLiked) {
        // Unlike
        const updatedVolunteers = likedVolunteers.filter(likedVolunteer => likedVolunteer.VolunteerID !== volunteer.VolunteerID);
        setLikedVolunteers(updatedVolunteers);

        try {
          await updateDoc(userDocRef, {
            likedVolunteer: arrayRemove({
              VolunteerID: volunteer.VolunteerID,
              Date: volunteer.Date,
              Time: volunteer.Time,
              Duration: volunteer.Duration,
              AnimalShelter: volunteer.AnimalShelter,
              Prereq: volunteer.Prereq,
              Description: volunteer.Description,
            })
          });
        } catch (error) {
          console.error("Error updating Firestore:", error);
        }
      } else {
        // Like
        const updatedVolunteers = [...likedVolunteers, volunteer];
        setLikedVolunteers(updatedVolunteers);

        try {
          await updateDoc(userDocRef, {
            likedVolunteer: arrayUnion({
              VolunteerID: volunteer.VolunteerID,
              Date: volunteer.Date,
              Time: volunteer.Time,
              Duration: volunteer.Duration,
              AnimalShelter: volunteer.AnimalShelter,
              Prereq: volunteer.Prereq,
              Description: volunteer.Description,
            })
          });
        } catch (error) {
          console.error("Error updating Firestore:", error);
        }
      }
    } else {
      alert('Please log in to like or unlike a volunteer opportunity');
    }
  };

  return (
    <main>
      <section className='pb-5'>
        <NavSignin />
      </section>
    
      <section className='pt-10 w-full min-h-screen'>
        <h1 className='pt-10 flex justify-center font-palanquin text-4xl capitalize font-bold'>
          <span className='text-purple-900'>My Account</span>
        </h1>
        
        <section className='bg-hero bg-cover mt-20 mb-20 padding max-container flex flex-wrap gap-9 flex-col items-center'>
          <Card className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16 h-[90vh] bg-white">
            <h3 className="font-palanquin text-[35px] leading-normal flex justify-center font-bold">
              Liked <span className='text-purple-900'>&nbsp;Pets</span>
            </h3>
            <div className='pet-container'>
              {likedPets.length === 0 ? (
                <div className='pt-10 flex justify-center'>You haven't liked any pets yet!</div>
              ) : (
                likedPets.map(pet => (
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
                        <button className='adopt-btn font-palanquin text-[16px] rounded-md'>Adopt me!</button>
                        <button onClick={() => handleUnlike(pet)} className='like-btn pt-4'>
                          <FaHeart className='text-red-500 text-2xl' />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>

          <Card className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16 h-[90vh] bg-white">
            <h3 className="font-palanquin text-[35px] leading-normal flex justify-center font-bold">
              Liked <span className='text-purple-900'>&nbsp;Volunteer Opportunities</span>
            </h3>
            <div className='volunteers-container'>
              {likedVolunteers.length === 0 ? (
                <div className='pt-10 flex justify-center'>You haven't liked any volunteer opportunities yet!</div>
              ) : (
                likedVolunteers.map(volunteer => (
                  <div className="volunteer-card rounded-md" key={volunteer.VolunteerID}>
                    <button
                  onClick={() => handleLike(volunteer)}
                  className="like-btn absolute top-2 left-2"
                  style={{
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                >
                  {likedVolunteers.some(likedVolunteer => likedVolunteer.VolunteerID === volunteer.VolunteerID) ? (
                    <FaHeart className='text-red-500 text-2xl' />
                  ) : (
                    <FaRegHeart className='text-gray-300 text-2xl' />
                  )}
                </button>
                    <div className="mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal">
                      <span className="font-semibold">Date: </span>
                      {volunteer.Date}
                    </div>
                    <div className="mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal">
                      <span className="font-semibold">Time: </span>
                      {volunteer.Time}
                    </div>
                    <div className="mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal">
                      <span className="font-semibold">Duration: </span>
                      {volunteer.Duration}
                    </div>
                    <div className="mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal">
                      <span className="font-semibold">Animal Shelter: </span>
                      {volunteer.AnimalShelter}
                    </div>
                    <div className="mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal">
                      <span className="font-semibold">Prerequisites: </span>
                      {volunteer.Prereq}
                    </div>
                    <div className="mt-2 ml-3 mr-3 font-montserrat font-normal font-xl text-[15px] leading-normal text-left mb-2">
                      <span className="font-semibold">Description: </span>
                      {volunteer.Description}
                    </div>
                    <button className="adopt-btn font-palanquin text-[16px] rounded-md">Volunteer!</button>
                    
                  </div>
                ))
              )}
            </div>
          </Card>
        </section>
      </section>

      <div className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </div>
    </main>
  );
}

export default MyAccount;
