import React, { Children } from "react";
import "./JobDesc.css";

const JobDetails = ({
  title = "Software Developer @Airbus",
  timeline = "since July 2023",
  children,
}) => {
  return (
    <div className="job-details-wrap">
      <div className="job-details-header-wrap">
        <h3 className="job-title">{title}</h3>
        <p>{timeline}</p>
      </div>
      <div className="job-details">{children}</div>
    </div>
  );
};

export default JobDetails;
