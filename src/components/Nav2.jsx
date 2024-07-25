import React, { useState } from 'react';

const Nav2 = () => {
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
         <a href='/Home' className = 'no-underline text-slate-gray pt-3'> Home </a>
         <a href='/About' className = 'no-underline text-slate-gray pt-3'> About Us </a>
         <a href='/Pets' className = 'no-underline text-slate-gray pt-3 '> Pets </a>
         <a href='/help-us' className = 'no-underline text-slate-gray pt-3'> Volunteer/Donate</a>
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/sign-in' className = 'no-underline text-black'>Sign in</a>
          <span>/</span>
          <a href='/sign-up' className = 'no-underline text-black'>Sign up</a>
        </div>
        <div className='hidden max-lg:block'>
          <div className={`off-screen-menu ${isMenuOpen ? 'active' : ''}`}> 
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/pets">Pets</a></li>
              <li><a href="/help-us">Volunteer/Donate</a></li>
              <li><a href="/sign-in">Sign in</a></li>
              <li><a href="/sign-up">Sign up</a></li>
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

export default Nav2;