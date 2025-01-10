import CraftHeader from "@/components/CraftHeader";
import IOSMailTabs from "@/components/exp/IOSMailTabs";
import React from "react";

const page = () => {
  return (
    <div className="pt-[var(--navbar-height)]">
      <CraftHeader title="iOS Mail Tabs" date="Jan 2024" />

      <div className="w-full min-h-[400px] p-4 bg-[var(--colors-gray3)] dark:bg-[#1c1c1c] flex items-center justify-center mb-[200px] py-10">
        <IOSMailTabs />
      </div>
    </div>
  );
};
{
  /* <div className="w-[300px] aspect-[9/18] shadow-md rounded-[40px] border-2 bg-white"></div> */
}

export default page;
