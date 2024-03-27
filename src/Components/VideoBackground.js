import React from "react";
import { useSelector } from "react-redux";
import useMoiveTrailer from "../Hooks/useMoiveTrailer";

const VideoBackground = ({ MoiveId }) => {
  const trailerVideo = useSelector((store) => store.moives?.trailerVideo);
  useMoiveTrailer(MoiveId);
  return (
    <div className="w-screen top-0 left-0">
      <iframe
        className=" w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        width={"100%"}
        height={"100%"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
