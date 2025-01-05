import React, { ReactNode } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const TooltipButton = ({
  children,
  tooltipText,
}: {
  children: ReactNode;
  tooltipText: string;
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded bg-background dark:bg-gray2 outline-[1px] p-[6px] outline outline-gray6  text-xs leading-none shadow-sm will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            {tooltipText}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipButton;
