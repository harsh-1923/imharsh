import React from "react";
import "./Home.css";
import SectionHeader from "../../component/SectionHeader/SectionHeader";
import JobDetails from "../../component/JobDetails/JobDetails";

const Home = () => {
  return (
    <div className="home-wrap">
      <SectionHeader header={"Currently"} />
      <JobDetails>
        <ul>
          <li>
            {" "}
            <p>
              Developing tools that enable various Airbus Simulators for
              development of new Aircrafts, pilot training, etc
            </p>
          </li>
          <li>
            <p>
              Integrating Variants Config,
              <span>
                that facilitates reuse of various system models for different
                Airbus Aircraft models
              </span>
            </p>
          </li>
          <li>
            <p>
              Initiated and implemented a robust documentation culture{" "}
              <span>
                {" "}
                to bridge the gap between Aircraft knowledge and the software
                implementation for the same
              </span>
            </p>
          </li>
          <li>
            <p>
              Exploring the possibility of implementing a concurrent, multi user
              Web based application of our tools to enhance cross collaboration
              between teams in Europe and India
            </p>
          </li>
        </ul>
      </JobDetails>
    </div>
  );
};

export default Home;
