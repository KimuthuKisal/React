import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";

import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import ViewAllJobsPage from "./Pages/ViewAllJobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";

const App = () => {
  const addNewJob = async (newJob) => {
    const result = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    const result = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<ViewAllJobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobOnSubmit={addNewJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
