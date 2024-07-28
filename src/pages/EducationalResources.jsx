import React from 'react';
import Nav2 from '../components/Nav2';
import Footer from "../sections/Footer";
import {eduresource1, eduresource2, eduresource3} from "../assets/images";


const EducationalResources = () => {
  return (
    <>
    <section className="pb-5">
    <Nav2 />
   </section>
   
   <section className = 'padding'>
   <div className="flex flex-col items-center">
        <h1 className="text-4xl font-palanquin font-bold text-center mt-4">
               <span className="text-purple-900">Adopt</span>, Not Shop!
        </h1>
        <div className="flex justify-center">
            <p className="lg:max-w-5xl mt-4 font-montserrat text-slate-gray">
              Discover the joy of giving a deserving animal a second chance. Adoption not only saves lives but also helps reduce the overpopulation crisis and supports the countless animals in need.
              By adopting, you’re choosing to make a compassionate choice that transforms both your life and theirs.
              <br />
              <br />
              Still unsure? Read on to find out why adopting is a win-win for you and your new best friend!
            </p>
        </div>
    </div>

    <div className="flex flex-col items-center">
        <h2 className="text-[40px] font-palanquin font-bold text-center mt-4">
            Reason 1: <span className="text-purple-900">Say no to puppy mills!</span>
        </h2>
        <img 
         src = {eduresource1}
         alt = "puppy mill"
         width={600}
         height = {300}
         className = 'mt-4 mb-4'
        />
        <p className='lg:max-w-5xl mt-4 font-montserrat text-slate-gray info-text'>
        Most of the animals in pet shops are taken from puppy mills. Fuelled by profit, the majority of puppy mills don’t care about the wellbeing of animals, simply using them as mass breeding machines and with little attention being paid to their health, food and care. 
        </p>
        <p className='lg:max-w-5xl mt-4 font-montserrat text-slate-gray info-text'>
        Pregnant dogs in puppy mills can be locked within cages for the entire duration of their lives, made to churn out puppies until their bodies give out. 
        After these dogs are unable to produce any more puppies, they are heartlessly abandoned and have to endure psychological stress and trauma for the rest of their lives.
        </p>
        <p className='lg:max-w-5xl mt-4 font-montserrat text-slate-gray info-text'>
        Furthermore, puppies are taken from their mothers almost immediately after birth, only to endure their own traumatic experiences of crowding, malnutrition, and unsanitary conditions before being shipped to pet stores.
        Puppies with deformities often are not even able to be sent to pet stores as they are viewed as ‘undesirable’, and are often dumped by roads or in the wilderness.
        </p>
        <p className='lg:max-w-5xl mt-4 font-montserrat text-slate-gray info-text'>
        When you adopt, you’re saying no to an awful practice and keeping money out of their pockets and supporting animal welfare at the same time!
        </p>
       
    </div>

    <div className = 'flex justify-center max-lg:flex-col w-full max-container'> 
      <div className = "mt-10 flex flex-1 flex-col justify-center pl-28 py-5">
        <h2 className='font-palanquin text-[40px] capitalize font-bold lg:max-w-lg'>
          Reason 2:
          <br/> 
          <span className='text-purple-900'> Adopting is more affordable! </span>
        </h2>
    
        <p className='mt-5 lg:max-w-lg info-text'>
        Depending on the breed, the price of some pets sold in a pet shop can go up to a several thousand dollars. 
        On the other hand, adopting a pet is much more affordable, as most adopters are only required to pay the basic adoption fee and at most, the vet fee incurred when the animal first came to the shelter. 
        </p>
        <p className = "mt-6 lg:max-w-lg info-text">
        Since adopting a pet not only provides you with a new best friend but also does so at a more affordable price, why not choose adoption? You’ll save a life, support ethical practices, and bring home a companion who’s ready to offer unconditional love — all while keeping your budget intact. 
        </p>
        </div>
      
      <div className = "flex-1 flex pt-28">
        <img 
         src = {eduresource2}
         alt = "kitten playing"
         width={600}
         height = {300}
         className = 'mb-5'
        />
      </div>
    </div>

    <div className = 'flex justify-center max-lg:flex-col w-full max-container'> 
      
      <div className = "flex-1 flex pt-9 pl-28">
        <img 
         src = {eduresource3}
         alt = "happy dog with owner"
         width={700}
         height = {200}
         className = 'mb-5'
        />
      </div>

      <div className = "flex flex-1 flex-col justify-center py-5">
        <h2 className='font-palanquin text-[40px] capitalize font-bold lg:max-w-lg pl-28'>
          Reason 3:
          <br/> 
          <span className='text-purple-900'> You save a life! </span>
        </h2>
    
        <p className='mt-5 lg:max-w-lg info-text pl-28'>
        This may be the biggest reason of all. 
        You’re giving a dog, cat, horse, or another animal - an animal who has previously been abused, abandoned or left to fend for themselves on the streets - a second chance at life. 
        By adopting, you are giving them a safe and loving home in which it can learn to be happy and healthy again, which is something that all animals deserve.
        </p>
        <p className = "mt-6 lg:max-w-lg info-text pl-28">
        At the same time, adopting a pet frees up space in animal shelters for another animal who desperately needs it, allowing them to also save one more life. 
        </p>
        </div>
    </div>
   </section>

   <div className="bg-black padding-x padding-t pb-8">
        <Footer />
    </div>
   </>
  )
}

export default EducationalResources