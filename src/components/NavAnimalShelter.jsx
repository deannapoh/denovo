import { hamburger } from "../assets/icons";

const NavAnimalShelter = () => {
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
         <a href='/Pets' className = 'no-underline text-slate-gray pt-3 '> Pets </a>
         <a href='/help-us' className = 'no-underline text-slate-gray pt-3'> Volunteer</a>
         <a href='/add-pets' className = 'no-underline text-slate-gray pt-3'> Add Pets</a>
         <a href='/add-volunteers' className = 'no-underline text-slate-gray pt-3'> Add Volunteer Opportunities</a>
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a className = 'no-underline text-black'>Log out</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavAnimalShelter;