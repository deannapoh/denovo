import React from 'react'
import Nav from "../components/Nav";
import {
  Footer,
  Hero,
  Pets,
  HelpUs,
  Subscribe,
  AboutUs,
} from "../sections";

const Home = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <Pets />
      </section>
      <section className='padding'>
        <AboutUs />
      </section>
      <section className='padding-x py-10'>
        <HelpUs />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      
    </main>
  )
}

export default Home