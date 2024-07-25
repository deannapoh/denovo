import React from 'react'
import NavSignin from '../components/NavSignin'

const NotAuthorized = () => {
    return (
        <main> 
          <section className = 'pb-5'> <NavSignin/> </section>
        
          <section className='pt-10 w-full min-h-screen'>
            <h2 className='pt-10 flex justify-center font-palanquin text-4xl capitalize font-bold'>  
          <span className='text-purple-900'>Sorry, you are not allowed to access this page :( </span>
          </h2>
          </section>
          </main>
  )
}

export default NotAuthorized