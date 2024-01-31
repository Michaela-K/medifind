import React, { useContext, useState, useEffect } from "react";
import { JobsContext } from "../context/index";
import Modal from "./Modal";
import { FaCheckToSlot } from "react-icons/fa6";

import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

const JobsList = () => {
  const { jobData, setJobData } = useContext(JobsContext);

  const [open, setOpen] = useState(false);
  const [jobId, setJobId] = useState(0);
  const [jobStatus, setJobStatus] = useState({ is_filled: false });
  const [updateJob, setUpdateJob] = useState(false);

  useEffect((e) => {
    if(updateJob){
      handleupdateJob();
    }
  }, [updateJob, jobId]);

  const clickedJob = (jobId) => {
    return jobData.find((job) => job.id === jobId);
  };

  const handleupdateJob = async (e) => {
    // e.preventDefault();
    let id = Number(jobId);
    console.log(id, jobStatus);
    try {
      const url = `http://localhost:4000/api/jobs/${id}`;
      const method = "PUT";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobStatus),
      });

      if (response.ok) {
        setJobData((prevJobData) =>
          prevJobData.map((job) =>
            job.id === id ? { ...job, is_filled: !prevJobData.is_filled } : job
          )
          );
          console.log("Job Status updated successfully", jobStatus);
      } else {
        // Handle error cases here
        console.error("Error updating job status:", response.statusText);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
    setUpdateJob(false)
    window.location.reload(); 
  };

  // const cancelShift = async(e, shift) => {
  //     e.preventDefault();
  //     let id = shift.id;
  //     try {
  //       const url = `http://localhost:4000/api/jobs/${id}`;
  //       const method = "PUT";
  //       // await sendApiRequest(url, method);
  //       console.log("Shift cancelled successfully");
  //     } catch (error) {
  //       console.error("There was a problem with the fetch operation:", error);
  //     }
  //     setOpen(!open);
  //     window.location.reload();    
  // };

  // const handleCancel = (shift) => {
  //   cancelShift(shift);
  // };

  useEffect(() => {}, [jobData]);

  return (
    <div className="flex flex-col h-[100vh] m-20 min-w-[320px]">
      <div className="heading flex flex-col justify-center items-center">
        <h1 className="text-6xl pb-8 text-[#24233E]">Jobs</h1>
        <div className="mb-16 max-w-screen-md">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="text-stone-700 text-xl font-medium">Filters</h2>
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <select
                  id="hospital"
                  className="mt-1 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 "
                >
                  <option>Hospital</option>
                  <option>Mount Sinai Hospital</option>
                  <option>Sunnybrook Health Sciences Centre</option>
                  <option>St. Michael's Hospital</option>
                  <option>Toronto General Hospital</option>
                  <option>Princess Margaret Cancer Centre</option>
                  <option>The Hospital for Sick Children (SickKids)</option>
                  <option>Toronto Western Hospital</option>
                  <option>St. Joseph's Healthcare Hamilton</option>
                  <option>Hamilton Health Sciences</option>
                  <option>London Health Sciences Centre</option>
                  <option>The Ottawa Hospital</option>
                  <option>CHEO - Children's Hospital of Eastern Ontario</option>
                  <option>Kingston Health Sciences Centre</option>
                  <option>McMaster University Medical Centre</option>
                  <option>Thunder Bay Regional Health Sciences Centre</option>
                  <option>Windsor Regional Hospital</option>
                  <option>Grand River Hospital</option>
                  <option>
                    Trillium Health Partners - Credit Valley Hospital
                  </option>
                  <option>
                    Trillium Health Partners - Mississauga Hospital
                  </option>
                  <option>
                    William Osler Health System - Brampton Civic Hospital
                  </option>
                </select>
              </div>

              <div className="flex flex-col">
                <select
                  id="location"
                  className="mt-1 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>Location</option>
                  <option>Toronto</option>
                  <option>Montreal</option>
                  <option>Vancouver</option>
                  <option>Calgary</option>
                  <option>Edmonton</option>
                  <option>Ottawa</option>
                  <option>Winnipeg</option>
                  <option>Quebec City</option>
                  <option>Hamilton</option>
                  <option>Kitchener</option>
                  <option>London</option>
                  <option>Victoria</option>
                  <option>Halifax</option>
                  <option>Oshawa</option>
                  <option>Windsor</option>
                  <option>Saskatoon</option>
                  <option>Regina</option>
                  <option>St. Catharines</option>
                  <option>Barrie</option>
                  <option>Kelowna</option>
                  <option>Greater Sudbury</option>
                  <option>Kingston</option>
                  <option>Guelph</option>
                  <option>Thunder Bay</option>
                  <option>Waterloo</option>
                  <option>Brantford</option>
                  <option>Saint John</option>
                  <option>Red Deer</option>
                  <option>Lethbridge</option>
                  <option>Kamloops</option>
                  <option>Nanaimo</option>
                  <option>Medicine Hat</option>
                  <option>Fredericton</option>
                  <option>Prince George</option>
                  <option>Chilliwack</option>
                  <option>Sault Ste. Marie</option>
                  <option>Drummondville</option>
                  <option>Kawartha Lakes</option>
                  <option>Grande Prairie</option>
                  <option>Wood Buffalo</option>
                  <option>Brandon</option>
                  <option>North Bay</option>
                  <option>Norfolk County</option>
                  <option>Shawinigan</option>
                  <option>Penticton</option>
                  <option>Vernon</option>
                  <option>St. Thomas</option>
                  <option>Courtenay</option>
                  <option>Campbell River</option>
                  <option>Moose Jaw</option>
                </select>
              </div>

              <div className="flex flex-col">
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full rounded-md border border-gray-200 px-2 py-1.5 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mt-1 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button className="active:scale-95 rounded-lg bg-[#6c77d1] px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap:8 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 xs:flex justify-center gap-8">
        {jobData &&
          jobData.map((job, index) => (
            <div
              key={index}
              className="relative overflow-hidden h-[300px] max-w-[400px] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
            >
              {/* {job.id} */}
              <div className="pt-1 px-6 z-0">
                <div className="flex justify-between pt-5">
                  <h5 className="mb-2.5 text-xl font-medium leading-tight text-neutral-800">
                    {job.facility_name}
                  </h5>
                  {job.is_filled ? (
                    <p className="flex justify-end text-green-500 text-4xl">
                      <FaCheckToSlot />
                    </p>
                  ) : null}
                </div>
                <p className="mb-4 text-base">{job.title}</p>
              </div>
              <div className="lower-card absolute w-full bottom-0 px-6 z-10 bg-white">
                <div className="job-btns">
                  <p className="mb-8 text-base font-medium">${job.rate}/ hr</p>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(!open);
                      setJobId(job.id);
                    }}
                    className="inline-block rounded bg-[#b6b9d8] w-[100%] px-6 pb-2 mb-1 pt-2.5 mr-4 text-xs font-medium uppercase leading-normal shadow-[0_2px_7px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
                  >
                    Details
                  </button>
                  {/* <button
                    type="button"
                    className="bg-[#7B84D3] text-white inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_2px_7px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
                  >
                    Accept Job
                  </button> */}
                </div>
                <div className="px-1 py-3">
                  {" "}
                  <ReactTimeAgo
                    key={index}
                    date={Date.parse(job.date)}
                    locale="en-US"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      {open ? (
        <>
          <Modal>
            <div className="relative flex flex-col gap-2 bg-white p-8 rounded-lg h-[50vh] w-[30vw]">
              <h1 className="text-5xl text-black mt-4 mb-1">
                {clickedJob(jobId).title}
              </h1>
              <hr />
              <h1 className="text-3xl text-black mt-1">
                {clickedJob(jobId).facility_name}
              </h1>
              <div className="flex w-full justify-between text-2xl font-medium">
                <p className="text-1xl text-black mt-1">
                  {clickedJob(jobId).type_of_worker}
                </p>
                <p className="text-1xl text-black mt-1">
                  ${clickedJob(jobId).rate}/ hr
                </p>
              </div>
              <p className="text-[1.285rem] text-black mt-1">
                Gender required: {clickedJob(jobId).gender}
              </p>
              <p className="text-black mt-1">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              {clickedJob(jobId).is_filled ? (
                <div className="absolute w-full pr-16 py-8 bottom-0 flex flex-row gap-2">
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold text-lg rounded-lg"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setJobStatus((prevJobStatus) => ({
                        ...prevJobStatus,
                        is_filled: false,
                      }));
                      setUpdateJob((prev) => !prev);
                    }}
                    className="flex-1 bg-[#9e2e2a] text-white inline-block rounded-lg px-6 pb-2 pt-2.5 font-medium uppercase shadow-[0_2px_7px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
                  >
                    Cancel My Shift
                  </button>
                </div>
              ) : (
                <div className="absolute w-full pr-16 py-8 bottom-0 flex flex-row gap-2">
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold text-lg rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setJobStatus((prevJobStatus) => ({
                        ...prevJobStatus,
                        is_filled: true,
                      }));
                      setUpdateJob((prev) => !prev);
                    }}
                    className="flex-1 bg-[#7B84D3] text-white inline-block rounded-lg px-6 pb-2 pt-2.5 font-medium uppercase shadow-[0_2px_7px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700"
                  >
                    Accept Job
                  </button>
                </div>
              )}
            </div>
          </Modal>
        </>
      ) : null}
    </div>
  );
};

export default JobsList;
