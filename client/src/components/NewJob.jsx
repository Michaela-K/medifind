import React from "react";

const NewJob = () => {
  return (
    <div className="relative flex justify-center min-h-screen overflow-hidden">
      <div className="w-[1000px] p-12 m-auto bg-white rounded-md shadow-md max-w-[80vw] min-w-[350px]">
        <h1 className="text-5xl pb-8 text-[#24233E] text-center">
          New Job
        </h1>
        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-md text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="worker"
              className="block text-md text-gray-600"
            >
              Type of Worker requested
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rate"
              className="block text-md text-gray-600"
            >
              Rate
            </label>
            <input
              type="number"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-md text-gray-600"
            >
              Gender
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-md text-gray-600"
            >
              Date
            </label>
            <input
              type="date"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="start_time"
              className="block text-md text-gray-600"
            >
              Start Time
            </label>
            <input
              type="time"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="facility_name"
              className="block text-md text-gray-600"
            >
              Name Of Facility
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="facility_short_address"
              className="block text-md text-gray-600"
            >
              Facility Address
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#6c77d1] focus:ring-[#6c77d1] focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-16 text-lg font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewJob;
