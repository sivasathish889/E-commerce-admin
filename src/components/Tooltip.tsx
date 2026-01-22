import React from "react";

interface TooltipProps extends React.CSSProperties {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, className }) => {
  return (
    <div className={className}>
      <div className={`relative inline-block group `}>
        {children}
        <span
          className={`invisible absolute text-xs bottom-[125%] left-1/2 -translate-x-1/2  bg-gray-800 text-white text-center rounded px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 whitespace-nowrap`}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
