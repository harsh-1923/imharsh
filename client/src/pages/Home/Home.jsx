import React from "react";
import "./Home.css";
import SectionHeader from "../../component/SectionHeader/SectionHeader";
import JobDetails from "../../component/JobDetails/JobDetails";
import Navbar from "../../component/Navbar/Navbar";

import AssistantChat from "../../component/AssistantChat/AssistantChat";

const Home = () => {
  return (
    <div className="home-wrap">
      <div className="hue" />
      <Navbar />
      <AssistantChat />

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
              Integrating Variants Config,{" "}
              <span>
                that facilitates re-use of various system models for different
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
              Exploring the possibility of implementing a concurrent, multi-user
              Web based application of our tools to enhance cross collaboration
              between teams in Europe and India
            </p>
          </li>
        </ul>
      </JobDetails>

      <SectionHeader header={"Previously"} />
      <JobDetails
        title="Software Developer @SlangLabs"
        timeline="Sept 2023 - June 2024"
      >
        <ul>
          <li>
            <p>
              Developed key features of Slang's WebSDK for CONVA,{" "}
              <span> a generative AI powered Voice Assistant</span>
            </p>
          </li>
          <li>
            <p>
              Developed ConsoleV3,
              <span>
                {" "}
                a one stop solution for Product Managers at Nykaa, Redbus, ICICI
                Securities, Tata Digital etc to manage and train Voice Assistant
              </span>
            </p>
          </li>
          <li>
            <p>
              Implemented Disambiguation Search, providing an adaptive UI that
              lets users choose the correct option between search results best
              matching the users input with significantly improved user
              experience and retention
            </p>
          </li>
          <li>
            <p>
              Lead a pilot project to integrate Slang Voice Assistants in
              Shopify for BoAT, etc
            </p>
          </li>
        </ul>
      </JobDetails>

      <SectionHeader header={"FAQs"} />
      {/* <FAQ /> */}
      <div className="filler"></div>
    </div>
  );
};

export default Home;
