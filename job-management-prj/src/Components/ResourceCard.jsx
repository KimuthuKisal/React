import React from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({ platform, description, topic, hrefLink }) => {
  return (
    <div className={`bg-indigo-100 p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold text-blue-600 uppercase tracking-wide mb-2">{platform}</h2>
      <h2 className="text-xl font-semibold text-gray-700 italic">{topic}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link
        to={hrefLink}
        className={`inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600`}
      >
        Explore More
      </Link>
    </div>
  );
};

export default ResourceCard;
