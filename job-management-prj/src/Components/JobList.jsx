import React from "react";
import jobDetails from "./../jobs.json";
import Job from "./Job";

const JobList = ({ recent = false }) => {
  const jobs = recent ? jobDetails.slice(-3).reverse() : jobDetails;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {recent ? "Recent Jobs" : "Available Jobs"}
        </h2>
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
              hrefLink={`/job/${jobDetail.id}`}
              date={jobDetail.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
