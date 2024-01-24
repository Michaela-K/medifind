import React from 'react';
import heroImg from '../images/heroImage.png'
// import Typed from 'react-typed';

const Hero = () => {
  return (
    <section className='flex flex-col justify-between bg-[#ADDDEE] h-screen lg:flex-row'>
      <div className='max-w-[70vw] mt-[-40px] h-[100vh] mx-auto flex flex-col justify-center pl-0 md:max-w-[85vw] sm:max-w-[80vw] lg:pl-20 md:mb-0'>
        <h1 className='lg:text-7xl md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
        QUALITY ONLINE HEALTH CARE 
        {/* <br/> */}
        YOU CAN TRUST
        </h1>
        <div className='flex'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing to
          </p>
          {/* <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#9098DB] w-[200px] rounded-md font-medium my-6 py-3 text-white'>Get Started</button>
      </div>
      <div className="flex items-center justify-center w-[50vw] h-[100vh] mx-auto">
        <img className='w-[auto] xl:h-[90vh] lg:h-[70vh] md:h-[50vh] sm:h-[40vh]' src={heroImg} alt=''></img>
      </div>
    </section>
  );
};

export default Hero;