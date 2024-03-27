import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div>
        <button className="bg-white text-black hover:bg-opacity-80 p-2 px-6 text-xl rounded-md">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-80 p-2 px-8 text-xl rounded-md ml-3">
          {" "}
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
