import React, { useState, useEffect, useRef } from "react";
import heroImg from "../images/heroImage.png";
import wavyline from "../images/wavyline.svg"
import support from "../images/support.svg"
import { CSSTransition } from "react-transition-group";
import "../index.css";

import { RiCustomerService2Fill } from "react-icons/ri";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { FaUserNurse } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { SiEasyeda } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Hero = () => {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  const nodeRef = useRef(null);
  const textNodeRef = useRef(null);

  useEffect(() => {
    setShowImage(true);
    setShowText(true);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section>
        <div className="w-full overflow-hidden">
          <div className="w-full container mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative z-20 flex flex-wrap items-end -m-24">
                <CSSTransition
                  in={showText}
                  timeout={1500} 
                  classNames="fade"
                  unmountOnExit
                  nodeRef={textNodeRef}
                >
                  <div
                    ref={textNodeRef}
                    className="flex flex-col h-[100vh] justify-center w-full lg:w-1/2 p-24 lg:pr-0 lg:pl-28 lg:py-28"
                  >
                    <h2 className="mb-7 text-6xl md:text-7xl xl:text-10xl font-bold">
                      QUALITY ONLINE HEALTH CARE YOU CAN TRUST
                    </h2>
                    <p className="mb-10 text-xl text-gray-900 font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                    <div className="mb-6 md:inline-block">
                      <button
                        className="py-4 px-6 text-[1.3rem] text-white font-normal border border-indigo-700 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                        type="button"
                      >
                        Get Started Today
                      </button>
                    </div>
                    <p className="text-lg text-gray-800 font-small">
                      No credit Card required
                    </p>
                  </div>
                </CSSTransition>
                <div className="w-full lg:w-1/2">
                  <CSSTransition
                    in={showImage}
                    timeout={1500}
                    classNames="slide"
                    unmountOnExit
                    nodeRef={nodeRef}
                  >
                    <img
                      ref={nodeRef}
                      className="w-[1500px] h-[auto]"
                      src={heroImg}
                      alt=""
                    ></img>
                  </CSSTransition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="w-full pt-40 pb-32 bg-white overflow-hidden">
        <div className="w-full container px-4 mx-auto">
          <h2 className="text-center text-6xl md:text-7xl font-bold w-full">
            How It Works
          </h2>
          <p className="text-center w-full mb-24 text-lg text-gray-900 font-medium mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2 ">
                  <div className="relative w-20 h-20 text-2xl font-bold font-heading bg-indigo-100 rounded-xl">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <FaUserNurse  className="w-10 h-10" />
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-center text-xl font-semibold leading-normal md:max-w-xs">
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit. Maecenas ultrices, orci vitae convallis mattis.
              </h3>
            </div>
            <div className="flex justify-center">
              <img
                className="w-[400px] h-[auto]"
                src={wavyline}
                alt=""
              ></img>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2 ">
                  <div className="relative w-20 h-20 text-2xl font-bold font-heading bg-indigo-100 rounded-xl">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <HiDocumentMagnifyingGlass  className="w-10 h-10" />
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-center text-xl font-semibold leading-normal md:max-w-xs">
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit. Maecenas ultrices, orci vitae convallis mattis.
              </h3>
            </div>

            <div className="flex justify-center">
              <img
                className="w-4300px] h-[auto]"
                src={wavyline}
                alt=""
              ></img>
            </div>
           
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2 ">
                  <div className="relative w-20 h-20 text-2xl font-bold font-heading bg-indigo-100 rounded-xl">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <FaCalendarPlus  className="w-10 h-10" />
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-center text-xl font-semibold leading-normal md:max-w-xs">
                Aliquam erat volutpat. Integer malesuada turpis id fringilla
                suscipit. Maecenas ultrices, orci vitae convallis mattis.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FEAUTURES SECTION */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto ">
          <h2 className="text-center text-6xl md:text-7xl font-bold w-full">
            Designed with you in Mind
          </h2>
          <p className="text-center w-full mb-10 text-lg text-gray-900 font-medium mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam
          </p>
          <div className="flex flex-wrap xl:items-center ">
            <div className="w-full md:w-1/2 p-8">
              <img
                className="w-[80%] transform hover:translate-x-16 transition ease-in-out duration-1000 "
                src={support}
                alt=""
              />
            </div>
            <div className="w-full flex justify-center md:w-1/2 p-8 ">
              <div className="md:max-w-md">
                <div className="flex flex-wrap -m-4">
                  <div className="w-auto p-4">
                    <div className="flex flex-wrap -m-2">
                      <div className="flex flex-1 flex-row p-2 gap-8">
                      <RiCustomerService2Fill className="text-3xl text-indigo-600" />
                        <h3 className="text-lg font-semibold">
                          Customer Support
                        </h3>
                      </div>
                      <div className="w-full p-2">
                        <div className="pb-8 border-b">
                          <p className="text-gray-600 text-xl font-semibold leading-normal">
                            Aliquam erat volutpat. Integer malesuada turpis id
                            fringilla suscipit. Maecenas ultrices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-4">
                    <div className="flex flex-wrap -m-2">
                      <div className="flex flex-1 flex-row p-2 gap-8">
                      <FaUserDoctor className="text-3xl text-indigo-600" />
                        <h3 className="text-lg font-semibold">
                          Vetted Doctors
                        </h3>
                      </div>
                      <div className="w-full p-2">
                        <div className="pb-8 border-b">
                          <p className="text-gray-600 text-xl font-semibold leading-normal">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-4">
                    <div className="flex flex-wrap -m-2">
                      <div className="flex flex-1 flex-row p-2 gap-8">
                      <SiEasyeda className="text-3xl text-indigo-600" />
                        <h3 className="text-lg font-semibold">
                          Quick and Easy to Use
                        </h3>
                      </div>
                      <div className="w-full p-2">
                        <p className="text-gray-600 text-xl font-semibold leading-normal">
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit. Exercitation veniam consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* TESTIMONIALS */}
      <section className="py-24 overflow-hidden">
        <h2 className="text-center text-6xl md:text-7xl font-bold w-full">
          Trusted by thousands of happy Clients.
        </h2>
        <p className="text-center w-full text-lg text-gray-900 font-medium mt-8 mb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam
        </p>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/3 p-8 bg-white rounded-lg">
              <div className="py-8 md:max-w-xs mx-auto text-justify">
                <div className="flex justify-center mb-6 -m-1">
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-[1.28rem] font-semibold leading-snug">
                  <span>
                    “Navigating through the job site was a breeze, with
                    intuitive design and clear instructions at every step. The ability to
                    search saved me hours,
                    and truly matched my skills and career aspirations.”
                  </span>
                </h3>
                <h3>
                  <p className="text-gray-600 font-medium">Emily Smith</p>
                </h3>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-8  bg-white rounded-lg">
              <div className="py-8 md:max-w-xs mx-auto text-justify">
                <div className="flex justify-center mb-6 -m-1">
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-[1.28rem] font-semibold leading-snug">
                  <span>
                    “I was thoroughly impressed by the quality of job listings
                    on the site. Each posting provided detailed information
                    about the role and company, and it was clear that the site
                    only featured reputable organizations.”
                  </span>
                </h3>
                <h3>
                  <p className="text-gray-600 font-medium">Jack Harris</p>
                </h3>
              </div>
            </div>
            <div className="w-full md:w-1/3 py-8 bg-white rounded-lg">
              <div className="py-8 md:max-w-xs mx-auto text-justify">
                <div className="flex justify-center mb-6 -m-1">
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z"
                        fill="#4F46E5"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-[1.28rem] font-semibold leading-snug">
                  <span>
                    “The resources and support offered by the site were
                    outstanding. The prompt and helpful customer service felt like I
                    had a personal career coach guiding me through my job search
                    journey.”
                  </span>
                </h3>
                <h3>
                  <p className="text-gray-600 font-medium">Sophia Nguyen</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FOOTER SECTION */}
      <div className="pt-24 pb-12 border-b border-gray-100 bg-[#ADDDEE]">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between flex-wrap gap-8">
      <a className='text-3xl font-bold text-[#24233E]' href="#"> MediFind
      </a>
      <ul className="flex items-center gap-6 flex-wrap">
        <li className="text-[1.25rem] text-gray-800 hover:text-opacity-70 transition duration-200"><a href="#">Home</a></li>
        <li className="text-[1.25rem] text-gray-800 hover:text-opacity-70 transition duration-200"><a href="#">About</a></li>
        <li className="text-[1.25rem] text-gray-800 hover:text-opacity-70 transition duration-200"><a href="#">Doctors</a></li>
        <li className="text-[1.25rem] text-gray-800 hover:text-opacity-70 transition duration-200"><a href="#">Jobs</a></li>
        <li className="text-[1.25rem] text-gray-800 hover:text-opacity-70 transition duration-200"><a href="#">NewJob</a></li>
      </ul>
      <div className="flex items-center gap-6 flex-wrap">
        <a className="text-black hover:text-gray-600 transition duration-200" href="#">
         <FaTwitter  className="text-3xl text-indigo-600"/>
        </a>
        <a className="text-black hover:text-gray-600 transition duration-200" href="#">
          <FaLinkedin  className="text-3xl text-indigo-600"/>
        </a>
        <a className="text-black hover:text-gray-600 transition duration-200" href="#">
          <FaInstagram  className="text-3xl text-indigo-600"/>
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Hero;
