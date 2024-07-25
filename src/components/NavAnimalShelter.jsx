import { hamburger } from "../assets/icons";
import { useContext } from "react";
import  {AuthContext}  from "../components/AppContext/AppContext";
import React, { useState } from 'react';

const NavAnimalShelter = () => {
  const { signOutUser, user, userData } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src= "denovo.png"
            alt='logo'
            width={130}
            height={29}
            className='m-0 w-[200px] h-[50px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden font-montserrat leading-normal text-lg text-slate-gray'>
         <a href='/signin-home' className = 'no-underline text-slate-gray pt-3'> Home </a>
         <a href='/add-pets' className = 'no-underline text-slate-gray pt-3'> Add Pets</a>
         <a href='/delete-pets' className = 'no-underline text-slate-gray pt-3 '> Delete Pets </a>
         <a href='/add-volunteers' className = 'no-underline text-slate-gray pt-3'> Add Volunteer Opp</a>
         <a href='/delete-volunteers' className = 'no-underline text-slate-gray pt-3'> Delete Volunteer Opp</a>
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
         <a href='/Home' className = 'no-underline text-black' onClick={signOutUser}>Logout</a>
        </div>
        <div className='hidden max-lg:block'>
          <div className={`off-screen-menu ${isMenuOpen ? 'active' : ''}`}> 
            <ul>
              <li><a href="/signin-home">Home</a></li>
              <li><a href="/add-pets">Add Pets</a></li>
              <li><a href="/delete-pets">Delete Pets</a></li>
              <li><a href="/add-volunteers">Add Volunteer Opp</a></li>
              <li><a href="/delete-volunteers">Delete Volunteer Opp</a></li>
              <li><a href='/Home' className = 'no-underline' onClick={signOutUser}>Logout</a></li>
            </ul>
          </div>
          <div className={`ham-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavAnimalShelter;