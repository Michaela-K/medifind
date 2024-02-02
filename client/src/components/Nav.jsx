import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-20 text-black bg-[#ADDDEE] drop-shadow-md min-w-[320px]'>
      <div className="container flex justify-between items-center h-24 mx-auto">

      <h1 className='w-full text-3xl font-bold text-[#24233E]'>MediFind</h1>
      <ul className='hidden md:flex items-center'>
        <li className='p-4  text-[1.25rem]'><a href="/">Home</a></li>
        <li className='p-4  text-[1.25rem]'>About</li>
        <li className='p-4  text-[1.25rem]'>Doctors</li>
        <li className='p-4  text-[1.25rem]'><a href="/jobsList">Jobs</a></li>
        <li className='p-4  text-[1.25rem]'><a href="/newjob">NewJob</a></li>
        <p className='flex w-16 justify-center'> | </p>
        <button className='text-[1.25rem] bg-transparent hover:bg-[#9098DB] hover:text-white py-2 px-4 mr-2 border border-[#5b588a] hover:border-transparent rounded'>Register</button>
        <button className='text-[1.25rem] bg-[#7B84D3] hover:bg-[#9098DB] text-white py-2.5 px-4 border-[#24233E] hover:border-transparent rounded'> LogIn </button>
      </ul>
      <div onClick={handleNav} className='block md:hidden z-10'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-full h-full bg-[#9098DB] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] min-w-[320px]'}>
        <h1 className='flex justify-center items-center w-full text-3xl font-bold mt-8 mb-8'>MediFind</h1>
          <li className='p-6 flex justify-center items-center text-2xl border-b border-gray-100'>Home</li>
          <li className='p-6 flex justify-center items-center text-2xl border-b border-gray-100'>About</li>
          <li className='p-6 flex justify-center items-center text-2xl border-b border-gray-100'>Doctors</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;