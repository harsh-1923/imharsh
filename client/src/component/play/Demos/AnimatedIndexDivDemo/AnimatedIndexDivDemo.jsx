import React from "react";
import AnimatedDivIndex from "../../ui/AnimatedDivIndex/AnimatedDivIndex";
import DemoTitle from "../../DemoComponents/DemoTitle/DemoTitle";

const data = [
  {
    title: "Component Reusability",
    content:
      "Our UI library offers a wide range of reusable components, allowing developers to easily integrate and customize them across different projects. This promotes consistency in design and functionality, saving time and effort in development.",
  },
  {
    title: "Responsive Design",
    content:
      "We prioritize responsive design in our UI library, ensuring that components adapt seamlessly to various screen sizes and devices. Whether it's desktop, tablet, or mobile, our components provide an optimal viewing experience for users.",
  },
  {
    title: "Accessibility",
    content:
      "Accessibility is at the forefront of our UI library. We adhere to best practices and standards to ensure that our components are accessible to all users, including those with disabilities. This commitment reflects our belief in inclusivity and usability for everyone.",
  },
  {
    title: "Customization Options",
    content:
      "Our UI library offers extensive customization options, allowing developers to tailor components to suit their specific design requirements. From colors and typography to layout and behavior, developers have the flexibility to create unique interfaces that align with their brand identity.",
  },
  {
    title: "Documentation and Support",
    content:
      "We provide comprehensive documentation and support resources to assist developers in using our UI library effectively. Whether it's tutorials, API references, or community forums, we empower developers with the knowledge and assistance they need to leverage our library efficiently.",
  },
  {
    title: "Performance Optimization",
    content:
      "Performance is a key consideration in our UI library. We optimize our components for speed and efficiency, ensuring smooth rendering and interaction even in demanding applications. By prioritizing performance, we enhance the overall user experience and satisfaction.",
  },
];

const AnimatedIndexDivDemo = () => {
  return (
    <div>
      <DemoTitle
        title={"Animated Div Index"}
        desc={"An animated component that shows the current index in view."}
        details={[
          {
            detail: "Inspiration",
            link: "https://refire.heycusp.com/#:~:text=1-,Constant,-Evolution",
          },
          {
            detail: "Source Code",
            // link: "https://refire.heycusp.com/#:~:text=1-,Constant,-Evolution",
          },
          {
            detail: "Mon 19th Feb, 2024 | Bangalore, India",
          },
        ]}
      />
      <AnimatedDivIndex contentList={data} />
    </div>
  );
};

export default AnimatedIndexDivDemo;
