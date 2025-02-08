import React from "react";

const Card = ({
  header,
  description,
  btnInfo,
  bgColor,
  btnColor,
  btnHoverColor,
  hrefLink,
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{header}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <a
        href={hrefLink}
        className={`inline-block ${btnColor} text-white rounded-lg px-4 py-2 hover:${btnHoverColor}`}
      >
        {btnInfo}
      </a>
    </div>
  );
};

export default Card;
