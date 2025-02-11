import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import React from "react";
import { FaArrowLeft, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirmation = window.confirm("Are you sure to delete this vacancy?");
    if (!confirmation) return;
    deleteJob(jobId);
    toast.success("Job Deleted Successfully.");
    navigate("/jobs");
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const result = await fetch(`/api/jobs/${id}`);
        if (!result.ok) {
          console.log("Failed to fetch job data.");
        }
        const data = await result.json();
        console.log("Fetched Job Data:", data);
        setJob(data);
        console.log("Set Job Data:", job);
      } catch (error) {
        console.log("Error while Loading : ", error);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return <Spinner loading={loading} />;
  }
  if (!job) {
    return (
      <h1 className="text-center text-red-500 text-xl">
        Job not found with id : {id} !
      </h1>
    );
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-orange-700 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarkerAlt className="inline text-lg mb-1 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Job Salary
                </h3>

                <p className="text-indigo-500 mb-2">
                  <FaMoneyBillWave className="inline text-lg mb-1 mr-1 text-green-700 mb-3" />{" "}
                  {job.salary} /Year
                </p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/jobs/edit/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;
