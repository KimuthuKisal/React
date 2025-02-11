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
import EditJobPage from "./Pages/EditJobPage";

const App = () => {
  const loadJobData = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`/api/jobs/${id}`);
    if (!response.ok) {
      throw new Error("Job not found");
    }
    const job = await response.json();
    return job;
  };

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

  const saveUpdatedJob = async (job) => {
    const result = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
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
          path="/jobs/add"
          element={<AddJobPage addJobOnSubmit={addNewJob} />}
        />
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage saveUpdatedJob={saveUpdatedJob} />}
          loader={loadJobData}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
