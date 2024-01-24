import React from 'react'

const JobsList = () => {
  return (
    <div className="flex h-[100vh] m-20">
      <div className="max-h-[350px] max-w-[350px] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800">
              Toronto General Hospital
            </h5>
            <p className="mb-4 text-base">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700">
                Accept Job
              </button>
          
          </div>
          <div
            className="px-6 py-3">
            2 days ago
          </div>
      </div>
    </div>
  )
}

export default JobsList