import {pets, statistics} from '../constants';
import Button from "../components/Button";
import { dog } from "../assets/images";
import { arrowRight } from "../assets/icons";
import PetCard from "../components/PetCard";
import {useState} from 'react';

const Hero = () => {
  const [bigPetImg, setBigPetImg] = useState(dog);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Bring A Pet
          </span>
          <br />
          <span className='text-purple-900 inline-block mt-3'>Home</span> Today!
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          "Best friends come in all shapes and sizes."
        </p>

        <Button label='Lets go!' iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-14 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}
              </p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigPetImg}
          alt='pets'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {pets.map((pet) => (
            <div key={pet}>
              <PetCard
                imgURL={pet}
                changeBigPetImage={(pet) => setBigPetImg(pet)}
                bigPetImg={bigPetImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;