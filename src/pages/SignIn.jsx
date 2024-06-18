import React, { useState, useContext, useEffect } from "react";
import Nav2 from '../components/Nav2';
import { volunteer,dog4,dogpaw } from "../assets/images";
import Footer from '../sections/Footer';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import Button from "../components/Button";
  import { Input } from "@material-tailwind/react";


const Signin = () => {

  return (
    <main> 
        <section className = 'pb-5'> <Nav2/> </section>
        <section className='pt-10 w-full min-h-screen'>

<section className = 'mt-20 mb-20 padding max-container flex flex-wrap gap-9 bg-primary'>
        <div className = "flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-20 bg-white">
        <h3 className = " font-palanquin text-[35px] leading-normal flex justify-center font-bold">Sign<span className= 'text-purple-900'>&nbsp;In</span></h3>
        <CardBody className="flex flex-col gap-4 pt-10 pb-10">
                <div className= 'mb-5'>
                <Input label="Email" size="lg" className="rounded-[20px]" />
                </div>
                <Input label="Password" size="lg" className="rounded-[20px]" />
                <div className="-ml-2.5"></div>

            </CardBody>
            <CardFooter className="pt-0">
    
                <div className="flex justify-center">
                    <Button label='Sign in' />
                </div>

<div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

                <div className= 'mb-5'>
                <button className="mt-5 w-full flex justify-center items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                    <span>Continue with Google</span>
                </button>
                </div>

                <Typography variant="small" className="mt-6 flex justify-center">
                    Don't have an account?
                    
                    <Typography 
                    as="a"
                    href= '/sign-up'
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold">
                        Sign up

                    </Typography>
                    
                </Typography>
            </CardFooter>

        </div>
        </section>

    <div className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </div>
      </section>
      
    
    </main>

  )
}

export default Signin