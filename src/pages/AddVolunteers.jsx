import React, { useState } from 'react';
import { db } from '../components/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import NavAnimalShelter from '../components/NavAnimalShelter';

const AddVolunteers = () => {
  const [volunteerDate, setVolunteerDate] = useState('');
  const [volunteerTime, setVolunteerTime] = useState('');
  const [volunteerDuration, setVolunteerDuration] = useState('');
  const [volunteerPrereq, setVolunteerPrereq] = useState('');
  const [volunteerAnimalShelter, setVolunteerAnimalShelter] = useState('');
  const [volunteerDescription, setVolunteerDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const addVolunteer = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'volunteers'), {
        Date: volunteerDate,
        Time: volunteerTime,
        Duration: volunteerDuration,
        Prereq: volunteerPrereq,
        AnimalShelter: volunteerAnimalShelter,
        Description: volunteerDescription,
      });

      // Clear input fields and error state on success
      setVolunteerDate('');
      setVolunteerTime('');
      setVolunteerDuration('');
      setVolunteerPrereq('');
      setVolunteerAnimalShelter('');
      setVolunteerDescription('');
      setError('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className = 'container'>
    <section className = 'pb-5'> <NavAnimalShelter/> </section>
   <section className = 'm-5 w-full'> 
   <h1 className = 'text-purple-900 flex justify-center font-palanquin text-4xl capitalize font-bold'> Add Volunteer Opportunities </h1>
   </section>

   <section className = 'padding flex flex-col gap-4 pb-10'> 
   <form autoComplete = "off" className = 'form-group' onSubmit = {addVolunteer}> 
   <label htmlFor = "volunteer-date"> Date (Please include day as well) </label>
   <br/>
   <input type= 'text' className = 'form-control pb-2 pt-2' required 
     //in the onChange event, we are setting the state as to whatever the user enters in that field
   onChange={(e) => setVolunteerDate(e.target.value)} value={volunteerDate}/>
   <br/>
   <label htmlFor = "volunteer-time"> Time </label>
   <br/>
   <input type= 'text' className = 'form-control pb-2 pt-2' required
   onChange={(e) => setVolunteerTime(e.target.value)} value={volunteerTime}/>
   <br/>
   <label htmlFor = "volunteer-duration"> Duration </label>
   <br/>
   <input type= 'text' className = 'form-control pb-2 pt-2' required
   onChange={(e) => setVolunteerDuration(e.target.value)} value={volunteerDuration}/>
   <br/>
   <label htmlFor = "volunteer-animalshelter"> Animal Shelter</label>
   <br/>
   <input type= 'text' className = 'form-control pb-2 pt-2' required
   onChange={(e) => setVolunteerAnimalShelter(e.target.value)} value={volunteerAnimalShelter}/>
   <br/>
   <label htmlFor = 'volunteer-prereq'> Prerequisites to volunteer</label>
   <br/>
   <input type ='text' className = 'form-control pb-2 pt-2' required
   onChange={(e) => setVolunteerPrereq(e.target.value)} value={volunteerPrereq}/>
   <br/>
   <label htmlFor = "volunteer-description"> Description of work</label>
   <br/>
   <input type= 'text' className = 'form-control pt-2 pb-5' required
   onChange={(e) => setVolunteerDescription(e.target.value)} value={volunteerDescription}/>
   <br/>
   <button className = 'btn btn-success btn-md mybtn'> ADD </button>
   <p className = 'mt-1'> * Details might take a while to upload. Please wait until you see the message 'Volunteer opportunity added successfully!'</p>
   </form>
   {error && <span>{error}</span>}
   {success && <span className='success'>Volunteer opportunity added successfully!</span>}
   </section>
   
   </div>
)
}

export default AddVolunteers
