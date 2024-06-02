const PetsForAdoptionCard = ({imgURL, name, breed, age, animal}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img 
      src={imgURL} 
      alt={name} 
      className='w-[280px] h-[280px]' />
      <h3 className='mt-2 text-2xl leading-normal font-bold font-palanquin text-purple-900'>
        {name}
      </h3>
      <p className='mt-2 font-montserrat font-xl leading-normal'>
        <span className = "font-semibold">Animal: </span>{animal}
      </p>
      <p className='mt-2 font-montserrat font-xl leading-normal'>
        <span className = "font-semibold">Breed: </span>{breed}
      </p>
      <p className='mt-2 font-montserrat font-xl leading-normal'>
        <span className = "font-semibold">Age: </span>{age}
      </p>
    </div>
  );
};

export default PetsForAdoptionCard