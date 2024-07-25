import React, { useContext, useState, useEffect } from "react";
import { VolunteerContext } from "../components/VolunteerContext";
import NavAnimalShelter from "../components/NavAnimalShelter";
import Footer from "../sections/Footer";
import { doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db, auth, onAuthStateChanged } from '../components/firebase/firebase';
import { allowedEmails } from '../constants';

const DeleteVolunteers = () => {
    const { volunteers, setVolunteers } = useContext(VolunteerContext);
    const [deleteMode, setDeleteMode] = useState(false);
    const [searchDate, setSearchDate] = useState(""); // State for search input
    const [animalShelterFilter, setAnimalShelterFilter] = useState(""); // State for animal shelter filter
    const [isAllowed, setIsAllowed] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (allowedEmails.includes(user.email)) {
          setIsAllowed(true);
        } else {
          navigate("/not-authorized"); // Redirect to a not-authorized page
        }
      } else {
        navigate("/sign-in"); 
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  
    const handleDelete = async (volunteerId) => {
      try {
        await deleteDoc(doc(db, 'volunteers', volunteerId));
        setVolunteers((prevVolunteers) => prevVolunteers.filter(volunteer => volunteer.VolunteerID !== volunteerId));
      } catch (error) {
        console.error("Error removing document: ", error);
      }
    };
  
    const toggleDeleteMode = () => {
      setDeleteMode(!deleteMode);
    };
  
    const filteredVolunteers = volunteers.filter((volunteer) => {
        return (
          (searchDate ? volunteer.Date.toLowerCase().includes(searchDate.toLowerCase()) : true) &&
          (animalShelterFilter ? volunteer.AnimalShelter.toLowerCase() === animalShelterFilter.toLowerCase() : true)
        );
      });
    
      const uniqueAnimalShelters = [...new Set(volunteers.map((volunteer) => volunteer.AnimalShelter))];
      
      if (!isAllowed) {
        return <div>Checking authorization...</div>; 
      }

  return (
    <>
    <section className = 'pb-5'> <NavAnimalShelter/> </section>
    <section className = 'padding'> 
    <div className = 'flex justify-center'> 
    <input
            type='text'
            placeholder='Search by date...'
            className='form-input'
            style={{ border: '1px solid slategray', padding: '8px', borderRadius: '4px' }}
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
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
          
          </div>

    <button className='toggle-delete-btn ml-10' onClick={toggleDeleteMode}>
            {deleteMode ? 'Done' : 'Delete Volunteer Opportunity'}
          </button>

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

           {deleteMode && (
                <button className='delete-btn' onClick={() => handleDelete(volunteer.VolunteerID)}>➖</button>
              )}
        
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

export default DeleteVolunteers