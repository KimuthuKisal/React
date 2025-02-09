import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

const spinnerStyle = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return <ClipLoader 
  color='bg-indigo-700'
  loading={loading}
  cssOverride={spinnerStyle}
  size={150}
  />;
};

export default Spinner;
