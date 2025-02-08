import React from "react";
import { useState } from "react";
import { FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({
  bgColor = "bg-white",
  type,
  title,
  description,
  salary,
  location,
  hrefLink = "job.html",
  date,
}) => {
  const [fullDescription, setFullDescription] = useState(false);
  let viewDescription = description;
  if (!fullDescription && description.length > 100) {
    const lastSpaceIndex = description.lastIndexOf(" ", 100);
    viewDescription =
      description.substring(0, lastSpaceIndex !== -1 ? lastSpaceIndex : 100) +
      " ...";
  }

  return (
    <div className={`${bgColor} rounded-xl shadow-md relative`}>
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{type}</div>
          <div className="flex items-center">
            <h3 className="text-xl font-bold mr-4">{title}</h3>{" "}
            <div className="text-gray-600 my-2">( {date} )</div>
          </div>
        </div>
        <div className="mb-1">{viewDescription}</div>
        <button
          onClick={() => setFullDescription((currState) => !currState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {fullDescription ? "View Less" : "View More"}
        </button>
        <h3 className="text-indigo-500 mb-2">
          <FaMoneyBillWave className="inline text-lg mb-1 mr-1 text-green-700 mb-3" />{" "}
          {salary} /Year
        </h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarkerAlt className="inline text-lg mb-1 mr-1" />
            {location}
          </div>
          <Link
            to={hrefLink}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
