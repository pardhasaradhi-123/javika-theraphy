import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found
      </p>
      <p className="text-gray-600 mt-2">
        The page you’re looking for doesn’t exist or has been removed.
      </p>

      {/* <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 rounded-2xl bg-blue-600 text-white text-lg font-medium shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </button> */}
    </div>
  );
};

export default NotFound;
