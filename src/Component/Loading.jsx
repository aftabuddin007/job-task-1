import React from "react";

const Loading = ({ fullScreen = false }) => {
  return (
    <div
      className={`${
        fullScreen
          ? "fixed inset-0 z-50"
          : "w-full h-[300px] rounded-xl"
      } flex items-center justify-center `}
    >
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated Circle */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-indigo-700 font-semibold tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;