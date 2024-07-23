import React, { useContext, useState, useEffect } from "react";
import { VolunteerContext } from "../components/VolunteerContext";
import NavSignin from "../components/NavSignin";
import Footer from "../sections/Footer";
import {sosd, spca, guineapigrescuesg, animalloversleague, kittensanctuarysg, oscas} from "../assets/images";

const HelpUs = () => {
  const { volunteers } = useContext(VolunteerContext);

  // State variables for filters and dropdown options
  const [searchDate, setSearchDate] = useState(""); 
  const [animalShelterFilter, setAnimalShelterFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [uniqueDurations, setUniqueDurations] = useState([]);

  // Effect to update unique durations when animalShelterFilter changes
  useEffect(() => {
    if (animalShelterFilter) {
      const filteredDurations = [...new Set(volunteers.filter(volunteer => volunteer.AnimalShelter.toLowerCase() === animalShelterFilter.toLowerCase()).map(volunteer => volunteer.Duration))];
      setUniqueDurations(filteredDurations);
    } else {
      const allDurations = [...new Set(volunteers.map(volunteer => volunteer.Duration))];
      setUniqueDurations(allDurations);
    }
  }, [animalShelterFilter, volunteers]);

  // Filtered volunteers based on user input
  const filteredVolunteers = volunteers.filter((volunteer) => {
    return (
      (searchDate ? volunteer.Date.toLowerCase().includes(searchDate.toLowerCase()) : true) &&
      (animalShelterFilter ? volunteer.AnimalShelter.toLowerCase() === animalShelterFilter.toLowerCase() : true) &&
      (durationFilter ? volunteer.Duration === durationFilter : true)
    );
  });

  // Function to handle changes in animal shelter filter
  const handleAnimalShelterFilterChange = (e) => {
    setAnimalShelterFilter(e.target.value);
    setDurationFilter(""); // Reset duration filter when animal shelter filter changes
  };

  return (
    <>
      <section className="pb-5">
        <NavSignin />
      </section>
      <section className="padding">
        {volunteers.length !== 0 && (
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-palanquin font-bold text-center mt-4">
              Want to <span className="text-purple-900">Help?</span>
            </h2>
            <div className="flex justify-center">
              <p className="lg:max-w-5xl mt-4 font-montserrat text-slate-gray">
                Your support means the world to us! Whether you volunteer your time, donate to our cause, or spread awareness, every action makes a difference in the lives of our furry friends.
                <br />
                <br />
                Join us in our mission to provide loving homes and care for animals in need. Together, we can make a lasting impact and create a brighter future for everyone.
              </p>
            </div>
          </div>
        )}
        
        <section> 
          <h1 className = 'text-4xl font-palanquin font-bold text-center text-purple-900'> Volunteer </h1>
        <div className="filters flex gap-20 leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 mt-10 mb-3 ml-8">
          <input
            type="text"
            placeholder="Search by date..."
            className="form-input"
            style={{ border: '1px solid slategray', padding: '8px', borderRadius: '4px' }}
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />

          <select
            className="form-select"
            value={animalShelterFilter}
            onChange={handleAnimalShelterFilterChange}
          >
            <option value="">All Animal Shelters</option>
            {[...new Set(volunteers.map((volunteer) => volunteer.AnimalShelter))].map((shelter) => (
              <option key={shelter} value={shelter}>
                {shelter}
              </option>
            ))}
          </select>

          <select
            className="form-select"
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
          >
            <option value="">All Durations</option>
            {uniqueDurations.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>

        <div className="volunteers-container">
          {filteredVolunteers.length === 0 && (
            <div className="pt-10 flex justify-center">
              No help needed at the moment! Thanks for your concern :D
            </div>
          )}
          {filteredVolunteers.map((volunteer) => (
            <div className="volunteer-card rounded-md" key={volunteer.VolunteerID}>
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
          ))}
        </div>
        </section>
        
        <section>
        <h1 className = 'text-4xl font-palanquin font-bold text-center text-purple-900'> Donate </h1>
        <div className="flex justify-center">
              <p className="lg:max-w-5xl mt-4 font-montserrat text-slate-gray">
              Your generosity can make a world of difference for our furry friends. Every donation helps provide food, medical care, and a safe shelter for animals in need. Click on the respective animal shelters below to donate to them!
              </p>
        </div>
        <div className="donate-container">
  <div className="donate-card rounded-md mt-8 mx-auto max-w-xs text-center p-4">
    <div className="mt-2 font-montserrat font-normal font-xl text-[15px]">
    <img 
        src = {sosd}
        alt = "sosd"
        width={500}
        height = {300}
    />
      <span className="font-semibold">SOSD</span>
    </div>
    <button className="adopt-btn font-palanquin text-[16px] rounded-md mb-4 w-full">
      <a href="https://sosd.org.sg/donation/" target="_blank" className="no-underline text-white block w-full">
        Click to Donate!
      </a>
    </button>
  </div>

  <div className="donate-card rounded-md mt-8 mx-auto max-w-xs text-center p-4">
    <div className="mt-2 font-montserrat font-normal font-xl text-[15px]">
    <img 
        src = {spca}
        alt = "spca"
        width={600}
        height = {300}
        className = 'mb-5'
    />
      <span className="font-semibold">SPCA</span>
    </div>
    <button className="adopt-btn font-palanquin text-[16px] rounded-md mt-2 mb-4 w-full">
      <a href="https://portal.spca.org.sg/Donation/DonateNow" target="_blank" className="no-underline text-white block w-full">
        Click to Donate!
      </a>
    </button>
  </div>

  <div className="donate-card rounded-md mt-8 mx-auto max-w-xs text-center p-4">
    <div className="mt-2 font-montserrat font-normal font-xl text-[15px]">
    <img 
        src = {oscas}
        alt = "oscas"
        width={600}
        height = {300}
        className = 'mb-6'
    />
      <span className="font-semibold">OSCAS</span>
    </div>
    <button className="adopt-btn font-palanquin text-[16px] rounded-md mt-2 mb-4 w-full">
      <a href="https://www.oscas.sg/help-donate" target="_blank" className="no-underline text-white block w-full">
        Click to Donate!
      </a>
    </button>
  </div>

  <div className="donate-card rounded-md mt-8 mx-auto max-w-xs text-center p-4">
    <div className="mt-2 font-montserrat font-normal font-xl text-[15px]">
    <img 
        src = {guineapigrescuesg}
        alt = "guinea pig rescue singapore"
        width={600}
        height = {300}
        className = 'mb-12'
    />
      <span className="font-semibold">Guinea Pig Rescue Singapore</span>
    </div>
    <button className="adopt-btn font-palanquin text-[16px] rounded-md mt-2 mb-4 w-full">
      <a href="https://www.guineapigrescuesg.com/donate" target="_blank" className="no-underline text-white block w-full">
        Click to Donate!
      </a>
    </button>
  </div>

  <div className="donate-card rounded-md mt-8 mx-auto max-w-xs text-center p-4">
    <div className="mt-2 font-montserrat font-normal font-xl text-[15px]">
    <img 
        src = {kittensanctuarysg}
        alt = "kitten sanctuary sg"
        width={600}
        height = {300}
        className = 'mb-12'
    />
      <span className="font-semibold">Kitten Sanctuary SG</span>
    </div>
    <button className="adopt-btn font-palanquin text-[16px] rounded-md mt-2 mb-4 w-full">
      <a href="https://www.kittensanctuarysg.org/donate" target="_blank" className="no-underline text-white block w-full">
        Click to Donate!
      </a>
    </button>
  </div>

  <div className="donate-card rounded-md mt-8 mx-auto max-w-xs text-center p-4">
    <div className="mt-2 font-montserrat font-normal font-xl text-[15px]">
    <img 
        src = {animalloversleague}
        alt = "animal lovers league"
        width={600}
        height = {300}
        className = 'mb-12'
    />
      <span className="font-semibold">Animal Lovers League</span>
    </div>
    <button className="adopt-btn font-palanquin text-[16px] rounded-md mt-2 mb-4 w-full">
      <a href="https://www.animalloversleague.com/donate" target="_blank" className="no-underline text-white block w-full">
        Click to Donate!
      </a>
    </button>
  </div>
</div>
        </section>
      </section>
      <div className="bg-black padding-x padding-t pb-8">
        <Footer />
      </div>
    </>
  );
};

export default HelpUs;
