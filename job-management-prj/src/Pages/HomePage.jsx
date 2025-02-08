import React from "react";
import Hero from "./../Components/Hero";
import Cards from "./../Components/Cards";
import JobList from "./../Components/JobList";
import FooterBar from "./../Components/FooterBar";

const HomePage = () => {
  return (
    <>
      <Hero
        title="React Journey"
        subtitle="Find the most suitable React job for you..."
      />
      <Cards />
      <JobList recent={true}/>
      <FooterBar hrefLink="/jobs" btnInfo="View All Jobs" />
    </>
  );
};

export default HomePage;
