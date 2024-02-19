import React from "react";
import DemoTitle from "../../DemoComponents/DemoTitle/DemoTitle";
import CubertoDesignList from "../../ui/CurbertoDesignList/CubertoDesignList";

const data = [
  { title: "LinkedIn", link: "" },
  { title: "Dribble", link: "" },
  { title: "Instagram", link: "" },
  { title: "Facebook", link: "" },
  { title: "Behance", link: "" },
];

const CubertoDesignListDemo = () => {
  return (
    <div className="demo-wrapper">
      <DemoTitle
        title={"Cuberto Design List"}
        desc={"A hover state animated list from Cuberto Design"}
        details={[
          {
            detail: "Inspiration",
            link: "https://cuberto.com/#:~:text=SOCIAL,CONTACTS",
          },
          {
            detail: "Source Code",
            // link: "https://refire.heycusp.com/#:~:text=1-,Constant,-Evolution",
          },
          {
            detail: "Mon 20th Feb, 2024 | Bangalore, India",
          },
        ]}
      />
      <CubertoDesignList content={data} />
    </div>
  );
};

export default CubertoDesignListDemo;
