import React from "react";
import heroImg from "../images/heroImage.png";
// import Typed from 'react-typed';

const Hero = () => {
  return (
    <>
    {/* HERO SECTION */}
<section>
  <div className="w-full overflow-hidden">
    <div className="w-full container mx-auto">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative z-20 flex flex-wrap items-end -m-24">
          <div className="flex flex-col h-[100vh] justify-center w-full lg:w-1/2 p-24 lg:pr-0 lg:pl-28 lg:py-28">
            <h2 className="mb-7 text-6xl md:text-7xl xl:text-10xl font-bold">QUALITY ONLINE HEALTH CARE YOU CAN TRUST</h2>
            <p class="mb-10 text-lg text-gray-900 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <div className="mb-6 md:inline-block">
              <button 
                className="py-4 px-6 text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" 
                type="button">Get Started Today
              </button>
            </div>
            <p class="mb-10 text-lg text-gray-800 font-small">No credit Card required</p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="w-[1500px] h-[auto]"
              src={heroImg}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* HOW IT WORKS SECTION */}
      <section className="w-full pt-40 pb-32 bg-white overflow-hidden">
        <div className="w-full container px-4 mx-auto">
          <h2 className="text-center text-6xl md:text-7xl font-bold w-full mb-24">
           How  It Works
          </h2>
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
              </h3>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl text-white font-bold bg-indigo-600 rounded-full">
                    {/* <img className="absolute top-0 left-0" src="flaro-assets/images/how-it-works/gradient.svg" alt=""> */}
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      2
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
              </h3>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      3
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
              </h3>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      4
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
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
    <p class="text-center w-full mb-10 text-lg text-gray-900 font-medium mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam</p>
    <div className="flex flex-wrap xl:items-center ">
      <div className="w-full md:w-1/2 p-8">
        <img className="w-[80%] transform hover:translate-x-16 transition ease-in-out duration-1000 " src={heroImg } alt=""/>
      </div>
      <div className="w-full flex justify-center md:w-1/2 p-8 ">
        <div className="md:max-w-md">
          <div className="flex flex-wrap -m-4">
            <div className="w-auto p-4">
              <div className="flex flex-wrap -m-2">
                <div className="w-auto p-2">
                  <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div className="flex-1 p-2">
                  <h3 className="text-lg font-semibold">Customer Support</h3>
                </div>
                <div className="w-full p-2">
                  <div className="pb-8 border-b">
                    <p className="text-gray-600 font-medium leading-relaxed">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto p-4">
              <div className="flex flex-wrap -m-2">
                <div className="w-auto p-2">
                  <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83333 14.0001H22.1667M5.83333 14.0001C4.54467 14.0001 3.5 12.9554 3.5 11.6667V7.00008C3.5 5.71142 4.54467 4.66675 5.83333 4.66675H22.1667C23.4553 4.66675 24.5 5.71142 24.5 7.00008V11.6667C24.5 12.9554 23.4553 14.0001 22.1667 14.0001M5.83333 14.0001C4.54467 14.0001 3.5 15.0448 3.5 16.3334V21.0001C3.5 22.2887 4.54467 23.3334 5.83333 23.3334H22.1667C23.4553 23.3334 24.5 22.2887 24.5 21.0001V16.3334C24.5 15.0448 23.4553 14.0001 22.1667 14.0001M19.8333 9.33342H19.845M19.8333 18.6667H19.845" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div className="flex-1 p-2">
                  <h3 className="text-lg font-semibold">Vetted Doctors</h3>
                </div>
                <div className="w-full p-2">
                  <div className="pb-8 border-b">
                    <p className="text-gray-600 font-medium leading-relaxed">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto p-4">
              <div className="flex flex-wrap -m-2">
                <div className="w-auto p-2">
                  <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 11.6666H24.5M8.16667 17.4999H9.33333M14 17.4999H15.1667M7 22.1666H21C22.933 22.1666 24.5 20.5996 24.5 18.6666V9.33325C24.5 7.40026 22.933 5.83325 21 5.83325H7C5.067 5.83325 3.5 7.40026 3.5 9.33325V18.6666C3.5 20.5996 5.067 22.1666 7 22.1666Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div className="flex-1 p-2">
                  <h3 className="text-lg font-semibold">Quick and Easy to Use</h3>
                </div>
                <div className="w-full p-2">
                  <p className="text-gray-600 font-medium leading-relaxed">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
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
<section class="py-24 bg-[#effaff] overflow-hidden">
<h2 className="text-center text-6xl md:text-7xl font-bold w-full">
         Trusted by thousands of happy Clients.
          </h2>
    <p class="text-center w-full text-lg text-gray-900 font-medium mt-8 mb-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam</p>
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-8">
      <div class="w-full md:w-1/3 p-8 bg-white rounded-lg">
        <div class="md:max-w-xs mx-auto text-center">
          <div class="flex justify-center mb-6 -m-1">
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
          </div>
          <h3 class="mb-4 text-2xl font-semibold leading-snug">
            <span>“An absolute revelation for templates.”</span>
          </h3>
          <h3>
            <p class="text-gray-600 font-medium">Forbes Magazine</p>
          </h3>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-8">
        <div class="md:max-w-xs mx-auto text-center">
          <div class="flex justify-center mb-6 -m-1">
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
          </div>
          <h3 class="mb-4 text-2xl font-semibold leading-snug">
            <span>“Exceptional Customer Service”</span>
          </h3>
          <h3>
            <p class="text-gray-600 font-medium">Forbes Magazine</p>
          </h3>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-8">
        <div class="md:max-w-xs mx-auto text-center">
          <div class="flex justify-center mb-6 -m-1">
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
            <div class="w-auto p-1">
              <svg width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.708 7.512L24 8.7168L18 14.5656L19.416 22.824L12 18.9264L4.584 22.824L6 14.5656L0 8.7168L8.292 7.512L12 0Z" fill="#4F46E5"></path>
              </svg>
            </div>
          </div>
          <h3 class="mb-4 text-2xl font-semibold leading-snug">
            <span>“Flaro makes my design life easier”</span>
          </h3>
          <h3>
            <p class="text-gray-600 font-medium">Forbes Magazine</p>
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Hero;
