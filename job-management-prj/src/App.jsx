import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import JobList from "./Components/JobList";
import FooterBar from "./Components/FooterBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero
        title="React Journey"
        subtitle="Find the most suitable React job for you..."
      />
      <Cards />
      <JobList />
      <FooterBar hrefLink="jobs.html" btnInfo="View All Jobs" />
    </>
  );
};

export default App;
