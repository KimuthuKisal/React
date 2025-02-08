import React from "react";
import { Link } from "react-router-dom";

const FooterBar = ({ hrefLink, btnInfo }) => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to={hrefLink}
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        {btnInfo}
      </Link>
    </section>
  );
};

export default FooterBar;
