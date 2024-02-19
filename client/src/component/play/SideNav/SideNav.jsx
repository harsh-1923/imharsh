import React, { useEffect } from "react";
import "./SideNav.css";
import { gsap } from "gsap";
import sidenavOptions from "../util.js";

const SideNavOption = ({ setSelected, option, value, selected }) => {
  const fw = selected == value ? "600" : "400";
  return (
    <div onClick={() => setSelected(value)} className="nav-option">
      <p style={{ fontWeight: fw }}>{option}</p>
    </div>
  );
};

const SideNav = ({ setSelected, selected }) => {
  return (
    <div className="sidenav-wrap">
      {sidenavOptions.map((item, index) => {
        return (
          <SideNavOption
            key={index}
            setSelected={setSelected}
            option={item.title}
            value={index}
            selected={selected}
          />
        );
      })}
    </div>
  );
};

// const SideNavs = ({ setSelected, selected }) => {
//   useEffect(() => {
//     gsap.fromTo(
//       ".side-nav-options-wrap",
//       { maxHeight: 0, opacity: 0 },
//       { maxHeight: "100vh", opacity: 1, duration: 2 }
//     );
//   }, []);
//   return (
//     <div className="sidenav-wrap border">
//       <div className="side-nav-options-wrap">
//         {SideNavData.map((item, index) => {
//           return (
//             <SideNavOption
//               setSelected={setSelected}
//               option={item}
//               value={index}
//               selected={selected}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default SideNav;

{
  /* <SideNavOption
        setSelected={setSelected}
        option={"Reveal Text Animation"}
        value={0}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Animated Button"}
        value={1}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Animated Divider"}
        value={2}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Spring Divider"}
        value={3}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Name Logo"}
        value={4}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Grid Background"}
        value={5}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Dot Background"}
        value={6}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"SVGPAth"}
        value={7}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Loader"}
        value={8}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Loaderssd"}
        value={9}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"SVG Trick"}
        value={10}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Growing Border"}
        value={11}
        selected={selected}
      /> */
}
