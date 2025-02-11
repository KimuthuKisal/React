import { useState, useEffect } from "react";
import React from "react";
import jobDetails from "./../jobs.json";
import Job from "./Job";
import Spinner from "./Spinner";

const JobList = ({ recent = false }) => {
  // const jobs = recent ? jobDetails.slice(-3).reverse() : jobDetails;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result = await fetch("/api/jobs");
        const data = await result.json();
        if (Array.isArray(data)) {
          const processedJobs = recent ? data.slice(-3).reverse() : data;
          setJobs(processedJobs);
        } else {
          setJobs([]);
        }
      } catch (error) {
        console.log("Error while Loading : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {recent ? "Recent Jobs" : "Available Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((jobDetail) => (
              <Job
                key={jobDetail.id}
                type={jobDetail.type}
                title={jobDetail.title}
                description={jobDetail.description}
                salary={jobDetail.salary}
                location={jobDetail.location}
                company={jobDetail.company}
                hrefLink={`/jobs/${jobDetail.id}`}
                date={jobDetail.date}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;
