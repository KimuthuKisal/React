import React from "react";

const FooterBar = ({ hrefLink, btnInfo }) => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href={hrefLink}
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        {btnInfo}
      </a>
    </section>
  );
};

export default FooterBar;
