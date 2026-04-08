import React from "react";

const Loading = ({ type = "card" }) => {
  if (type === "card") {
    return (
      <div className="bg-white shadow rounded-xl p-3 animate-pulse">
        <div className="w-full h-40 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Loading key={i} type="card" />
        ))}
      </div>
    );
  }

  // default spinner fallback
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;