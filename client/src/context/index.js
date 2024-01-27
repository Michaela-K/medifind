import React, { createContext, useState } from 'react'
import { useJobs} from '../hooks'

const JobsContext = createContext()

function JobsContextProvider({children}){

    const jobData = useJobs()

    return (
        <JobsContext.Provider
            value={
                {
                  jobData
                }
            }
        >
            {children}
        </JobsContext.Provider>
    )
}

export { JobsContextProvider, JobsContext }