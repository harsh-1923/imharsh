import React from "react";
import "./Home.css";
import SectionHeader from "../../component/SectionHeader/SectionHeader";
import JobDetails from "../../component/JobDetails/JobDetails";
import Navbar from "../../component/Navbar/Navbar";
import FAQ from "../../component/FAQ/FAQ";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import AssistantChat from "../../component/AssistantChat/AssistantChat";

const Home = () => {
  // const runChat = async () => {
  //   const API_KEY = "AIzaSyCZCmZayy-SMH7EzmRd4ieaXm6UO12zDwk";
  //   const MODEL_NAME = "gemini-1.0-pro";

  //   const genAI = new GoogleGenerativeAI(API_KEY);
  //   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  //   const generationConfig = {
  //     temperature: 0.9,
  //     topK: 1,
  //     topP: 1,
  //     maxOutputTokens: 2048,
  //   };

  //   const safetySettings = [
  //     {
  //       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //     },
  //     {
  //       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  //       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //     },
  //     {
  //       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  //       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //     },
  //     {
  //       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
  //       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  //     },
  //   ];

  //   const chat = model.startChat({
  //     generationConfig,
  //     safetySettings,
  //     history: [],
  //   });

  //   const result = await chat.sendMessage("Whats the capital of India");
  //   const response = result.response;
  //   console.log(response.text());

  //   const secondResponse = await chat.sendMessage(
  //     "Can you recommend restaurants there?"
  //   );
  //   console.log(secondResponse.response.text());
  // };
  // React.useEffect(() => {
  // runChat();
  // }, []);
  return (
    <div className="home-wrap">
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
