import React from 'react'
import NavSignin from '../components/NavSignin';
import Footer from '../sections/Footer';

const MyAccount = () => {
  return (
    <main> 
      <section className = 'pb-5'> <NavSignin/> </section>
    
      <section className='pt-10 w-full min-h-screen'>
        <h1 className='pt-10 flex justify-center font-palanquin text-4xl capitalize font-bold'>  
      <span className='text-purple-900'>My Account </span>
      </h1>
      
      <section className='bg-hero bg-cover mt-20 mb-20 padding max-container flex flex-wrap gap-9 flex-col items-center'>
  <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-20 bg-white mb-9">
    <h3 className="font-palanquin text-[35px] leading-normal flex justify-center font-bold">Liked <span className='text-purple-900'>&nbsp;Pets</span></h3>
    <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray flex justify-center">Through streamlining the adoption and volunteering process, we aim to inspire Singaporeans to adopt not shop and encourage volunteerism and support for animal welfare.</p>
  </div>

  <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-20 bg-white">
    <h3 className="font-palanquin text-[35px] leading-normal flex justify-center font-bold">Liked <span className='text-purple-900'>&nbsp;Volunteer Opportunities</span></h3>
    <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray flex justify-center">Through streamlining the adoption and volunteering process, we aim to inspire Singaporeans to adopt not shop and encourage volunteerism and support for animal welfare.</p>
  </div>
</section>


      </section> 

      

      <div className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </div>
    
      </main>
  )
}

export default MyAccount