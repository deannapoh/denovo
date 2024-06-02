import {petsforadoption} from '../constants';
import PetsForAdoptionCard from '../components/PetsForAdoptionCard';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const Pets = () => {
  return (
    <section id='pets' className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>
        Animals Looking For Forever <span className='text-purple-900'> Homes </span> 
      </h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Each one of these furry friends have a unique story and a heart brimming with unconditional love. Adopt a companion and help us give them the second chance they deserve!
      </p>
    </div>

    <div className='mt-10 mb-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
      {petsforadoption.map((pet) => (
        <PetsForAdoptionCard key={pet.name} {...pet} />
      ))}
    </div>
    <Button label='More' iconURL={arrowRight}/>
  </section>
);
};

export default Pets